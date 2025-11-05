import { Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', loadComponent: () => import('./features/chat/chat.component').then(m => m.ChatComponent) }
];
