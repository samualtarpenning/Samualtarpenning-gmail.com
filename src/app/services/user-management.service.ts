import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor() {}

  addUser() {
    console.log('add');
  }

  removeUser() {
    console.log('remove');
  }
}
