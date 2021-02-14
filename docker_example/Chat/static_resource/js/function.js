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

function insertAfter (newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent) {
        if(parent.lastChild == targetElement){
            parent.appendChild(newElement);
        }else{
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }
}

var bInLoadFunctionJsFile = false; // 引入function文件中

var bLoadFunctionJsFile = true; //是否引入function文件