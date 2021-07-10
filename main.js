
const electron = require('electron');
const { app, BrowserView, BrowserWindow } = electron;
const HOMEPAGE = 'https://www.netflix.com/';


    app.on('widevine-ready', (version, lastVersion) => {

        if (null !== lastVersion) {
            console.log('Widevine ' + version + ', upgraded from ' + lastVersion + ', is ready to be used!')
        } else {
            console.log('Widevine ' + version + ' is ready to be used!')
        }


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


  
    app.on('widevine-update-pending', (currentVersion, pendingVersion) => {
        console.log('Widevine ' + currentVersion + ' is ready to be upgraded to ' + pendingVersion + '!')
    })


    app.on('widevine-error', (error) => {
        console.log('Widevine installation encountered an error: ' + error)
        process.exit(1)
    })

