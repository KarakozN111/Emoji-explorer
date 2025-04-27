import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

export interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];  
  unicode: string[];
}

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private apiUrl = 'http://localhost:8000/api/emojis/';

  constructor(private http: HttpClient) { }

getEmojis(): Observable<Emoji[]> {
  return this.http.get<Emoji[]>(this.apiUrl).pipe(
    map(response => {
      if (!response) throw new Error('Empty API response');
      return response.map(emoji => ({
        name: emoji.name || 'Unknown',
        category: emoji.category || 'uncategorized',
        group: emoji.group || '',
        htmlCode: emoji.htmlCode?.[0] ? [emoji.htmlCode[0]] : [''],
        unicode: emoji.unicode || []
      }));
    }),
    catchError(err => {
      console.error('API Error:', err);
      return of([]); 
    })
  );
}
}