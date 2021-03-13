// function repeatedlyFriendPage (bNoFirst = false) {
//     if (typeof window['apiQuery'] === 'undefined') {
//         loadApiJs();
//
//         console.log('repeatedlyFriendPage apiQuery is undefined. so settimeout retry ');
//         setTimeoutFunction('repeatedlyFriendPage', bNoFirst);
//         return;
//     }
//     //
//     // console.log(bNoFirst);
//     // console.log('repeatedlyFriendPage');
//     // if (!existFriendBody()) {
//     //     console.log('repeatedlyFriendPage ' + sFriendBodyId + ' is no dom, so settimeout retry');
//     //     setTimeoutFunction('repeatedlyFriendPage');
//     //     return;
//     // }
//     // console.log('repeatedlyFriendPage allready');
//     // console.log(bNoFirst);
//     //
//     // clearPageShade();
// }
//
// function existFriendBody () {
//     return document.getElementById(sFriendBodyId) ? true : false;
// }

function friendBegin () {
    console.log('friendBegin begin');
    asyn('pageBegin');
}
