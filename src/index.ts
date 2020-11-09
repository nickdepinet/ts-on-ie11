import 'ts-polyfill/lib/es2015-reflect';
import 'proxy-polyfill';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2020-global-this';
import 'whatwg-fetch';

export {}
declare global {
    interface Window {
        madsdata: any;
    }
}

console.log("Hello");