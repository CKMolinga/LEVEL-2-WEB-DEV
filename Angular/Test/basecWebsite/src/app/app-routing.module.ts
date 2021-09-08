import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "",component: HomeComponent, children:[{path: "", component: WelcomeComponent}]},
  {path: "welcome", component: WelcomeComponent},
  {path: "about", component: AboutComponent},
  {path: "blog", component: BlogComponent},
  {path: "news", component: NewsComponent},
  {path: "user", component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
