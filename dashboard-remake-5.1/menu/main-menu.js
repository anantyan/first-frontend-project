const {app, Menu} = require('electron')

const template = [
{
    label: 'File',
    submenu: [
      {role: 'quit'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    label: 'Window',
    submenu: [
      {role: 'reload'},
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    label: 'Help',
    submenu: [
      {label: 'Learn More', click () { require('electron').shell.openExternal('https://electronjs.org') }}
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
