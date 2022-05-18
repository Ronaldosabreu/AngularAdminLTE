import { createAction, props } from "@ngrx/store";
import { Menu } from "../Shared/menu/menu"

enum ActionTypes{
    CarregaMenu='CarregaMenu',
    EditarMenu='EditarMenu',
}

export const EditarParam = createAction
(
    ActionTypes.CarregaMenu,
    props<{menu: Menu[]}>(),
)

export const EditarMenu = createAction
(
    ActionTypes.EditarMenu,
    props<{menu: Menu}>(),
)

var menu: Menu[] = [];

export const reducerEditMenu = (state = menu, action: any) => 
{
    switch (action.type)
    {
        case ActionTypes.CarregaMenu: {return state = action.menu }
        case ActionTypes.EditarMenu: 
        {
            let index = state.findIndex(item => item.id == action.menu.id);
            let array = [...state];
            array[index] = action.menu;
            return state = array

        }
        default:
        return state

    }
}

// export const reducerEditMenu = (state = menu, action: any) => 
// {
//     switch (action.type)
//     {
//         case ActionTypes.EditarMenu: 
//         {

//             return state = action.menu 
//         }
//         default:
//         return state
//     }
// }