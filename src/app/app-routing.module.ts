import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/authors' },
  { path: 'authors', loadChildren: () => import('./pages/authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'publications', loadChildren: () => import('./pages/publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'publishers', loadChildren: () => import('./pages/publishers/publishers.module').then(m => m.PublishersModule) },
  { path: 'reviews', loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
