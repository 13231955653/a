/*bbb*/function changeDomOpacity (a, b = false) {
    let c = '';
    let d = '';
    if (b) {
        c = 1;
        d = 100;
    } else {
        c = 0;
        d = 0;
    }

    a.style.filter = 'alpha(opacity:' + d + ')';
    a.style.opacity = c;
}/*bbb*/
/*aaa*/function styleFuncBegin () {
    console.log('styleFuncBegin');
}/*aaa*/
/*ccc*/styleFuncBegin()/*ccc*/
