import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmojiListComponent } from './emoji/emoji-list/emoji-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emojis', component: EmojiListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }