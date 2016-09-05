// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs');
const remote = require('electron').remote;
const appPath = remote.app.getAppPath();
console.log('appPath: ', appPath);

const irisPath = `/${appPath}/iris.json`;
const irisData = JSON.parse(fs.readFileSync(irisPath, 'utf8'));
console.log('irisData: ', irisData);
