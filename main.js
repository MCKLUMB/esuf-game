// ESUF - processo principal do Electron
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1560, height: 820, backgroundColor: '#0b1b10', title: 'ESUF',
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
});
app.on('window-all-closed', () => app.quit());