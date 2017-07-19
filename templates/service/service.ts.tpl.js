/**
 * Created by iZel on 7/15/17.
 */

module.exports=function (config) {
    return`import { Injectable} from '@angular/core';

@Injectable()

export class ${config.class}Service{
    constructor(){}
}`
};

