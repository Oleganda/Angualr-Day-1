import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [{
  path: "", component: MainGridComponent
}, {
  path: "blog", component: BlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
