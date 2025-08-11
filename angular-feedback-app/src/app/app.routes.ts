import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ApiDataComponent } from './pages/api-data/api-data';
import { FeedbackFormComponent } from './pages/feedback-form/feedback-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: '**', redirectTo: '' }
];
