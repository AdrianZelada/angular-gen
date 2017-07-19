/**
 * Created by iZel on 7/15/17.
 */
let util = require('../utils');
let structures = {
    component   : require('../component'),
    service     : require('../service'),
    module      : require('../module')
}
module.exports=function (path,file) {
    util.readFile(file).then((data)=>{
        _recursiveCreator(path,data)
    }).catch((e)=>{
       console.log(e)
    });

    function _recursiveCreator(newPath,data){
        if(data.length){
            for(let ind=0;ind<data.length;ind++){
                let obj = data[ind];
                let configuration={
                    type:obj.type,
                    name:obj.name,
                    folderName:obj.folderName,
                    class:util.capitalizeFirstLetter(obj.name || obj.folderName),
                    template:obj.name,
                    onlyFolder:obj.onlyFolder,
                    treeFiles:obj.treeFiles,
                    selector:`${obj.name}-comp`
                };
                let withFolder = obj.withFolder == undefined ? true :obj.withFolder;
                if(structures[obj.type]){
                    structures[obj.type](newPath,configuration,withFolder).then((pathFolder)=>{
                        if(obj.treeFiles){
                            _recursiveCreator(pathFolder,obj.treeFiles)
                        }
                    })
                }
            }
        }else{

        }
    }
};