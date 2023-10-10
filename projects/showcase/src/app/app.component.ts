import { Component } from '@angular/core';
import { AccountBillingItem, MenuItem } from 'side-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
  logoSrc = './assets/images/jla-white.png';
    myMenuItems: MenuItem[] = [
    { label: 'Home', route: '/home', active: true  },
    { label: 'Sites', route: '/sites' },
    { label: 'Equipment', route: '/equipment' },
    { label: 'Account Billing', children:[
        { label: 'Invoice', },
        { label: 'Contacts', },
        { label: 'Account Details', },
        { label: 'User Management', },
      ]
    },
    { label: 'Detergents & Consumables', children:[
      { label: ' Browse Products ', },
      { label: ' View Orders ', },
      { label: ' View Basket ', },
      { label: ' Manage subscription ', },
    ]
  },
  ];

  // AccountBillingItems: AccountBillingItem[] = [
  //   { label: 'Invoice', },
  //   { label: 'Contacts', },
  //   { label: 'Account Details', },
  //   { label: 'User Management', },
  // ];
}
