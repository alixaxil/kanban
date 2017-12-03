import {MatListModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule],
  exports: [MatListModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule],
})
export class MaterialItemsModule {
}
