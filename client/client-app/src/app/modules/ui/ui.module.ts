import { NgModule } from '@angular/core';
import { MatButtonModule, MatExpansionModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatExpansionModule, MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatExpansionModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatOptionModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: []
})
export class UiModule { }
