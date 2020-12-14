import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { Person } from './model/person.model';
import { PersonState } from './state/person.state';
import { PersonStore } from './store/person.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SIMPLE STATE MANAGEMENT';
  person$: Observable<PersonState>;

  constructor(
    private personStore: PersonStore
  ) { }

  ngOnInit(): void {
    this.person$ = this.personStore.getState();
  }

  add(): void {
    const data: Person = {
      id: Math.round(Math.random() * 100).toFixed().toString(),
      name: faker.name.findName(),
      age: Math.round(Math.random() * 100)
    }
    this.personStore.setState({ ...data });
  }
}
