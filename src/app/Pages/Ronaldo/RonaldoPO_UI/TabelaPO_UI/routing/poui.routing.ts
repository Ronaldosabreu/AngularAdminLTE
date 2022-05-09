import { Routes, RouterModule } from '@angular/router';
import { TabelaPOUIComponent } from '../TabelaPOUI/TabelaPOUI.component';

const routes: Routes = [
  {
    path:'', component: TabelaPOUIComponent
  },
];

export const PouiRoutes = RouterModule.forChild(routes);
