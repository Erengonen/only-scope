
const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');
const {readFileSync, promises: fsPromises} = require('fs');
const DIRECTORY = "contracts";
const FILE_SCOPE = "scope.txt";

work();

function findSolNames () {
    let solList = []
    const contents = readFileSync(FILE_SCOPE, 'utf-8');
    const result = contents.replace(/['"]+/g, '').split(/[, / \n]+/);
    result.forEach(async(element) => {
        element = element.trim();
        if(element.endsWith("sol")){
            solList.push(element);
        };
    })
    return solList;
};


function getFilelistRecursively(targetpath) {
    let result = [];
    const dirs = fs.readdirSync(targetpath);
    const scope = findSolNames();
    dirs.forEach(file => {
        let filepath = targetpath + "/" + file;
        if ( fs.lstatSync(filepath).isDirectory()) {
            result = result.concat( getFilelistRecursively(filepath));
        } else if(filepath.endsWith("sol")){
            filepath = filepath.replace(DIRECTORY,".");
            let contractName = filepath.replace(/['"]+/g, '').split('/').pop();

            if(!scope.includes(contractName)){
                result.push("\n'"+filepath+"'");
            }
        }
    });
    return result;
};

function writeFile (skippedPaths) {
    fs.writeFile('.solcover.js', skippedPaths, function (err) {
        if (err) return console.log(err);
      });
};


function work () {
    const result = getFilelistRecursively(DIRECTORY);

    let template = `module.exports = {
        skipFiles: [${result}
        ]
    }
    `
    writeFile(template);
};