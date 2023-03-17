import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!: string;
  email!: string;
  subject!: string;
  message!: string;

  constructor(
    private contactService: ContactsService
  ){ }

  sendMessage(){
    try {
      this.contactService.addContact({
        Name: this.name,
        Email: this.email,
        Subject: this.subject,
        Menssage: this.message,
      }).subscribe(() => {
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
      })
    } catch (error) {
      
    }
    
  }
}
