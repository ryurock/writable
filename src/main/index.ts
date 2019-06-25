import { BrowserWindow, app, App, } from 'electron'

class SampleApp {
    private mainWindow: BrowserWindow | null = null;
    private app: App;
    private mainURL: string = `file://${__dirname}/../../src/renderer/index.html`

    constructor(app: App) {
        this.app = app;
        this.app.on('window-all-closed', this.onWindowAllClosed.bind(this))
        this.app.on('ready', this.create.bind(this));
        this.app.on('activate', this.onActivated.bind(this));
    }

    private onWindowAllClosed() {
        this.app.quit();
    }

    private create() {
        this.mainWindow = new BrowserWindow({
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });
        this.mainWindow.maximize();
        console.log(this.mainURL);
        this.mainWindow.loadURL(this.mainURL);

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }

    private onReady() {
        this.create();
    }

    private onActivated() {
        if (this.mainWindow === null) {
            this.create();
        }
    }
}

const MyApp: SampleApp = new SampleApp(app)