// function sessId () {
//     if (typeof window['sessionId'] == 'undefined') {
//         console.log('sessId sessionId is undefined, so settimeout retry sessId ');
//
//         let t = setTimeout(function () {
//             clearTimeout(t);
//
//             setTimeoutFunction('sessId');
//         }, 0);
//         return;
//     }
//     console.log('sessId sessionId is defined, so to sessionId ');
//
//     let t2 = setTimeout(function () {
//         clearTimeout(t2);
//
//         sessionId();
//     }, 0);
// }

function loadLocalJquery1 () {
    if (bJquery) {
        return;
    }

    console.log('loadOriginJquery 11111');
    if (getNowTime() - iLoadOriginJqueryLastTime > iMaxLoadOriginJqueryWaitTime) {
        console.log('loadOriginJquery 2222');
        loadLocalJquery();
        return;
    }

    setTimeoutFunction('loadOriginJquery');
}

function afterPageAction () {
    console.log('/////////////////////////////////////////////////////');
    asyn('clearPageShade');
    // clearPageShade();

    asyn('changeBodyStatus', true);
    // changeBodyStatus(true);

    // asyn('showDomFather');
}

function pageBegin () {
    // console.log('pageBegin 1111111111111');
    asyn('showPageShade');
    // showPageShade();

    // console.log('pageBegin 222222222222');
    asyn('afterPageAction');

    // console.log('pageBegin 444444444444444444');
    asyn('clearPlatformShade');
    // clearPlatformShade();
}

function indexBegin () {
    asyn('loadLocalJquery1');

    // if (typeof window['clearBaseShade'] == 'undefined') {
    //     console.log('platformBegin clearBaseShade is undefined, so settimeout retry to do platformBegin ');
    //     setTimeoutFunction('indexBegin');
    //     return;
    // }

    // console.log('indexBegin 11111111111');
    // asyn('showIndexShade');

    // console.log('indexBegin 22222222222222');

    // console.log('indexBegin 333333333333');
    asyn('clearBaseShade');
    // clearBaseShade();
}
