import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FeedbackData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackList: FeedbackData[] = [];
  private feedbackSubject = new BehaviorSubject<FeedbackData[]>([]);

  constructor() {
    // Load feedback from localStorage if available
    const savedFeedback = localStorage.getItem('feedbackData');
    if (savedFeedback) {
      this.feedbackList = JSON.parse(savedFeedback);
      this.feedbackSubject.next(this.feedbackList);
    }
  }

  submitFeedback(feedback: Omit<FeedbackData, 'timestamp'>): void {
    const newFeedback: FeedbackData = {
      ...feedback,
      timestamp: new Date()
    };
    
    this.feedbackList.push(newFeedback);
    this.feedbackSubject.next(this.feedbackList);
    this.saveToLocalStorage();
  }

  deleteFeedback(timestamp: Date): void {
    this.feedbackList = this.feedbackList.filter(
      feedback => feedback.timestamp.toString() !== timestamp.toString()
    );
    this.feedbackSubject.next(this.feedbackList);
    this.saveToLocalStorage();
  }

  getFeedbackList(): Observable<FeedbackData[]> {
    return this.feedbackSubject.asObservable();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('feedbackData', JSON.stringify(this.feedbackList));
  }
}