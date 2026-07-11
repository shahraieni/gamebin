import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IUser } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fireBaseAuth = inject(AngularFireAuth);
  fireBaseDb = inject(AngularFirestore);
  private userCollection!:AngularFirestoreCollection

  constructor() {
    this.userCollection = this.fireBaseDb.collection('users')
   }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error("Password not provided")

    }
    const userCred = await this.fireBaseAuth.createUserWithEmailAndPassword(userData.email!, userData.password!)
    
    
    if (!userCred.user) {
      throw new Error("user not provided")
    }
    console.log('userCred===>' , userCred);

    this.userCollection.doc(userCred.user.uid).set({
      name:userData.name,
      email:userData.email,
      age:userData.age,
      phone:userData.phone
    });

    await userCred.user.updateProfile({
      displayName:userData.name
    });
  

  }
}
