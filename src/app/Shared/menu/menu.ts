export interface Menus{
    menus: Menu[]
  }
  
  export interface Menu{
    link: string,
    name: string,
    exact: boolean,
    admin: boolean
  }