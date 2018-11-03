import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item/:id', component: ItemDetailComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
