import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NewtripComponent } from './newtrip/newtrip.component';


const routes: Routes = [{
  path: "", component: MainGridComponent
}, {
  path: "blog", component: BlogComponent
}, {
  path: "contactus", component: ContactComponent
},
{
  path: "newtrip", component: NewtripComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
