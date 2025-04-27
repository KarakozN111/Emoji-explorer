import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  checkRouter() {
    console.log('Current routes:', this.router.config);
    this.router.navigateByUrl('/emojis').then(success => {
      console.log('Navigation success:', success);
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
  showEmojis = false;
  toggleView() {
    this.showEmojis = !this.showEmojis;
  }

}
