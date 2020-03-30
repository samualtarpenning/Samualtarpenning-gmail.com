import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { UserManagementService } from 'src/app/services/user-management.service';
import { ModalController } from '@ionic/angular';
import { UserManagementDialogComponent } from './components/user-management-dialog/user-management-dialog.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss']
})
export class UserManagementPage implements OnInit {
  items: Observable<any[]>;
  constructor(
    firestore: AngularFirestore,
    public userManagmentService: UserManagementService,
    public modalController: ModalController
  ) {
    // Watching for user list to change
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit() {}

  addUser() {
    this.presentModal();
  }
  editUser() {
    console.log('edit');
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: UserManagementDialogComponent
    });
    return await modal.present();
  }

  // removeUser('user') {
  //   this.userManagmentService.removeUser('user');
  // }
}
