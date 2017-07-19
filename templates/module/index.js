let tplTsCmpt  = require('./module.cmpt.ts.tpl');
let tplHtmlCmpt  = require('./module.cmpt.html.tpl');
let tplTsRoute  = require('./module.route.ts.tpl');
let tplTsRoot  = require('./module.root.ts.tpl');

let util = require('../utils');
module.exports=function (path,config,withFolder) {
    let codTsCmpt   = tplTsCmpt(config);
    let codHtmlCmpt   = tplHtmlCmpt(config);
    let codTsRoute   = tplTsRoute(config);
    let codTsRoot   = tplTsRoot(config);
    let newPath = withFolder == true ?`${path}/${config.name}-module`: path;

    function createFiles(dir,opt) {
        let pathTsCpmt = `${dir}/${opt.name}.component.ts`;
        let pathHtmlCpmt = `${dir}/${opt.name}.component.html`;
        let pathTsRoute = `${dir}/${opt.name}.route.ts`;
        let pathTsRoot = `${dir}/${opt.name}.module.ts`;
        util.writeFile(pathTsCpmt,codTsCmpt);
        util.writeFile(pathHtmlCpmt,codHtmlCmpt);
        util.writeFile(pathTsRoute,codTsRoute);
        util.writeFile(pathTsRoot,codTsRoot);
    }

    return util.writeFolder(newPath,config,withFolder,createFiles);
};

