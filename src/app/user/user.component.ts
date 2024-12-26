import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

// type is allowed object types and other types
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

//Only object type is allowed in interface
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Decorator Method
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  //Signal Method
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar);  
 
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

/*
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
this.selectedUser.set(DUMMY_USERS[randomIndex]);

 get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

*/
