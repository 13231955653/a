//静态文件相关-----------------
const sBaseHostSonPrefix = 'static_resource';

//版本相关-----------------
const debug = true;
//值格式 0000 00 00 00 年月日时
const aVersion = {
    '/static_resource/js/base.js': {
        'updtae': {
            '2021043601': {
                1:'1111111111111',
                2:'33333333333333',
            },
            '2021042611': {
                1:'5555555555555',
                2:'77777777777777777',
            },
            '2021042612': {
                1:'999999999999999999',
            },
        },
        'increment': {
            '2021032601': {
                1:'222222222222222222',
                2:'44444444444444444',
            },
            '2021042610': {
                1:'66666666666666666666666',
                2:'888888888888888888888888',
            },
            '2021042611': {
                1:'000000000000000000000000',
            },
        },
    },
    '/static_resource/js/index.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/public/function.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/public/dom/public_dom.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/mobile/dom/public_dom.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/mobile/logic.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/public/query/query.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/public/encode.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/css/public/reset.css': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/css/public/mobile/public.css': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/js/lang/cn.js': {
        'updtae': {},
        'increment': {},
    },
    '/static_resource/css/personalized/color/1.css': {
        'updtae': {},
        'increment': {},
    },
};

const iStaticResourceTotal= 5;
let iAllreadyLoadStaticResource = 0;

/**
 *
 * 获取用户上次访问时间后的更新或新增
 *
 * @param f
 */
function getIncrementUpdateTag (f) {
    if (typeof aVersion[f] == 'undefined') {
        return false;
    }

    let t = getStaticResourceLastCacheTime(f);
    if (!t) {
        return '&a=true';
    }

    let v = aVersion[f];
    let sUpdtae = '';
    let sIncrement = '';
    for (let k in v['updtae']) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in v['updtae'][k]) {
            sUpdtae += v['updtae'][k][l] + '_';
        }
    }
    sUpdtae = sUpdtae.substring(0, sUpdtae.length - 1);

    for (let k in v['increment']) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in v['increment'][k]) {
            sIncrement += v['increment'][k][l] + '_';
        }
    }
    sIncrement = sIncrement.substring(0, sIncrement.length - 1);

    let s = '';
    if (sUpdtae) {
        s += '&u=' + sUpdtae;
    }
    if (sIncrement) {
        s += '&i=' + sIncrement;
    }

    return  s ? s : false;
}

//避免出现 同注释字符串 // 相同的字符串
//新添加文件必须添加到版本变量中
//版本号注释标志为/*版本号*/
//版本号示例
//    /*版本号*/
//    代码块
//    /*版本号*/
// 修改文件要修改文件名跟文件版本号