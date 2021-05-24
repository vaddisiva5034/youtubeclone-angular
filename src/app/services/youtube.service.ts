import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  KEY = '<youtube api key>';
  constructor(private _http: HttpClient) {}
  getYoutubeList(searchTerm: string) {
    return this._http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: this.KEY,
      },
    });
  }
}
