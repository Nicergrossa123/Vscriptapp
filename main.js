const {app, BrowserWindow} = require('electron');
const path = require('path');
const {autoUpdater} = require('electron-updater')
const log = require('electron-log');
log.transports.file.resolvePath = () => path.join('C:\Users\Samuele#\Desktop\UAUP-Example-main', 'logs/main.log');
log.info('Hello');
log.warn('xxx')
let win;
function  createWindow(){
win = new BrowserWindow({width:300,height:400})
win.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready',() =>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})

autoUpdater.on("update-aviable", () => {
    log.info("update-aviable")
})

autoUpdater.on("check-for-update", () => {
    log.info("check-for-update")
})
autoUpdater.on("download", () => {
    log.info("download")
})
autoUpdater.on("fertig", () => {
    log.info("fertig")
})