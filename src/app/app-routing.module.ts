import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';



const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
