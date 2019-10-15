import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  ExtraOptions,
  RouterModule,
  Routes
} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

import {
  AppComponent
} from './app.component';
import {
  AuthComponent
} from './views/auth/auth.component';
import {
  HomeComponent
} from './views/home/home.component';
import {
  InfoModalComponent
} from './components/modals/info-modal/info-modal.component';
import {
  HelpModalComponent
} from './components/modals/help-modal/help-modal.component';
import {
  ContactModalComponent
} from './components/modals/contact-modal/contact-modal.component';
import {
  AuthService
} from './services/auth/auth.service';
import {
  UserManagementService
} from './services/user-management/user-management.service';
import {
  SuccessModalComponent
} from './components/modals/success-modal/success-modal.component';
import {
  ErrorModalComponent
} from './components/modals/error-modal/error-modal.component';

import { LoanRequestComponent } from './views/home/loan-request/loan-request.component';
import { CheckStatusComponent } from './views/home/check-status/check-status.component';

const appRoutes: Routes = [{
  path: '',
  component: AuthComponent
},
{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: LoanRequestComponent
    },
    {
      path: 'loan-request',
      component: LoanRequestComponent
    },
    {
      path: 'check-status',
      component: CheckStatusComponent
    }]
},
{
  path: '**',
  redirectTo: '/'
}
];


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    InfoModalComponent,
    HelpModalComponent,
    ContactModalComponent,
    SuccessModalComponent,
    ErrorModalComponent,
    LoanRequestComponent,
    CheckStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSortModule,
    MatSelectModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatChipsModule,
    MatExpansionModule
  ],
  providers: [
    UserManagementService
  ],
  entryComponents: [
    InfoModalComponent,
    HelpModalComponent,
    ContactModalComponent,
    SuccessModalComponent,
    ErrorModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
