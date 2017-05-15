import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './../api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TeamNewComponent } from './team-new/team-new.component';
import { TeamService } from './team.service';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { TeamAllComponent } from './team-all/team-all.component';
import { GameFilterPipe } from './game-filter.pipe';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamNewComponent,
    TeamAllComponent,
    GameFilterPipe,
    TeamDetailComponent,
    TeamEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterializeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
