import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  validateUser(data: any) {
    if (data.username === 'test' && data.password == 'test') {
      return true;
    }
    return false;
  }
}
