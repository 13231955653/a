let ws = false;
const sWebsocketIpAddr = '192.168.192.128'; // websocket ip
const sWebsocketPort = '11001'; // websocket port
const aAllowChatTypes = []; // 允许的 websocket 类型
aAllowChatTypes['online'] = '100'; // 对应的允许的 websocket 类型，文本长度
const sCharset = 'UTF-8'; // 编码

var aTimerOutTime = [];
aTimerOutTime['begin'] = 10; // base begin out time
aTimerOutTime['loadVariableJsFile'] = 10; // base load variable js file out time
aTimerOutTime['loadFunctionJsFile'] = 10; // base load function js file out time

const aJsFiles = []; // js 文件
aJsFiles['chat_js'] = './static_resource/js/chat.js'; // about chat

var bInLoadVariableJsFile = false; // 引入变量文件中

var bLoadVariableJsFile = true; //是否引入变量定义文件
