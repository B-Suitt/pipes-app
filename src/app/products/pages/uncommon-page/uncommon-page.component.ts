import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect

  public name : string = 'Bastian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name= 'Melisa';
    this.gender= 'female'
  }

//i18nPlural pipe
  public clients: string[]= ['Maria', 'Juan', 'Lucas', 'Ana', 'Tomás'];
  public clientsMap = {
    '=0': 'no hay ningun cliente esperando',
    '=1': 'tenemos un cliente esperando ',
    'other': 'tenemos  # clientes esperando'
  };

  deleteClient(): void{
  this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Bastian',
    age: 36,
    address:'Santiago, Chile'
  }

  //Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value ) )
  );

  public promiseValue:Promise<string> = new Promise( (resolve, reject )=> {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa!')
    }, 3500);
  })

}
