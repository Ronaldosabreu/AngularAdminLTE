import { Action, createAction, props, createReducer, on } from "@ngrx/store";


enum ActionTypes{
    Decrement='Decrement',
    Increment='Increment',
    IncrementParam='IncrementParam',
    IncrementParamUser='IncrementParamUser',
}

export const Decrement = createAction(
    ActionTypes.Decrement
)

export const IncrementParam = createAction(
    ActionTypes.IncrementParam,
    props<{payloadNum: any}>(),
)

export const IncrementParamUser = createAction(
    ActionTypes.IncrementParamUser,
    props<{payloadNum: any}>(),
)

export const Increment = createAction(
    ActionTypes.Increment
)

const INITIAL_STATE = {
     counter: 0,
     nome: 'Seu Usuário'
}

// export const reducer = (state = counter, action: any) => 
// {
//     switch (action.type)
//     {
//         case ActionTypes.Decrement: return state - 1
//         case ActionTypes.Increment: return state + 1
//         case ActionTypes.IncrementParam: return state + action.payload
//         default:
//         return state

//     }
// }


export const reducer = createReducer(
    INITIAL_STATE,
    on(IncrementParam, (state, {payloadNum}) => 
    ({
        ...state, counter: state.counter + payloadNum,
        // nome: payloadUser,
    })),
    on(IncrementParamUser, (state, {payloadNum}) => 
    ({
        ...state,nome: payloadNum
    })),
    on(Decrement, state => ({
        ...state, counter: state.counter - 1
    })),
    on(Increment, state => ({
        ...state, counter: state.counter + 1
    }))
)
