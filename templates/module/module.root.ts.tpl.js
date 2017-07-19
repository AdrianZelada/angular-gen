/**
 * Created by iZel on 7/15/17.
 */
module.exports=function (config) {
    return`
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {${config.class}Route, ${config.class}Components } from './${config.name}.route';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ${config.class}Route
  ],
  declarations:[
    ${config.class}Components
  ],
  providers:[
  ]
})

export class ${config.class}Module{}
`
};