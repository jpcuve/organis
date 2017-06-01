import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModuleNgFactory} from "./aot/app/app.module.ngfactory";

console.log('Running AOT compiled');
platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
