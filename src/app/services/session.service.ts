import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}
  insrtIntoSession(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getIntoSession(key: string) {
    return localStorage.getItem(key);
  }

  removeFromoSession(key: string) {
    localStorage.removeItem(key);
  }
}
