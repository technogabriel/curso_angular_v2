import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='';
  email='';
  message = '';
  reactiveForm = this.fb.group({
    name: ['', Validators.required],
  email : ['',[Validators.email, Validators.required]],
  message: ['',[Validators.minLength(5), Validators.required]],

  })

 constructor(private fb : FormBuilder) {
 
 }

 onFormSubmit (event: any) {
  event.preventDefault();
  const formValue = {
    name: this.name,
    email : this.email,
    message : this.message,
  };
  console.log(formValue);
 }

 onReactiveFormSubmit(event: any){
  console.log(this.reactiveForm);
  this.enviarMail(event);
 }

 enviarMail(event : any){
  console.log( `Enviando el mail de ${event.value.name} desde el correo ${event.value.email}`);

 }


 

}
