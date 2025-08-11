# Angular Feedback Application

A client-side web application built with Angular that demonstrates navigation, API consumption, and reactive forms.

## Features

- Client-side navigation with Angular Router
- API data consumption using Angular HttpClient
- Reactive form with validation
- Bootstrap styling for responsive design

## Pages

1. **Home Page**: Landing page with introductory text
2. **API Data Page**: Displays posts from JSONPlaceholder API
3. **Feedback Form**: Interactive form with validation

## Technologies Used

- Angular 18
- Bootstrap 5.3
- TypeScript
- Angular Router
- Angular Reactive Forms
- HttpClient

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   ng serve
   ```
4. Open browser and navigate to `http://localhost:4200`

## Build and Deploy

1. Build the application:
   ```bash
   ng build
   ```
2. Deploy the contents of the `dist` folder to your preferred hosting platform (GitHub Pages, Netlify, or Vercel)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── nav-bar/
│   ├── pages/
│   │   ├── home/
│   │   ├── api-data/
│   │   └── feedback-form/
│   ├── services/
│   │   └── api.ts
│   ├── app.ts
│   ├── app.html
│   └── app.routes.ts
└── assets/
```

## Features Implemented

- Navigation bar with responsive design
- Client-side routing with Angular Router
- API integration with JSONPlaceholder
- Reactive form with validation
- Bootstrap styling integration
- Error handling and loading states
