import 'dotenv/config';

export class ConfigManager {

    static getBaseurl():string{
        return process.env.BASEURL || 'https://in.bookmyshow.com';
    }

    static isHeadless():boolean{
        return process.env.HEADLESS === 'true';
    }

    static getBrowser():'chromium' | 'firefox' | 'webkit'{
        return (process.env.BROWSER as any) || 'chromium';
    }

    static getTimeout():number{
        return parseInt(process.env.TIMEOUT || '30000');
    }

    static getViewportWidth():number{
        return parseInt(process.env.VIEWPORT_WIDTH || '1280');
    }
    
    static getViewportHeight():number{
        return parseInt(process.env.VIEWPORT_HEIGHT || '720');
    }

    static getWorkers() :number{
        return parseInt(process.env.WORKERS || '4');
    }
}