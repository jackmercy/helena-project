import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { SuppriseComponent } from './home/components/supprise.component';
import { HomepageComponent } from './home/components/homepage.component';
import { MemoriesComponent } from './home/components/memories.component';
import { GiftCardComponent } from './home/components/gift-card.component';
import { LoginComponent } from './public/components/login.component';
import { PublicComponent } from './public/components/public.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: PublicComponent,
                children: [
                    {
                        path: '', component: LoginComponent
                    }
                ]
            },
            {
                path: 'home', component: HomepageComponent,
                children: [
                    {
                        path: 'supprise', component: SuppriseComponent
                    },
                    {
                        path: 'memories', component: MemoriesComponent
                    },
                    {
                        path: 'gift-card', component: GiftCardComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }

