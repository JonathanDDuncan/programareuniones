import { ListMasterPage } from './list-master/list-master';
import { ContentPage } from './content/content';
import { PublicadoresPage } from './publicadores/publicadores';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { RXDBSampleComponent } from './rxdbsample/rxdbsample.component';

// The page the user lands on after opening the app and without a session
// export const FirstRunPage = TutorialPage;
export const FirstRunPage = TabsPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ContentPage;
export const Tab2Root = RXDBSampleComponent;
export const Tab3Root = PublicadoresPage;
