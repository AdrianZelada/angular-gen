let tplTs  = require('./component.ts.tpl');
let tplHtml = require('./component.html.tpl');
let util = require('../utils');

module.exports=function (path,config,withFolder) {
    let codTs   = tplTs(config);
    let codHtml = tplHtml(config);
    let newPath = withFolder == true ?`${path}/${config.name}-component`: path;

    function createFiles(dir,opt) {
        let pathTs = `${dir}/${opt.name}.${opt.type}.ts`;
        let pathHtml = `${dir}/${opt.name}.${opt.type}.html`;
        util.writeFile(pathTs,codTs);
        util.writeFile(pathHtml,codHtml);
    }
    return util.writeFolder(newPath,config,withFolder,createFiles);
};

