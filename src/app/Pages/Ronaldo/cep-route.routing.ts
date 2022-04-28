import { Routes, RouterModule } from '@angular/router';
import { CepComponentComponent } from './cep-module/cep-component/cep-component.component';

const routes: Routes = [
  {
    path:'', component: CepComponentComponent
  },
];

export const CepRoutes = RouterModule.forChild(routes);
