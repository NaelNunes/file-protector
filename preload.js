const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  exemplo: (args) => ipcRenderer.invoke('exemplo', args),
});
