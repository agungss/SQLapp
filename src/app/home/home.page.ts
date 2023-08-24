import { Component } from '@angular/core';
import { DatabaseService, User } from '../services/database.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  users = this.database.getUsers();
  
  newUserName = '';

  constructor(private database: DatabaseService) {}

  async createUser() {
    await this.database.addUser(this.newUserName);
    this.newUserName = '';
  }

  updateUser(user: User) {
    const active = user.active ? 1 : 0;
    this.database.updateUserById(user.id.toString(), active);
  }

  deleteUser(user: User) {
    this.database.deleteUserById(user.id.toString());
  }
}
