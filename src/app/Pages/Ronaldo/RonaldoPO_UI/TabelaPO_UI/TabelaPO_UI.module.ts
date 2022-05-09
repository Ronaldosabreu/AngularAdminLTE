import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPOUIComponent } from './TabelaPOUI/TabelaPOUI.component';
import { RouterModule } from '@angular/router';
import { PouiRoutes } from './routing/poui.routing';
import { PoModule} from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PoModule,
    PouiRoutes
  ],
  declarations: [TabelaPOUIComponent]
})
export class TabelaPO_UIModule { }
