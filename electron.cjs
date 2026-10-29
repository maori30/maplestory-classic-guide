const { app, BrowserWindow, Menu, shell, session } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 960,
    minHeight: 680,
    backgroundColor: '#0c1222',
    icon: path.join(__dirname, 'build', 'icon.ico'),
    show: false, // Don't show until ready-to-show to prevent white flash
    autoHideMenuBar: true, // Native clean frameless look
    title: 'מדריך מייפל סטורי קלאסי • MapleStory Classic Pre-BigBang Guide (רמות 10-70)',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webSecurity: false,
    },
  });

  // Load the compiled production build
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle external links safely
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  // Custom Hebrew Menu
  const template = [
    {
      label: 'תצוגה',
      submenu: [
        { label: 'טען מחדש', role: 'reload', accelerator: 'Ctrl+R' },
        { label: 'טעינה מאולצת', role: 'forceReload', accelerator: 'Ctrl+Shift+R' },
        { type: 'separator' },
        { label: 'מסך מלא', role: 'togglefullscreen', accelerator: 'F11' },
        { label: 'הגדל תצוגה', role: 'zoomIn', accelerator: 'Ctrl+Plus' },
        { label: 'הקטן תצוגה', role: 'zoomOut', accelerator: 'Ctrl+-' },
        { label: 'איפוס תצוגה', role: 'resetZoom', accelerator: 'Ctrl+0' },
      ],
    },
    {
      label: 'חלון',
      submenu: [
        { label: 'מזער', role: 'minimize' },
        { label: 'סגור תוכנה', role: 'quit', accelerator: 'Ctrl+Q' },
      ],
    },
    {
      label: 'עזרה',
      submenu: [
        {
          label: 'כלי פיתוח (DevTools)',
          accelerator: 'F12',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // Automatically inject required Referer for Meso.Watch and community APIs to prevent Cloudflare 403
  session.defaultSession.webRequest.onBeforeSendHeaders(
    { urls: ['https://meso.watch/*', 'https://maplestory.watch/*', 'https://meowdb.com/*'] },
    (details, callback) => {
      details.requestHeaders['Referer'] = 'https://meso.watch/';
      callback({ requestHeaders: details.requestHeaders });
    }
  );

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
