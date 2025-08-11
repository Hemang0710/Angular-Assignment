import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.scss'
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts. Please try again later.';
        this.loading = false;
      }
    });
  }
}
