let tplTs  = require('./service.ts.tpl');
let util = require('../utils');

module.exports=function (path,config,withFolder) {
    let codTs   = tplTs(config);
    let folderName = config.onlyFolder == true ? config.folderName : `${config.name}-service`;
    let newPath = withFolder == true ?`${path}/${folderName}`: path;

    function createFiles(dir,opt) {
        let pathTs = `${dir}/${opt.name}.${opt.type}.ts`;
        util.writeFile(pathTs,codTs);
    }

    return util.writeFolder(newPath,config,withFolder,createFiles);
}

