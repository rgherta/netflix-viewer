
const electron = require('electron');
const { shell, app, BrowserView, BrowserWindow } = electron;
const HOMEPAGE = 'https://www.netflix.com/'

let mainWindow;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1200,
        height: 900,
        icon: __dirname + '/icon.png',
        webPreferences: {
          nodeIntegration: false
        }
    });
    window.setMenuBarVisibility(false);
    window.loadURL(HOMEPAGE);

    let view = new BrowserView({
    webPreferences: {
                        nodeIntegration: false
                    }
    });

    window.setBrowserView(view);


    window.on('closed', () => {
        window = null;
    });
});
