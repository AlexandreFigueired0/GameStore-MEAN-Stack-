import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-to-wishlist-button',
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrls: ['./add-to-wishlist-button.component.css']
})
export class AddToWishlistButtonComponent {

  @Output() show_message_event = new EventEmitter();
  constructor(
    private user_service: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  add_item_to_wish_list(){
    if (!localStorage.getItem("user_name") && !sessionStorage.getItem("user_name")){
      this.router.navigate(["login"]);
    }
    let item_id = this.route.snapshot.paramMap.get("id")
    let username = localStorage.getItem("user_name")
    if(!username){
      username = sessionStorage.getItem("user_name")
    }
    this.user_service.add_item_to_wishlist(username!,item_id!)
      .subscribe(answer =>{
        this.show_message_event.emit(answer);
      })


  }
}
