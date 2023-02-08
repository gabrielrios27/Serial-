/* Containers */
import * as authContainers from './containers/index';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { NgModule } from '@angular/core';
import { PreloginComponent } from './containers/prelogin/prelogin.component';

@NgModule({
  declarations: [
    PreloginComponent,
    // LoginComponent,
    ...authContainers.containers,
  ],
  imports: [CommonModule, AuthRoutingModule],
  exports: [...authContainers.containers],
})
export class AuthModule {}
