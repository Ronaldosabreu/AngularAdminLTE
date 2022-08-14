import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';


const routes: Routes = [
  {
    path:'', component: CalendarioComponent
  },
];

export const CalendarioRoutes = RouterModule.forChild(routes);
