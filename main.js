
const electron = require('electron');
const { app, BrowserView, BrowserWindow } = electron;
const HOMEPAGE = 'https://www.netflix.com/';
const path = require('path');

   app.on('widevine-ready', (version, lastVersion) => {

   // app.whenReady().then(() => {

        if (null !== lastVersion) {
            console.log('Widevine ' + version + ', upgraded from ' + lastVersion + ', is ready to be used!')
        } else {
            console.log('Widevine ' + version + ' is ready to be used!')
        }


        window = new BrowserWindow({
            width: 1200,
            height: 900,
            fullscreenable: true,
            icon: __dirname + '/icon.png',
            autoHideMenuBar: true,
            webPreferences: {
              contextIsolation: true,
              plugins: true,
              preload: path.join(__dirname, 'preload.js'),
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

  
    app.on('widevine-update-pending', (currentVersion, pendingVersion) => {
        console.log('Widevine ' + currentVersion + ' is ready to be upgraded to ' + pendingVersion + '!')
    })


    app.on('widevine-error', (error) => {
        console.log('Widevine installation encountered an error: ' + error)
        process.exit(1)
    })

