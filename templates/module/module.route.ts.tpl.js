/**
 * Created by iZel on 7/15/17.
 */
let util = require('../utils');
module.exports=function (config) {
    let imports=`import { ${config.class}Component} from './${config.name}.component'; \n`;
    let components=`${config.class}Component `;
    let routes='';
    if(config.treeFiles){
        if(config.treeFiles.length>0){
            for(let ind=0;ind<config.treeFiles.length;ind++){
                let obj=config.treeFiles[ind];
                if(obj.type=="component"){
                    let file={
                        type:obj.type,
                        name:obj.name,
                        class:util.capitalizeFirstLetter(obj.name),
                    };
                    imports = imports + `import { ${file.class}Component} from './${file.name}-component/${file.name}.component'; \n`;
                    routes = routes +`
            {
                path:'${file.name}',
                component:${file.class}Component
            },`;
                    components = components +`,${file.class}Component `;
                }
            }
        }
    }

    return `
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
${imports}

const routes: Routes = [
    {
        path:'',
        component:${config.class}Component,
        children:[${routes}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ${config.class}Route{}
export let ${config.class}Components=[
    ${components}
]
`
};