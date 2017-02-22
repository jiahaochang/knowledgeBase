import * as commonVar from './commonVar'
import {baseUrl} from './commonVar'
/**
 *
 * @param  192.169.1.122:8080/nicezhuanye /aaa/bbb?dkdk=111
 *          or /aaa/bbb?dkdk=111
 * @returns {string} /\/aaa\/bbb/
 */
export function getRegFromUrl(url: string): string{
    var regexString = "nomatchUrl";
    var urlArray = url.split(baseUrl);
    if (urlArray.length < 2){
        regexString = getRegFromShortUrl(url);
    }else {
        var urlAfterBase = urlArray[1];
        regexString = getRegFromShortUrl(urlAfterBase);
    }

    return regexString;
}

function getRegFromShortUrl(shortUrl: string) : string{
    var urlArrayAfterSplit = shortUrl.split("?");
    var urlNeedParse = urlArrayAfterSplit[0];
    var urlArrayNeedParse = urlNeedParse.split("/");

    var regexString = "/";
    for (var i=1; i<urlArrayNeedParse.length; i++){
        regexString = regexString + "\\/" + urlArrayNeedParse[i];
    }
    regexString = regexString + "/";
    return regexString;
}

/**
 *
 * @param url  192.169.1.122:8080/nicezhuanye /aaa/bbb?dkdk=111
 */
export function parseURL(url: string): any{
    var urlArray = url.split(baseUrl);
    var urlAfterBase = url;
    if (urlArray.length >= 2){
        urlAfterBase = urlArray[1];
    }

    var urlArrayAfterBase = urlAfterBase.split("?");
    var relativePath = urlAfterBase;
    if ( urlArrayAfterBase.length >=2 ){
        relativePath = urlArrayAfterBase[0];
    }

    var a = document.createElement('a');
    a.href = url;

    return {
        relativePath,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })()
    }
}

function parseURLFull(url:string): any {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}