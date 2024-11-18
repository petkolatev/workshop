import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]'
  user: UserForAuth | null = null

  get isLogged(): boolean {
    return !!this.user
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = null
    }
  }

  login() {
    this.user = {
      firstName: 'petko',
      email: 'petko@abv.bg',
      phoneNumber: '321-321',
      password: '123123',
      id: 'asdasd'
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY)
  }
}
