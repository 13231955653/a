//in array
//return index tag
function inArray ( sSearch, aArray ) {
    for ( var i in aArray ) {
        if ( aArray[i] === sSearch ) {
            return i;
        }
    }

    return false;
}

function notice (sMessage = '') {
    if (typeof sMessage !== 'string') {
        return false;
    }

    sMessage = typeof aLang[sMessage] != 'undefined' ? aLang[sMessage] : sMessage;
    alert(sMessage);
}

var bInLoadFunctionJsFile = false; // 引入function文件中

var bLoadFunctionJsFile = true; //是否引入function文件