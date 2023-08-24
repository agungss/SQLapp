import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DatabaseService } from './services/database.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class AppComponent {
  constructor(private database: DatabaseService) {
    this.initApp();
  }

  async initApp() {
    await this.database.initializPlugin();
    SplashScreen.hide();
  }
}
