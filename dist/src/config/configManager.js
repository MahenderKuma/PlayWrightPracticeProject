"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
class ConfigManager {
    static getBaseurl() {
        return process.env.BASEURL || 'https://in.bookmyshow.com';
    }
}
exports.ConfigManager = ConfigManager;
