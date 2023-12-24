import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './shared/pipies/replace-space.pipe';



@NgModule({
  declarations: [
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
