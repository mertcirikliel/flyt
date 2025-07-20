import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let devToolsWindow;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: "hiddenInset",
        resizable: false,
        transparent: true,
        vibrancy: "ultra-dark",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    });

    win.loadURL("http://localhost:5173");

    win.webContents.once('did-finish-load', () => {
        devToolsWindow = new BrowserWindow({
            width: 400,
            height: 600
        });
        
        win.webContents.setDevToolsWebContents(devToolsWindow.webContents);
        win.webContents.openDevTools({ mode: "detach" });

        devToolsWindow.on("closed", () => {
            devToolsWindow = null;
        });
    });
};


app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});