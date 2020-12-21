function checkInput (sCheckKey = '', sCheckValue = '') {
    if (!sCheckKey || !sCheckValue) {
        return false;
    }

    switch (sCheckKey) {
        case 'admin_name' :
            var uPattern = /^[a-zA-Z0-9]{10,16}$/;
            return uPattern.test(sCheckValue);
            break;
        case 'admin_password' :
            var uPattern = /^[a-zA-Z0-9]{10,16}$/;
            return uPattern.test(sCheckValue);
            break;
    }
// //用户名正则，4到16位（字母，数字，下划线，减号）
// var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
// //输出 true
// consoleLog(uPattern.test("caibaojian"));
//     consoleLog('zzzzzzzzzzzz' + uPattern);
//     if (!uPattern) {
//         return false;
//     }
//
//     consoleLog('ddddddddd' + sCheckValue);
//     consoleLog('qqqqqqqqqqqqqqqq' + uPattern.test(sCheckValue));
//     return uPattern.test(sCheckValue);
}