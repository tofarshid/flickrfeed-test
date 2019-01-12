import { NgModule } from '@angular/core';
import {
	MatToolbarModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatGridListModule,
	MatCardModule
} from '@angular/material';


@NgModule({
	imports: [
		MatToolbarModule, 
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatCardModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatGridListModule,
		MatCardModule
	]
})
export class MaterialModule {

}