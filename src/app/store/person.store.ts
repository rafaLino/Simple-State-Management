import { Injectable } from '@angular/core';
import { PersonState } from '../state/person.state';
import { GlobalStore } from './global.store';

@Injectable({
    providedIn: 'root'
})
export class PersonStore extends GlobalStore<PersonState> {

    constructor() {
        super({});
    }
}