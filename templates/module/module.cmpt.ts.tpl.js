/**
 * Created by iZel on 7/5/17.
 */
module.exports =  function(config) {
    return `
import {Component, OnInit} from '@angular/core';

@Component({
    selector:'${config.selector}',
    templateUrl:'./${config.template}.component.html'
})

export class ${config.class}Component implements OnInit{
  constructor(){
    
  } 
  ngOnInit(){
  
  }
}
`
};
