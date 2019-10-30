const {app, BrowserWindow, Menu, ipcMain} = require("electron");
const i18n = require("i18n");
const osLocale = require("os-locale");
const path = require("path");
const url = require("url");
const {autoUpdater} = require('electron-updater');

// download automatically or not the update
autoUpdater.autoDownload = false;

let currentLang;

if (osLocale.sync() && osLocale.sync().startsWith('fr'))
    currentLang = 'fr';
else
    currentLang = 'en';

i18n.configure({
    locales: ['fr', 'en'],
    directory: __dirname + '/locales',
    defaultLocale: currentLang
});

app.commandLine.appendSwitch("ignore-gpu-blacklist");
app.commandLine.appendSwitch("--disable-gpu-process-crash-limit");
app.disableDomainBlockingFor3DAPIs();


if (require("electron-squirrel-startup")) return;

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

function createWindow() {
    autoUpdater.checkForUpdatesAndNotify();

    if (mainWindow !== null) return mainWindow;

    app.setName("Cabri Express");

    const template = [
        {
            //label: "File",
            label: i18n.__('file'),
            submenu: [
                {
                    label: i18n.__('new'),
                    accelerator: "Command+N",
                    click: function () {
                        createWindow().webContents.executeJavaScript(
                            'CabriInstance[0].Channel.publish("file.new")',
                            true
                        );
                    }
                },
                {
                    label: i18n.__('open'),
                    accelerator: "Command+O",
                    click: function () {
                        createWindow().webContents.executeJavaScript(
                            'CabriInstance[0].Channel.publish("file.open")',
                            true
                        );
                    }
                },
                {
                    label: i18n.__('save'),
                    accelerator: "Command+S",
                    click: function () {
                        createWindow().webContents.executeJavaScript(
                            'CabriInstance[0].Channel.publish("file.save")',
                            true
                        );
                    }
                }
            ]
        },
        {
            label: i18n.__('view'),
            submenu: [
                {
                    label: i18n.__('reset'),
                    click: function () {
                        createWindow().webContents.executeJavaScript(
                            'CabriInstance[0].Channel.publish("view.reset")',
                            true
                        );
                    }
                },
                {
                    label: i18n.__('togglefullscreen'),
                    role: "togglefullscreen"
                }
            ]
        },
        {
            label: i18n.__('tools'),
            submenu: [
                {
                    label: i18n.__('calculator'),
                    type: "checkbox",
                    checked: true,
                    click: function () {
                        createWindow().webContents.executeJavaScript(
                            'CabriInstance[0].Channel.publish("calculator.toggle")',
                            true
                        );
                    }
                }
            ]
        },
        {
            label: i18n.__('window'),
            role: "window",
            submenu: [
                {
                    label: i18n.__('minimize'),
                    role: "minimize"
                },
                {
                    label: i18n.__('close'),
                    role: "close"
                }
            ]
        },
        {
            label: i18n.__('help'),
            role: "help",
            submenu: [
                {
                    label: i18n.__('learnmore'),
                    click() {
                        require("electron").shell.openExternal("https://cabri.com");
                    }
                }
            ]
        }
    ];

    if (process.platform === "darwin") {
        template.unshift({
            label: app.getName(),
            submenu: [
                {
                    label: i18n.__('about'),
                    role: "about"
                },
                {
                    type: "separator"
                },
                {
                    label: i18n.__('services'),
                    role: "services", submenu: []
                },
                {
                    type: "separator"
                },
                {
                    label: i18n.__('hide'),
                    role: "hide"
                },
                {
                    label: i18n.__('hideothers'),
                    role: "hideothers"
                },
                {
                    label: i18n.__('unhide'),
                    role: "unhide"
                },
                {
                    type: "separator"
                },
                {
                    label: i18n.__('quit'),
                    role: "quit"
                }
            ]
        });

        // Edit menu
        // template[2].submenu.push(
        //     {type: "separator"},
        //     {
        //         label: i18n.__('speech'),
        //         submenu: [
        //             {
        //                 label: i18n.__('startspeaking'),
        //                 role: "startspeaking"
        //             },
        //             {
        //                 label: i18n.__('stopspeaking'),
        //                 role: "stopspeaking"
        //             }
        //         ]
        //     }
        // );

        // Window menu
        template[4].submenu = [
            {
                label: i18n.__('close'),
                role: "close"
            },
            {
                label: i18n.__('minimize'),
                role: "minimize"
            },
            {
                label: i18n.__('zoom'),
                role: "zoom"
            },
            {
                type: "separator"
            },
            {
                label: i18n.__('front'),
                role: "front"
            }
        ];
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1100,
        height: 700,
        webPreferences: {
            webSecurity: false
        },
        backgroundColor: "#41729c"
    });

    let appmenu = Menu.buildFromTemplate(template);

    //don't remove the line below, it will be used by
    //app-generator to decide weather to have menu

    /* */
    /* */

    Menu.setApplicationMenu(appmenu);

    // and load the index.html of the app.
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.webContents.on("did-finish-load", function () {
        // windows platform
        if (process.platform === "win32") {
            console.log("windows platform detected");
            if (process.argv[1] && process.argv[1] !== "--inspect") {
                mainWindow.webContents.send("loadfile", {path: process.argv[1]});
            }
        }
    });

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', {version: app.getVersion()});
});

autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
});

ipcMain.on('download_update', async () => {
    try {
        const path = await autoUpdater.downloadUpdate();
    } catch (e) {
        console.log('Cannot download the update ->', e);
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function handleSquirrelEvent() {
    if (process.argv.length === 1) {
        return false;
    }

    const ChildProcess = require("child_process");

    const appFolder = path.resolve(process.execPath, "..");
    const rootAtomFolder = path.resolve(appFolder, "..");
    const updateDotExe = path.resolve(path.join(rootAtomFolder, "Update.exe"));
    const exeName = path.basename(process.execPath);

    const spawn = function (command, args) {
        let spawnedProcess, error;

        try {
            spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
        } catch (error) {
        }

        return spawnedProcess;
    };

    const spawnUpdate = function (args) {
        return spawn(updateDotExe, args);
    };

    const squirrelEvent = process.argv[1];
    switch (squirrelEvent) {
        case "--squirrel-install":
        case "--squirrel-updated":
            // Optionally do things such as:
            // - Add your .exe to the PATH
            // - Write to the registry for things like file associations and
            //   explorer context menus

            // Install desktop and start menu shortcuts
            spawnUpdate(["--createShortcut", exeName]);

            setTimeout(app.quit, 1000);
            return true;

        case "--squirrel-uninstall":
            // Undo anything you did in the --squirrel-install and
            // --squirrel-updated handlers

            // Remove desktop and start menu shortcuts
            spawnUpdate(["--removeShortcut", exeName]);

            setTimeout(app.quit, 1000);
            return true;

        case "--squirrel-obsolete":
            // This is called on the outgoing version of your app before
            // we update to the new version - it's the opposite of
            // --squirrel-updated

            app.quit();
            return true;
    }
}