import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalState } from '../state/global.state';

export abstract class GlobalStore<T extends GlobalState> {

    private state$: BehaviorSubject<T>;

    constructor(initialState: T) {
        this.state$ = new BehaviorSubject(initialState);
    }

    getState(): Observable<T> {
        return this.state$.asObservable();
    }

    getValue(): T {
        return this.state$.getValue();
    }

    setState(newValue: T) {
        const data = this.getValue();
        this.state$.next({
            ...data,
            ...newValue
        });
    }
}