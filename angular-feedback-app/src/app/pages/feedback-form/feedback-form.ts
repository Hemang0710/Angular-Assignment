import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeedbackService, FeedbackData } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm!: FormGroup;
  submitted = false;
  submitSuccess = false;
  feedbackList: FeedbackData[] = [];

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Subscribe to feedback updates
    this.feedbackService.getFeedbackList().subscribe(feedback => {
      this.feedbackList = feedback;
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.feedbackForm.valid) {
      this.feedbackService.submitFeedback(this.feedbackForm.value);
      this.submitSuccess = true;
      this.feedbackForm.reset();
      this.submitted = false;

      // Show success message for 3 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 3000);
    }
  }

  onDelete(timestamp: Date) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(timestamp);
    }
  }

  get f() {
    return this.feedbackForm.controls;
  }
}
