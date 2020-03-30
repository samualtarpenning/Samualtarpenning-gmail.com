import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRMPageRoutingModule } from './crm-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CRMPage } from './crm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRMPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CRMPage]
})
export class CRMPageModule {}
