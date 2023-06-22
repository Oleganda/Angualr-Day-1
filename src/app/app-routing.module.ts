import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NewtripComponent } from './newtrip/newtrip.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: "", component: MainGridComponent
}, {
  path: "blog", component: BlogComponent
}, {
  path: "contactus", component: ContactComponent
},
{
  path: "newtrip", component: NewtripComponent
},
{
  path: "shop", component: ItemsListComponent
},
{
  path: "shop/:indexFromRouting", component: DetailsComponent
},
{
  path: "cart", component: CartComponent
}, {
  path: "**", redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
