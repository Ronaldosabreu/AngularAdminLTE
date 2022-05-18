import { createAction, props, createReducer, on } from "@ngrx/store";
import { Menu } from "../Shared/menu/menu"

enum ActionTypes{
    EditarMenu='Editar',
}

export const Editar = createAction(
    ActionTypes.EditarMenu
)
export const EditarParam = createAction(
    ActionTypes.EditarMenu,
    props<{menu: Menu[]}>(),
)


   let menu: Menu[];

export const reducerMenu = (state = menu, action: any) => 
{
    switch (action.type)
    {
        case ActionTypes.EditarMenu: {return state = action.menu }
        default:
        return state

    }
}