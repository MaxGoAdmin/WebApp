import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  FullName: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    if (this.message.trim() === '') {
      alert('Please enter a message before sending.');
    } else {
      const alertMessage = `Message sent:\nFull Name: ${this.FullName}\Email: ${this.email}\nMessage: ${this.message}`;
      alert(alertMessage);
      // You can add logic here to send the message to a server or perform other actions.
    }
  }
}
