#! /usr/bin/env node
let program = require('commander');
let util= require('./templates/utils');
let currentPath =  process.cwd();
let component = require('./templates/component');
let service = require('./templates/service');
let mod = require('./templates/module');
let structure = require('./templates/gen-structure');
program
    .version('0.1.0')
    .option('-t, --type <type>','Type of Template for generate')
    .option('-n, --name <name>','Name of Template')
    .option('-f, --file <file>','Generate files using a json')
    .option('-p, --path <path>','Generate files with other path using a json')
    .option('-w, --withFolder <withFolder>','Generate files with Folder')
    .parse(process.argv);

if(!program.file && program.name){
    let withFolder = program.withFolder == undefined ? true :program.withFolder;
    let configuration={
        type:program.type,
        name:program.name,
        class:capitalizeFirstLetter(program.name),
        template:program.name,
        selector:`${program.name}-comp`
    };
    switch (program.type){
        case 'module':
                mod(currentPath,configuration,withFolder);
            break;
        case 'service':
                service(currentPath,configuration,withFolder);
            break;
        case 'component':
                component(currentPath,configuration,withFolder);
            break;
        default:
            console.log(`Not defined --type < ${program.type} >`);
            break;
    }
}else{
    if(program.file){
        let nameFile =`${currentPath}/${program.file}`;
        let newPath = program.path ? currentPath + program.path : currentPath;
        util.pathExists(newPath).then((status)=>{
            if(status){
                structure(newPath,nameFile);
            }else{
                console.log(`Path '${program.path}' is not found`)
            }
        });

    }else{
        console.log(`Not defined --name < ${program.name} >`);
    }
}




function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}