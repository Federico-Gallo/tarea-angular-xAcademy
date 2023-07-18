import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { TareaComponent } from './page/tarea/tarea.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'tarea', component: TareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
