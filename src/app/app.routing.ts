import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'article/:id',
        component: NewsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);