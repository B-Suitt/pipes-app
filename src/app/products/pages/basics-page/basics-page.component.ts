import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


  public nameLower: string = "bastian";
  public nameUpper: string = "BASTIAN";
  public fullName: string = "bAsTiAn SuItT";

  public customDate : Date = new Date();

}
