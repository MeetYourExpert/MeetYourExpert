import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DispExpertsComponent } from './disp-experts/disp-experts.component';
import { DispExpertComponent } from './disp-expert/disp-expert.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpExpertComponent } from './sign-up-expert/sign-up-expert.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';;
import {MatInputModule} from '@angular/material/input';
import { AddRecommendComponent } from './add-recommend/add-recommend.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { ManagerRecommendsComponent } from './manager/manager-recommends/manager-recommends.component';
import { ManagerExpertsComponent } from './manager/manager-experts/manager-experts.component';
import { ManagerSettingsComponent } from './manager/manager-settings/manager-settings.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ExpertSettingsComponent } from './expert/expert-settings/expert-settings.component';
import { ExpertMeetingsComponent } from './expert/expert-meetings/expert-meetings.component';
import { ExpertProfileComponent } from './expert/expert-profile/expert-profile.component';
import { DispRecommendsComponent } from './disp-recommends/disp-recommends.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DispExpertsComponent,
    DispExpertComponent,
    LoginComponent,
    SignUpComponent,
    SignUpExpertComponent,
    SignUpUserComponent,
    AddRecommendComponent,
    StarRatingComponent,
    ManagerLoginComponent,
    ManagerRecommendsComponent,
    ManagerExpertsComponent,
    ManagerSettingsComponent,
    AddMeetingComponent,
    ExpertSettingsComponent,
    ExpertMeetingsComponent,
    ExpertProfileComponent,
    DispRecommendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
