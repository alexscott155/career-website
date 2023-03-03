import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ExperienceComponent } from './app/experience/experience.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
