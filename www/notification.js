const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
const version = document.getElementById('version');
let electronVersionID;

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
    ipcRenderer.removeAllListeners('app_version');
    electronVersionID = arg.version;
});

ipcRenderer.on('update_available', () => {
    ipcRenderer.removeAllListeners('update_available');
    message.innerText = Translator.translate("electron_update_available");
    notification.classList.remove('hidden');
});

ipcRenderer.on('update_downloaded', () => {
    ipcRenderer.removeAllListeners('update_downloaded');
    message.innerText = Translator.translate("electron_update_downloaded");
    restartButton.classList.remove('hidden');
    notification.classList.remove('hidden');
});

function closeNotification() {
    notification.classList.add('hidden');
}
function restartApp() {
    ipcRenderer.send('restart_app');
}

function downloadUpdate() {
    ipcRenderer.send('download_update');
}