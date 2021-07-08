
const electron = require('electron');
const { app, BrowserView, BrowserWindow } = electron;
const HOMEPAGE = 'https://www.disneyplus.com/';


    app.on('widevine-ready', () => {
        window = new BrowserWindow({
            width: 1200,
            height: 900,
            icon: __dirname + '/icon.png',
            webPreferences: {
              contextIsolation: true,
              plugins: true,
            },
            plugins: true
        });
        window.setMenuBarVisibility(false);
        window.loadURL(HOMEPAGE);
    
        let view = new BrowserView( {});
    
        window.setBrowserView(view);
    
    
        window.on('closed', () => {
            window = null;
        });
    })


  




