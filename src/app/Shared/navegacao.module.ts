import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";


@NgModule
(
    {
        declarations:
        [
            MenuComponent,
            HomeComponent
        ],
        imports:[
            CommonModule,
            RouterModule
        ],
        exports:[
            MenuComponent,
            HomeComponent
        ]
    }
)

export class NavegacaoModule{}