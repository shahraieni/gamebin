import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'clip/:id', component: ClipComponent,
        canActivate: [AngularFireAuthGuard]
    },
    {
        path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule),
        canActivate: [AngularFireAuthGuard]
    },
    { path: '**', component: NotFoundComponent }
];
