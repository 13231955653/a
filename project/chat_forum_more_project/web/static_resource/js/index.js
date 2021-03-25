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

// function loadLocalJquery1 () {
//     if (bJquery) {
//         return;
//     }
//
//     // console.log('loadOriginJquery 11111');
//     if (getMillisecondTime() - iLoadOriginJqueryLastTime > iMaxLoadOriginJqueryWaitTime) {
//         // console.log('loadOriginJquery 2222');
//         // asyn('loadLocalJquery');
//         setTimeoutFunction('loadLocalJquery');
//         return;
//     }
//
//     setTimeoutFunction('loadOriginJquery');
// }

function afterPageAction () {
    // console.log('/////////////////////////////////////////////////////');
    // asyn('clearPageShade');
    // clearPageShade();

    // asyn('changeBodyStatus', true);
    // changeBodyStatus(true);

    // asyn('showDomFather');
}



function indexBegin () {
    console.log('2222222222222222222indexBegin');
    // asyn('loadLocalJquery1');

    // if (typeof window['clearBaseShade'] == 'undefined') {
    //     console.log('platformBegin clearBaseShade is undefined, so settimeout retry to do platformBegin ');
    //     setTimeoutFunction('indexBegin');
    //     return;
    // }

    // console.log('indexBegin 11111111111');
    // asyn('showIndexShade');

    // console.log('indexBegin 22222222222222');

    // asyn('showIndexShade');
    // console.log('indexBegin 333333333333');
    // asyn('clearBaseShade');
    // clearBaseShade();
}
