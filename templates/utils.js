/**
 * Created by iZel on 7/5/17.
 */

let fs=require('fs');
let fse=require('fs-extra');

module.exports=(function () {
    return{
        pathExists:(path)=>{
            return fse.pathExists(path)
        },
        writeFolder:function (path,config,withFolder,cb) {
            return new Promise((resolve,reject)=>{
                if(withFolder == true){
                    this.pathExists(path).then((status)=>{
                        if(status){
                            if(!config.onlyFolder){
                                cb(path,config);
                            }
                            resolve(path);
                        }else{
                            fse.ensureDir(path).then(()=>{
                                if(!config.onlyFolder){
                                    cb(path,config);
                                }
                                resolve(path);
                            })
                        }
                    })
                }else{
                    if(!config.onlyFolder){
                        cb(path,config);
                    }
                    resolve(path);
                }
            })
        },
        writeFile:function (path,tpl) {
            return fse.writeFile(path, tpl, { flag: 'wx' })
        },
        readFile:function (path) {
            return fse.readJson(path)
        },
        capitalizeFirstLetter:function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
})();