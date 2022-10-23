const {app, BrowserWindow} = require('electron');
const path = require('path');
const {autoUpdater} = require('electron-updater')
const log = require('electron-log');
log.transports.file.resolvePath = () => path.join('C:\Users\Samuele#\Desktop\UAUP-Example-main', 'logs/main.log');
log.info('Hello');
log.warn('xxx')
log.log('app version' +app.getVersion())
let win;
function  createWindow(){
win = new BrowserWindow({width:300,height:400})
win.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready',() =>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})
autoUpdater.on("update-not-aviable", (info) => {
    log.info("update-aviable")
})
autoUpdater.on("update-aviable", (info) => {
    log.info("update-aviable")
})

autoUpdater.on("check-for-update", () => {
    log.info("check-for-update")
})
autoUpdater.on("error", (err) => {
    log.info("error" + err)
})

autoUpdater.on("download", () => {
    log.info("download")
})

autoUpdater.on("download-p", (progressTrack) =>{
    log.info("\n\ndownload-p")
    log.info(pregressTrack)
})
autoUpdater.on("fertig", (info) => {
    log.info("fertig")
})