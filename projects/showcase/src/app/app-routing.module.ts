import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Example for the routes

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// // Import your components for the routes
// import { HomeComponent } from './home.component';
// import { SitesComponent } from './sites.component';
// import { EquipmentComponent } from './equipment.component';
// import { InvoiceComponent } from './invoice.component';
// import { ContactsComponent } from './contacts.component';
// import { AccountDetailsComponent } from './account-details.component';
// import { UserManagementComponent } from './user-management.component';

// const routes: Routes = [
//   { path: '/home', component: HomeComponent },
//   { path: 'sites', component: SitesComponent },
//   { path: 'equipment', component: EquipmentComponent },
//   {
//     path: 'account',
//     children: [
//       { path: 'invoice', component: InvoiceComponent },
//       { path: 'contacts', component: ContactsComponent },
//       { path: 'details', component: AccountDetailsComponent },
//       { path: 'user-management', component: UserManagementComponent },
//     ],
//   },
//   { path: '**', redirectTo: '/home' }, 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
