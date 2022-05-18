import { Action } from "@ngrx/store";

export class Decrement implements Action{
    readonly type ='Decrement'
}

export class Increment implements Action{
    readonly type ='Increment'
}
const counter: number = 0;
const INITIAL_STATE = counter

export const reducer = (state = INITIAL_STATE, action: Action) => 
{
    switch (action.type)
    {
        case 'Decrement': return state - 1
        case 'Increment': return state + 1
        default:
        return state

    }
}