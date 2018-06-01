import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]),
    CommonModule,
  ],
  declarations: [],
})
export class AppRoutingModule {
}
