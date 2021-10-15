import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SharedComponentsModule } from './components/shared-components.module';
import { Camera} from '@ionic-native/camera';
import { CameraService } from './services/camera.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), SharedComponentsModule ],
  providers: [Facebook,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{ provide: Camera, useClass: CameraService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
