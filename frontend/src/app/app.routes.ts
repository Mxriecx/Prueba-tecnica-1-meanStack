import { Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados';
import { EmpleadosAdmin } from './pages/admin/empleados/empleados';

export const routes: Routes = [
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'lista', component: EmpleadosAdmin }
];
