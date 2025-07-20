import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: "hiddenInset",
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    });

    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
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