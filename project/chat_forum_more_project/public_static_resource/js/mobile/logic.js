
function selectPage () {
    switch (window.location.host) {
        case 'chat.you.com' :
            loadJs('./static_resource/js/chat.js');
            break;
    }
}
var bLoadBaseLogicJsFile = true; //已引入 logic js文件