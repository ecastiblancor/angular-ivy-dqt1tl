import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './shared/component/nav/nav.component';
import { BannerComponent } from './shared/component/banner/banner.component';
import { BlogComponent } from './shared/component/blog/blog.component';
import { FeedsComponent } from './shared/component/feeds/feeds.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { formatCurrency } from '@angular/common';
import { FormComponent } from './shared/component/form/form.component';
import { PodscatComponent } from './shared/component/podscat/podscat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavComponent,
    BannerComponent,
    BlogComponent,
    FeedsComponent,
    FooterComponent,
    FormComponent,
    PodscatComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
