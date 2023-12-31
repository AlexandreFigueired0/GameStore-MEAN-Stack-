import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";

import { RegistoComponent } from './registo/registo.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ItemDetailsComponent } from './item-details/item-details.component';
import {LibraryComponent} from "./library/library.component";
import {ListsComponent} from "./lists/lists.component";
import {FollowersComponent} from "./followers/followers.component";
import {FollowingComponent} from "./following/following.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {ShoppingCartViewComponent} from "./shopping-cart-view/shopping-cart-view.component";

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "dashboard", component: DashboardComponent },
  {path: "profile/:userName", component: UserProfileComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistoComponent },
  {path: 'item/:id', component: ItemDetailsComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'followers', component: FollowersComponent},
  {path: 'following', component: FollowingComponent},
  {path: 'wishlist/:userName', component: WishlistComponent},
  {path: 'shoppingcart', component: ShoppingCartViewComponent},
  {path: 'item/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
