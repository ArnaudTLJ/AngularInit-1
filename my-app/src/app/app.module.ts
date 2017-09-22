import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { ListitemComponent } from './listitem/listitem.component';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { StateDirective } from './state.directive';
import { CollectionService } from './collection.service';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModalComponent,
    ListitemComponent,
    FormComponent,
    FilterPipe,
    StateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RoutingModule
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
