import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() AccountBillingItems: AccountBillingItem[] = [];
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }
  selected = new FormControl(); 
}

export interface AccountBillingItem {
  label: string;
}
