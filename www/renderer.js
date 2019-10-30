// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('renderer.js has been here ! ');
var ipcRenderer = require('electron').ipcRenderer;
let initialized = false;

console.log('babylone.ready event recieved');
ipcRenderer.on('loadfile', function (event, data1) {
    console.log('loadfile event recieved');
    postal.subscribe({
        channel: "electron",
        topic: "babylone.ready",
        callback: function (data2, envelope) {
            //console.log('toLoad:'+JSON.stringify(data1.path));
            let path = data1.path.split('\\');
            ExpressToolbar.Cabri.loadDocument(path.join('\\\\'), false);
        }
    })
});