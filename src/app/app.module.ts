import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from 'src/shared/component/product/product.component';
import { SkillsComponent } from 'src/shared/component/skills/skills.component';
import { StudentComponent } from 'src/shared/component/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SkillsComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
