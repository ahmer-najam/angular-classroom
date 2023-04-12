import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'title', component: TitleComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
