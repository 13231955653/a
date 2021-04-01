// /**
//  *
//  * 设置文件别名
//  *
//  */
// function setrequires () {
//     let a = [];
//
//     a[sFuncJsTag] = astaticResourceAddress[sFuncJsTag];
//     a['encode'] = sBaseEncodeJs;
//     arequires = a;
// }
//
// /**
//  *
//  * 设置正在读取的静态资源
//  *
//  * @param j 文件路径 type string
//  * @param b 加载中 type boole
//  */
// function setInstaticResource (j = '', b = false) {
//     if (b) {
//         aInstaticResource[j] = true;
//         aAllreadystaticResource[j] = false;
//         return;
//     }
//
//     aInstaticResource[j] = false;
//     aAllreadystaticResource[j] = true;
// }
//
// /**
//  *
//  * 动态加载js
//  *
//  * @param j 依赖文件 type array
//  * @param c 回调函数 type function
//  */
// let aAllreadystaticResource = [];
// let aInstaticResource = [];
// function requires (j = '', c = '') {
//     console.log('pppppppppppppppppppppppppppppppppppppppppp');
//     // console.log(j);
//     // console.log(arequires[j]);
//     // console.log(c);
//
//     let l = j.length;
//     // console.log(l);
//     // console.log(aAllreadystaticResource);
//     let n = 0;
//     for (let i in j) {
//         console.log('vvvvvvvvvvvvvvvvvvvvvvv');
//         console.log(j[i]);
//         console.log(arequires);
//         console.log(arequires[j[i]]);
//         console.log(aAllreadystaticResource);
//         console.log(aAllreadystaticResource[arequires[j[i]]]);
//         if (aAllreadystaticResource[arequires[j[i]]]) {
//             n = parseInt(n) + parseInt(1);
//         }
//
//         console.log(n);
//         console.log(l);
//         if (n == l) {
//             c();
//             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
//             return;
//         }
//     }
//
//     // console.log(aInstaticResource);
//     let m = 0;
//     for (let i in j) {
//         if (aInstaticResource[j[i]]) {
//             m = parseInt(m) + parseInt(1);
//         }
//
//         if (l == m) {
//             console.log('aaaaaaaaaaaaaaaaaaaaaaa');
//             return;
//         }
//     }
//
//     console.log('qqqqqqqqqqqqqqqqqqqqqq');
//     // console.log(arequires[j]);
//     // console.log(astaticResourceAddress[sFuncJsTag]);
//     for (let i in j) {
//         asyn('staticResource', arequires[j[i]]);
//     }
// }
//
// function requiresBegin () {
//     if (typeof window['astaticResourceAddress['base']'] == 'undefined') {
//         let t = setTimeout(function () {
//             clearTimeout(t);
//
//             setrequires();
//         }, 1);
//         return;
//     }
//
//     let t = setTimeout(function () {
//         clearTimeout(t);
//
//         setrequires();
//     }, 1);
// }
//
// window.onload = requiresBegin();
