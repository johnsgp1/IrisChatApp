import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router'
import { routes } from './routes';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../app/auth.service';
import {ChatService } from '../app/chat.service'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule
  ],
  providers: [AuthService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
