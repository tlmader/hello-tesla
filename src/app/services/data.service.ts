import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    protected db: AngularFirestore,
  ) { }

  get(collectionName: string): Observable<any> {
    return this.db.collection<any>(collectionName).valueChanges();
  }
}
