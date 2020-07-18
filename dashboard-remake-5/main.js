const electron = require('electron')
const app = electron.app
var path = require('path')
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow(){
  mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    width: 1200,
    height: 700,
    minWidth: 1200,
    minHeight: 700,
    show: false
  })

  mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  require('./menu/main-menu')
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})