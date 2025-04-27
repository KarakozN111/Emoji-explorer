import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EmojiDetailsComponent } from "./emoji/emoji-details/emoji-details.component";
import { EmojiListComponent } from "./emoji/emoji-list/emoji-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, EmojiDetailsComponent, EmojiListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  showEmojis = false;

  toggleView() {
    this.showEmojis = !this.showEmojis;
  }
}
