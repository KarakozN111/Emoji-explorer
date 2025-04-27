import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmojiListComponent } from './emoji/emoji-list/emoji-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'emojis', component: EmojiListComponent },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
    imports:  [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }