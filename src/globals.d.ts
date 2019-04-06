import { History } from 'history';

declare let __BROWSER__: boolean;

declare global {
    interface Window {
        browserHistory: History<History.LocationState>;
        __PRELOADED_STATE__: string;
    }
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.css';
declare module '*.scss';
