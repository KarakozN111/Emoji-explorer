import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../emoji.service';
import { Emoji } from '../emoji.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-emoji-list',
  templateUrl: './emoji-list.component.html',
  styleUrls: ['./emoji-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule], 
})

export class EmojiListComponent implements OnInit {
  emojis: Emoji[] = [];
  filteredEmojis: Emoji[] = [];
  isLoading = true;
  searchTerm = '';
  selectedCategory = 'all';
  sortBy = 'name';
  categories: string[] = [];
  errorMessage: string | null = null;

constructor(private emojiService: EmojiService) { }

ngOnInit(): void {
    this.loadEmojis();
  }

  loadEmojis(): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.emojiService.getEmojis().subscribe({
      next: (emojis) => {
        this.emojis = emojis || []; 
        this.filteredEmojis = [...this.emojis];
        this.categories = [...new Set(this.emojis.map(e => e.category))];
        this.isLoading = false;
        
        if (this.emojis.length === 0) {
          this.errorMessage = 'No emojis available';
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.errorMessage = 'Failed to load emojis. Please try again later.';
        this.isLoading = false;
        this.filteredEmojis = [];
      }
    });
  }

  filterEmojis(): void {
    if (!this.emojis || this.emojis.length === 0) return;
    this.filteredEmojis = this.emojis.filter(emoji => {
      const nameMatch = emoji.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false;
      const categoryMatch = this.selectedCategory === 'all' || emoji.category === this.selectedCategory;
      return nameMatch && categoryMatch;
    });
    
    this.sortEmojis();
  }

  sortEmojis(): void {
    if (!this.filteredEmojis || this.filteredEmojis.length === 0) return;
    
    this.filteredEmojis.sort((a, b) => {
  
      const aName = a.name || '';
      const bName = b.name || '';
      const aCategory = a.category || '';
      const bCategory = b.category || '';
      
      if (this.sortBy === 'name') {
        return aName.localeCompare(bName);
      } else {
        return aCategory.localeCompare(bCategory) || aName.localeCompare(bName);
      }
    });
  }
}