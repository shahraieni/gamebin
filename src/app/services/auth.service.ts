import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IUser } from '../models/user-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fireBaseAuth = inject(AngularFireAuth);
  fireBaseDb = inject(AngularFirestore);
  private userCollection!:AngularFirestoreCollection;
  public isAuthenticated! :Observable<boolean>;


  constructor() {
    this.userCollection = this.fireBaseDb.collection('users');
    this.isAuthenticated = this.fireBaseAuth.user.pipe(
      map((user)=>!!user)
    )
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
