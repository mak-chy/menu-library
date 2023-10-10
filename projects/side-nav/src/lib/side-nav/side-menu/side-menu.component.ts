import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-contact',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
@Input() color:string="#eee";
@Input() menuItems: MenuItem[] = [];
@Input() logoSrc: string = 'default-library-logo-src';
isMobileView = false;
@ViewChild('sidenav')  sidenav!: MatSidenav; 
showFiller = false;

 constructor() {
    this.checkIsMobile();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkIsMobile();
  }

  private checkIsMobile(): void {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  toggleMobileMenu(): void {
    if (this.sidenav) {
      console.log("sidenav exists");
      this.sidenav.toggle();
    }
  }


}

export interface MenuItem {
  label: string;
  route?: string;
  active?: boolean;
  children?:any;
}
