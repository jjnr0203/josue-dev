import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ImageModule
  ]
})
export class PortfolioModule { }
