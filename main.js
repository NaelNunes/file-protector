const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});

// Aqui você adiciona os handlers do IPC (exemplo):
ipcMain.handle('exemplo', async (event, args) => {
  // lógica aqui
  return 'resposta do main';
});
