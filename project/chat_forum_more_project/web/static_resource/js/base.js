const debug = true;

const sHtmlLang = 'zh-cn';
let sCharset = 'utf-8';

const sBaseProtocol = window.location.protocol + '//';

const sBaseHostSonPrefix = 'static_resource';
const sBaseHostSonNumber = 21;

const iSpeed = 300; //动画速度

const sQueryOneMmPxId = 'get_one_mms_px';

const sAstrictJumpUrl = 'https://www.baidu.com';

const aAllreadyLoadIframe = [];

const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 2.5; //默认一个中文字占多宽，单位毫米

let iWinWidth = 0;
let iWinHeight = 0;

let sIp = '';
let sCid = '';
let sIpCityName = '';
const sQueryUserIpAddress = 'http://pv.sohu.com/cityjson?ie=' + sCharset;

//localstorage相关
const iMaxLocalstorageSize = 4718592;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorgaeBeginTag = 0;
//localstorage相关

const sShadeClass = 'shades';
const sPublicShadeId = 'shade_father';

const sNoShowIframeCLass = 'iframe_no_show';

const sBaseShadeId = 'base_shade';
const sIndexShadeId = 'index_shade';
const sPlatformShadeId = 'platform_shade';
const sPageShadeId = 'page_shade';
let iShadeBeginZIndex = 1000000000;
const sInvisibleClass = 'invisible';
const sVisibleClass = 'gradually_visible';
const sOpacityShowClass = 'opacity_show';
const sOpacityHiddenClass = 'opacity_hidden';

const iDefaultUserPersonalizedColor = 1;
let iFontSize = 16;

const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';

const oDomFatherId = 'dom_father';
const oDomStorageId = 'storage_father';

let sOrigin = '';

const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';

const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;

const iNoticeTimeLimit = 3600000;

let aBaseTimer = []; //基础定时器
const b = []; //基础定时器间隔时间
// const t = 1000;
const t = 10;
// const t2 = 1000;
const t2 = 10;
b['winResize'] = t2;
b['loadEncodeJs'] = t;
b['loadLogicJs'] = t;
b['loadDomJs'] = t;
b['loadFunctionJs'] = t;
b['loadOriginJquery'] = t;
b['loadLang'] = t;
b['logicBegin'] = t;
b['loadPlatformDomJs'] = t;
b['showPageShade'] = t;
b['loadResetCss'] = t;
b['checkLoadCss'] = 50;
b['writeStorageDom'] = t;
b['pageBegin'] = t;
b['loadLocalJquery'] = t;
b['replaceLangs'] = t;
b['loadPublicCss'] = t;
b['loadPersonalizedCss'] = t;
b['loadVariableCss'] = t;
b['writePublicDom'] = t;
b['showIndexShade'] = t;
b['loadLocalJquery1'] = t;
b['individuationUuid'] = t;
b['makeSessionid'] = t;
b['cacheSessionId'] = t;
b['repeatedlySettingPage'] = t;
b['repeatedlyFriendPage'] = t;
b['repeatedlyForumPage'] = t;
b['repeatedlyChatPage'] = t;
b['loadApiJs'] = t;
b['sessionId'] = t;
b['repeatedlyPage'] = t;
b['localstoragePostMessage'] = t;
b['doCheckSessionId'] = t;
b['checkSessionKeyFormat1'] = t;
b['replaceWindowTitle'] = t;
b['replaceDomLang'] = t;
b['replaceLang'] = t;
b['replaceTitle'] = t;
b['afterLoadPageJs'] = t;
b['updateUrlPage'] = t;
b['setContent'] = t;
b['baseBegin'] = t;
b['loadIndexJs'] = t;
b['showUseTimeLimitNotice'] = t;
b['clearShade'] = t;
b['sessId'] = t;
b['indexBeginLogic'] = t;
b['indexBegin'] = t;
b['loadOriginJquery'] = t;
b['baseShade'] = t;
// b['pubHeader'] = t;
// b['pubBody'] = t;
// b['pubFooter'] = t;
// b['pubLeft'] = t;
// b['pubRight'] = t;
// b['pubNotice'] = t;
b['platformBegin'] = t;
// b['writeIndexShade1'] = t;
b['showBaseShade'] = t;
b['showShade'] = t;
b['clearBaseShade'] = 100;
b['checkUseTime'] = 60000;
b['checkSessionIdOutTime'] = 181652;
b['checkSessionKeyFormat'] = 253648;
const aTimer = b; //基础定时器间隔时间

const sIndexScriptTagId = 'index_js_script';
const sFinalMetaTagId = 'copyright_content';

const sContentAndCharset = 'content_charset';
const sContentAndCharsetType = 'Content-Type';
const sContentAndCharsetContent = 'text/html; charset=utf-8';
const sCopyright = 'copyright';
const sAuther = 'auther';
const sKeywords = 'keywords';
const sDescription = 'description';
const sApplicationName = 'application-name';
const sRobots = 'robots';
const sAllowCurlPage = 'noindex';
const sAllowIndexOther = 'nofollow';
const sAboutIe = 'about_ie';
const sAboutIeHttpEquiv = 'x-ua-compatible';
const sAboutIeContent = 'ie=edge';
const sClearType = 'cleartype';
const sClearTypeHttpEquiv = 'cleartype';
const sClearTypeContent = 'on';
// Pinned Site
const sSkypeToolbar = 'skype_toolbar';
const sSkypeToolbarContent = 'skype_toolbar_parser_compatible';
const sWin8Ie10_1 = 'msapplication-TileImage';
const sWin8Ie10_1Content = 'pinned-tile-144.png';
const sWin8Ie10_2 = 'msapplication-TileColor';
const sWin8Ie10_2Content = '#009900';
const sWin9_1Ie11 = 'msapplication-config';
const sWin9_1Ie11Content = 'ieconfig.xml';
// Pinned Site
// <!-- 优先使用最新的chrome版本 -->
const sGoogleBrowser = 'google_browser';
const sGoogleBrowserHttpEquiv = 'X-UA-Compatible';
const sGoogleBrowserContent = 'chrome=1';
// 360浏览器
// <!-- 选择使用的浏览器解析内核 -->
const s360 = '360_nei_he';
const s360Name = 'renderer';
const s360Content = 'webkit|ie-comp|ie-stand';
// UC手机浏览器
<!-- 将屏幕锁定在特定的方向 -->
const sUc = 'uc_';
const sUcName = 'screen-orientation';
const sUcContent = 'landscape/portrait';
// <!-- 全屏显示页面 -->
const sFullScreen = 'full-screen';
const sFullScreenName = 'full-screen';
const sFullScreenContent = 'yes';
// <!-- 应用模式，默认将全屏，禁止长按菜单，禁止手势，标准排版，强制图片显示。 -->
const sAppMode = 'app_mode';
const sAppModeName = 'browsermode';
const sAppModeContent = 'application';
// <!-- 禁止夜间模式显示 -->
const sForbidNight = 'forbid_night';
const sForbidNightName = 'nightmode';
const sForbidNightContent = 'disable';
// <!-- 使用适屏模式显示 -->
const sAdaptScreen = 'adapt_screen';
const sAdaptScreenName = 'layoutmode';
const sAdaptScreenContent = 'fitscreen';
// QQ手机浏览器
<!-- 锁定屏幕在特定方向 -->
const sQqImmobilizationOrientation = 'qq_orientation';
const sQqImmobilizationOrientationName = 'x5-orientation';
const sQqImmobilizationOrientationContent = 'landscape/portrait';
// <!-- 全屏显示 -->
const sQqFullScreen = 'qq_fullscreen';
const sQqFullScreenName = 'x5-fullscreen';
const sQqFullScreenContent = 'true';
// <!-- 页面将以应用模式显示 -->
// <meta name="x5-page-mode" content="app">
const sQqAppMode = 'qq_app_mode';
const sQqAppModeName = 'x5-page-mode';
const sQqAppModeContent = 'app';
// Apple iOS
// <!-- Smart App Banner -->
const sIosAppBanner = 'apple-ios-itunes-app';
const sIosAppBannerName = 'apple-itunes-app';
const sIosAppBannerContent = 'app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT';
// <!-- 禁止自动探测并格式化手机号码 -->
const sForbidQueryTelNumber = 'query_tel_num_and_format';
const sForbidQueryTelNumberName = 'format-detection';
const sForbidQueryTelNumberContent = 'telephone=no';
// <!-- 忽略识别邮箱 -->
const sNeglectEmail = 'neglect_email';
const sNeglectEmailName = 'format-detection';
const sNeglectEmailContent = 'email=no';
// <!-- 是否启用 WebApp 全屏模式 -->
const sAppFullScreenMode = 'app_full_screen_mode';
const sAppFullScreenModeName = 'apple-mobile-web-app-capable';
const sAppFullScreenModeContent = 'yes';
// <!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->
const sAppleMobileWebBarColor = 'apple_mobile_web_bar_color';
const sAppleMobileWebBarColorName = 'apple-mobile-web-app-status-bar-style';
const sAppleMobileWebBarColorContent = 'black';
// 移动端
// <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->
const sMobileFullScreen = 'mobile_full_screen';
const sMobileFullScreenName = 'viewport';
const sMobileFullScreenContent = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0';

const sAutherInfo = 'white 小白 邮箱';
const sKeyword = '关键词1，关键词2，关键词3';
const sDescriptionContent = '规定页面的描述。搜索引擎会把这个描述显示在搜索结果中。';
const sApplicationNameContent = '规定页面所代表的 Web 应用程序的名称。';
const sCopyrightContent = '版权所有，保留一切权利。';

// const sUniqueStrPrefix = 'uniquiue';
// const sGuidSplitTag = '-';
// const sUuidSplitTag = '-';
// const sUuidString = '0123456789abcdef';
const sIndividuationUuidTag = '*';
const sUniqueStrSplitTag = '_';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const iIndividuationUniqueStrLength = 1000;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;
const iSessionBeforeFormatLength = 32;

const sSessionSplitTag  = '_';
const sSessionSalt  = '__()9789*&^%$sKUYsah98';
let sOldSessionId = '';
let sNewSessionId = '';
const iUpdateSessionMinTime = 1800000;
const iUpdateSessionMaxTime = 5400000;
const iSessionOutTime = 5410;
const sSessionIdSplitLength =8;
const sOldSessionIdStorageKey = 'old_session_id';
const sNewSessionIdStorageKey = 'new_session_id';

// const sBaseShadeId = 'base_shade';
// const sIndexShadeId = 'index_shade';
// const sPlatformShadeId = 'platform_shade';
// const sPageShadeId = 'page_shade';
// let iShadeBeginZIndex = 1000000000;
// const sInvisibleClass = 'invisible';
// const sVisibleClass = 'gradually_visible';

const sPublicFootId = 'public_footer';
const sPublicHeaderId = 'public_header';
const sPublicBodyId = 'public_body';
const sPublicLeftId = 'public_left';
const sPublicRightId = 'public_right';
const sPublicNoticeId = 'notice_father';
const sFootTag = '_foot';
const sFootLiSuffix = '_li';
const sActiveFootTag = 'foot_active';
const sReLangClass = 're_lang';
const sSettingBodyId = 'setting_body';
const sForumBodyId = 'forum_body';
const sChatBodyId = 'chat_body';
const sFriendBodyId = 'friend_body';

const sReplaceLangIdType = 'id';

const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sDefaultPage = 'forum';
const sForumPage = 'forum';
const sChatPage = 'chat';
const sFriendPage = 'friend';
const sSettingPage = 'setting';
const a3 = [];
a3[sForumPage] = "uodateUrlPageArg('" + sForumPage + "')";
a3[sChatPage] = "uodateUrlPageArg('" + sChatPage + "')";
a3[sFriendPage] = "uodateUrlPageArg('" + sFriendPage + "')";
a3[sSettingPage] = "uodateUrlPageArg('" + sSettingPage + "')";
const aFooterAction = a3;

const sDefaultPageHtml = 'index.html';

let bFirstLoad = true; // 新打开窗口

// let iWinWidth = 0;
// let iWinHeight = 0;

//RSA公钥
const RSA_DEFAULT_PUBLIC = 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0lPvdk7Kbuxesr97W/rEqEsvhFBM6Uk/9GELq/b8aWyzbO9Zf1Z9St9EqWr7U26t9mQoZOuUQLMu7ijp/AsXOR7ojZIzdJ/QESptMHrlcSmRRHf2nUzeh1SCs8xveKNNuoJjqcGXcoUPzrtrQbtpcgNY3rofkIIi/xdSDDiGVxk8yrkFZIAdPi0w6oUwOedcnp9bosnURR42i7RcEX4/KUkN2pcd26nZGrrMGqOrOmLayx3GWBrRQ6dvBW/fM1a065SUiGlpCaG6lR0P1zRp7RPX/J73b47oaBCoOf8CVMjR5Nhdggduflu5nYVn0GRG8hGDlo0pRL+DwiI6NH6WloOgp4QYyVlczVs6gHYU5oW6AiwD8dp00IYQmJGhh8H9koO4+K1v1BdHvlNx+TcXRCWiqxqrkRAh80hRAvX1Ybhax+eV1ADr1PKR8TlJTUFrCIO9FrC42Hh/JFQITkzGzGFo1ZIfPY60kMsKyG/jGbs969/A4xz9UJaU0WuqRrjZd1HSiGd800FC4tragVPY8fLoIJs21bPuVKRwjRBO061CM6JyODzClUPN8iT20TaASWGQuLlBssZnUWrpU4Hgx1KIFm7reaXsaxsPZGiKkULBrFKeZoxUsnNSKoPBZGqm7dCqCeGSzjEOuvpyNx3gLz3vLPkrPYyw61kWVUxDGBECAwEAAQ==';
//RSA私钥
const RSA_DEFAULT_PRIVATE = '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';
//RSA localstorage 公钥
const RSA_LOCALSTORAGE_PUBLIC = 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAr60h9IsmDzmyzPgbVxUK3mQI9ZkMocD6v9lHAi2hxEAoadWbVjbA/UDMYY5S6hLTUnq1XqFiPEfnlGxD8djwiOfeOPCs6cClKrCbxUBqtrGZsAbkMHFIEnY00M6Tj907JkVqq8VwGj9KKKNSZcXYhHQ4qGQITShK0gnYDRDfhKL78hM8JM0u8uoGLqpcPkxZYpVplxeEDLf379Es5VFjcf+QHZiGGvZbobzUw9Qx0X1m0xOebuGuG1/wTHCRpVPaGlTVRd261biIVdtYXCmizyNltOKGla3wQdAmnGDbPRy01GgD+ZHx7mdHC26lZ0TSIdIoLFVRryD30PRfha0ZEHqXuvRk12izQgIx29ZUql3Y2a21MiZQTplcbHcAgSShSafiGWGGg5MZXPydMCqFUcZ00Zb8dpiDSNUDvu+THJoi1EOS/7QSMaSC/SRylMN3gshkoNmMjlJhh6O51oH6DV1lk3gxjRyhVKaPL67An+E8IHl+TdkNWfhVi2//omWO1qX41qowu0/28zSPNjTSPd2YMeG8eWH4jvVKCA56/BmHej+DI5f3F79GLhCpole8NuqNQr23NShYyTFkoazkWoWCNpVbQWp/aBx1pFL2HswT1wpe6zFc7t2VQFXmEzRD9KH2J7RIPDLUceITCHaSPz+vu21lDNgHaJDW3TzPKKUCAwEAAQ==';
//RSA localstorage 私钥
const RSA_LOCALSTORAGE_PRIVATE = 'MIIJQwIBADANBgkqhkiG9w0BAQEFAASCCS0wggkpAgEAAoICAQCvrSH0iyYPObLM+BtXFQreZAj1mQyhwPq/2UcCLaHEQChp1ZtWNsD9QMxhjlLqEtNSerVeoWI8R+eUbEPx2PCI59448KzpwKUqsJvFQGq2sZmwBuQwcUgSdjTQzpOP3TsmRWqrxXAaP0ooo1JlxdiEdDioZAhNKErSCdgNEN+EovvyEzwkzS7y6gYuqlw+TFlilWmXF4QMt/fv0SzlUWNx/5AdmIYa9luhvNTD1DHRfWbTE55u4a4bX/BMcJGlU9oaVNVF3brVuIhV21hcKaLPI2W04oaVrfBB0CacYNs9HLTUaAP5kfHuZ0cLbqVnRNIh0igsVVGvIPfQ9F+FrRkQepe69GTXaLNCAjHb1lSqXdjZrbUyJlBOmVxsdwCBJKFJp+IZYYaDkxlc/J0wKoVRxnTRlvx2mINI1QO+75McmiLUQ5L/tBIxpIL9JHKUw3eCyGSg2YyOUmGHo7nWgfoNXWWTeDGNHKFUpo8vrsCf4TwgeX5N2Q1Z+FWLb/+iZY7WpfjWqjC7T/bzNI82NNI93Zgx4bx5YfiO9UoIDnr8GYd6P4Mjl/cXv0YuEKmiV7w26o1Cvbc1KFjJMWShrORahYI2lVtBan9oHHWkUvYezBPXCl7rMVzu3ZVAVeYTNEP0ofYntEg8MtRx4hMIdpI/P6+7bWUM2AdokNbdPM8opQIDAQABAoICAFejcUsDl8sEp7QlGc6JitCC6w1Kesi+8th+VjQ5+3dh4kdZ7pJF4mT0zIDmdWqcVZvR52T78XvNCzQ6BnNCHEzQD0YsmrZKCpuPW0Y96n6VfuwXpAKeoKvFGHgKdgbRAM8I1jw21MPjSuWXBGYNGwSIzjMDJDkJnrnFe2iZQEh03mdXPSvGyGMaaFcjWb0ibX0GuJRNgOyvYhrbKSCFR6z5JzX8fvo4aGH5R9MhqnCttHwcT29VWnwBkmkvxxjJCgcUxwiBotE3q5vZPu1LQBNBv11LnIRTL4ZFht2AXB7SkUtdUI5SRnT+RKzpV856wLFqm+vx7DwHoFk3b+fKALQqBOSM4zW20SDNB0u+ipb6bDQ9GrzCmDTXsVWpesE1DTvu6rwIy1wrY4eOAOr9IipLM4IEfoqZrWymr5j6/2+zXoVg+CMGmN9X5wi+I3kM07jU/XuYb5kEPHzxp88PSHz0O5R6HLssSBZPVF6PJKwBIBp1biAo23uyJAbySrYwOdp5XV/HJxUCSaLdEgMVhWEQURekNOdLgH1Puybk6vjELCq5ruq56gW4QTOH+c3TEvYbrw3RLZ8sGtnRBjSuHPGogfyj0gH37fYjBE3L5aproXxsq03VQodih/Ijn6OwA/rPaNh4B05HdE6D+VsZWHAYJKqdX3SNE4DtrZX3AfDJAoIBAQDd9+Zie5eo96VfwnEkSd0Kcv/O6ifl1zlWIL11mCdFqoWXnN/ZBqELBCSeRMXDmYUvRGRsNQ/kcq93LT/0NVQas8axG9bVxTXUSBFIm2ou0GzsTSRhlJe+5MpawGdjCpvYmyXmvfg9YoJZdOUWmiFfsrHCgAPpLOQ1iYmpzA6smyLQkbHqCE6sQvkc3++CiocTvbWgJOq6XLUShq5FMq1sxZp4X9orq+H3Bgg/h0SvUdR6j3ueDHUo5RrOzzwzqMLRp3ADr+WiYmsP06NZfgCUSKCT7uT21QPp0FzdVNd0iEiFPI3weICoWepDbG5uQ3btIGMJ2m9Q0KtWiPW37Zo3AoIBAQDKnE1kM01bjAHgpzFlPbu7M39v5PmEIkQykbIFheWUHp0hddO6lg1rYTpsd6J3Out6UCEOxhfB/JklfWwnSlfctIg+Z4fXvWTrceZaT9n5c9DmzQxDQxsc8TJATuscbua7HMO/5ANND8ntbZ796t28/5fbtlkqtzDLrbITfPEtGsUE5uhULEaK8F60cCXkP6z4yU5ofPRFi5bbkkQoo7QlIZlStLCqUZIxHu8LHTcUWzdNw6qGq2uvQUVmI2gqJqAJxSfGQHZnoVlwFp7ESnMuUew7NlPeSd3KCholCWKW4Lfgv518NsqBnDsp41sCeFV2/uNbzgCjcvQHn5NzF3YDAoIBAQCEiI9UAE3Gws9IhRX/P+cuZQnepytZbg+7IGNfgpD4ZN/NbgquT+n6ZOfkZFXc+55tYZ3AilJJ6jxgoXENRIZKR0t81o2JKG6CqOFBBCL7ftF6qnjtlsagYYV9eGKC3YO+aqzPwGAnbtk7xrM+spr4w/6ljsBHCtncKZo7+y5L23mHJWcgwQMQkhCiMAeXX1VV8TEwRLquucoYHLiTcrXgO4CHHVxsNP3/++cS35agQ/DlmSSLcw7Fcz51e4GLqtlgS2RznyQyuCcK1Sg0uCpqX48ZpUurIfdrNVEtion296StgUGS8rCHVOCuj2DEj53D6lGYQYezrlSPn8lvn/wzAoIBAF/mU4tV7Quj3U+kU3EEI1OcMHmZ+7BbN8RnycdrdRsC0oT/7FOoqnlk7+5fQfsFXGfsfXksshoToblpAEQooCXLHaHMBzRKZPY8VzfwC9BSzVIxQ9iibrboQ0zFDevLYlK2bsDo/9b93ioPdO3iuUm4APzx9oqNYv9FG8C1psIepZqIYPdWbZ1d4LWvT4AV051+SyqR2l0AkUsklDZYJfBdUuEevXAgY/30EllEXsm30xlvv8s2YCX30w1hPPCWj7GQLB9ea6zpZhfz3Poz8wi9pf7w3AmfFOeImI9nPc8EVoR+reAZXwiyFh7hijZFFs7YHm1ZuFulEXR6R6R2OlkCggEBANqIEPnQfZVK/1zwq18a+XOH1SF0Jhsau5/cC6x4HgeYbrkj3WGPKJBRR1sMR/kRWSpcqiNXd7mHQjmLrxSdoX2mF0+k4MwGvNVtWvdvezU/dTA3Pgf7waV/EPUUfxv3oE7XHXCSGNsTVT+XrVwURqwZDGrHDo9HwVw/nrQzYUiKyYftJEDPmmPwzR41iivuuqbOlpSi8CUYtywYYhc2GNG5DsBWKvGI3wh0F5Zri+EhPiX9wBk8tmUO/W7tb7GLlfeFv4Rxs97FLA8AdnmM5VTnp7CRCgDLIVNyr8Yu93V+smC0VNfV+znLdcMq+bfDKJQGOVyUvL6vUsDeN2AhUqc=';

const a1 = [];//localstorage 混淆加密
a1['a'] = '一';
a1['b'] = '二';
a1['c'] = '三';
a1['d'] = '四';
a1['e'] = '五';
a1['f'] = '六';
a1['g'] = '七';
a1['h'] = '八';
a1['i'] = '九';
a1['j'] = '零';
a1['k'] = '壹';
a1['l'] = '贰';
a1['m'] = '叁';
a1['n'] = '肆';
a1['o'] = '伍';
a1['p'] = '陆';
a1['q'] = '柒';
a1['r'] = '捌';
a1['s'] = '玖';
a1['t'] = '百';
a1['u'] = '千';
a1['v'] = '万';
a1['w'] = '亿';
a1['x'] = '兆';
a1['y'] = '京';
a1['z'] = '垓';

a1['A'] = '秭';
a1['B'] = '穰';
a1['C'] = '沟';
a1['D'] = '涧';
a1['E'] = '正';
a1['F'] = '载';
a1['G'] = '极';
a1['H'] = '赤';
a1['I'] = '橙';
a1['J'] = '黄';
a1['K'] = '绿';
a1['L'] = '青';
a1['M'] = '蓝';
a1['N'] = '紫';
a1['O'] = '白';
a1['P'] = '黑';
a1['Q'] = '红';
a1['R'] = '黯';
a1['S'] = '赫';
a1['T'] = '靛';
a1['U'] = '黛';
a1['V'] = '丹';
a1['W'] = '朱';
a1['X'] = '彤';
a1['Y'] = '绯';
a1['Z'] = '绛';

a1['='] = '等';
a1['/'] = '斜';

a1['0'] = '东';
a1['1'] = '南';
a1['2'] = '西';
a1['3'] = '北';
a1['4'] = '上';
a1['5'] = '中';
a1['6'] = '下';
a1['7'] = '指';
a1['8'] = '位';
a1['9'] = '向';
const aLocalstorageEncodeConfuseEncode = a1;//localstorage 混淆加密

let sBaseJsFile = '';
let sIndexJsFullName = '';
let sFunctionJsFile = '';
let sJqueryJsFile = '';
let sLogicJsFile = '';
let sDomJsFile = '';
let sPlatformDomJsFile = '';
let sEncodeJsFile = '';
let sApiJsFile = '';
let sOriginJquery = '';
let sCnLangFile = '';
let sEnLangFile = '';
let sForumJsFile = '';
let sChatJsFile = '';
let sFriendJsFile = '';
let sSettingJsFile = '';

const aCssVersion = []; // css 文件版本号
let sResetCssFile = '';
let sPublicCssFile = '';
let sPersonalizedCssFile = '';

let bMobile = '';
function isMobile () {
    let u = navigator.userAgent;
    let m = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad','iPod'];
    bMobile = false;

    //根据userAgent判断是否是手机
    for (let v = 0; v < m.length; v++) {
        if (u.indexOf(m[v]) > 0) {
            bMobile = true;
            break;
        }
    }

    return bMobile;
}
function platformTag () {
    return (bMobile !== '' ? bMobile : isMobile())  ? 'mobile' : 'computer';
}
const sPlatformTag = platformTag();

const sBaseJs = '/static_resource/js/public/base.js';
const sIndexJs = '/static_resource/js/index.js';
const sFunctionJs = '/static_resource/js/public/function.js';
const sJqueryJs = '/static_resource/js/public/jquery.js';
const sLogicJs = '/static_resource/js/' + sPlatformTag + '/logic.js';
const sDomJs = '/static_resource/js/public/dom/public_dom.js';
const sBaseEncodeJs = '/static_resource/js/public/encode.js';
const sCnLang = '/static_resource/js/lang/cn.js';
const sEnLang = '/static_resource/js/lang/en.js';
const sPlatformDomJs = '/static_resource/js/' + sPlatformTag + '/dom/public_dom.js';
const sForumJs = '/static_resource/js/' + sPlatformTag + '/page/forum.js';
const sChatJs = '/static_resource/js/' + sPlatformTag + '/page/chat.js';
const sFriendJs = '/static_resource/js/' + sPlatformTag + '/page/friend.js';
const sSettingJs = '/static_resource/js/' + sPlatformTag + '/page/setting.js';
const sApiJs = '/static_resource/js/public/query/query.js';
sOriginJquery = 'http://code.jquery.com/jquery-1.9.1.min.js'; ////////////国内外需要更换适用的地址
// sOriginJquery = 'http://libs.baidu.com/jquery/2.1.4/jquery.min.js'; ////////////国内外需要更换适用的地址
// sOriginJquery = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'; ////////////国内外需要更换适用的地址

const c = [];  // js 文件版本号
c[sBaseJs] = 'aaaaaaa';
c[sIndexJs] = 'bbbbbbbb';
c[sFunctionJs] = 'ddddddd';
c[sJqueryJs] = 'eeeeeeee';
c[sLogicJs] = 'ffffffff';
c[sDomJs] = 'gggggggg';
c[sBaseEncodeJs] = 'hhhhhhhhh';
c[sCnLang] = 'iiiiiii';
c[sEnLang] = 'jjjjjjjj';
c[sPlatformDomJs] = 'kkkkkkkkk';
c[sForumJs] = 'lllllll';
c[sChatJs] = 'mmmmmmmm';
c[sFriendJs] = 'nnnnnnnn';
c[sSettingJs] = 'oooooooo';
c[sApiJs] = 'ppppppp';
const aJsVersion = c; // js 文件版本号

let bAllreadyLoadBaseCss = false;
function loadBaseCss () {
    if (bAllreadyLoadBaseCss) {
        return;
    }
    bAllreadyLoadBaseCss = true;

    asyn('loadPersonalizedCss');

    asyn('loadResetCss');

    asyn('loadPublicCss');
}

let bLoadPublicCss = false;
function loadPublicCss () {
    if (bLoadPublicCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadPublicCss')) {
        return false;
    }

    // loadCss(sPublicCssFile, 'afterloadPublicCss');
    asyn('loadCss', sPublicCssFile, 'afterloadPublicCss');

    setTimeoutFunction('loadPublicCss');
}
function afterloadPublicCss () {
    bLoadPublicCss = true;
}



let bLoadResetCss = false;
function loadResetCss () {
    if (bLoadResetCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadResetCss')) {
        return false;
    }

    // loadCss(sResetCssFile, 'afterloadResetCss');
    asyn('loadCss', sResetCssFile, 'afterloadResetCss');

    setTimeoutFunction('loadResetCss');
}
function afterloadResetCss () {
    bLoadResetCss = true;
}

let bLoadPersonalizedCss = false;
function loadPersonalizedCss (c = false) {
    if (!c) {
        queryUserPersonalizedColor();
        return;
    }

    if (bLoadPersonalizedCss) {
        console.log('loadPersonalizedCss bLoadPersonalizedCss in loading, so no to do ');
        return true;
    }
    bLoadPersonalizedCss = true;

    let sPersonalizedColor = c;

    if (!checkRequestJsCssLimit('css', 'loadPersonalizedCss')) {
        return false;
    }

    let sPersonalizedCss = '/static_resource/css/personalized/color/' + sPersonalizedColor + '.css';
    aCssVersion[sPersonalizedCss] = 'ggggggggd';
    sPersonalizedCssFile = setJsCssSrc('css', sPersonalizedCss);

    // loadCss(sPersonalizedCssFile, 'afterloadPersonalizedCss');
    asyn('loadCss', sPersonalizedCssFile, 'afterloadPersonalizedCss');

    setTimeoutFunction('loadPersonalizedCss', c);
}
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = false;
}

/**
 *
 *加载 css 文件
 *
 * @param r link src type string
 * @param c 回调函数 type string
 * @returns {boolean}
 */
function loadCss (r = '', c = '') {
    if (!r) {
        console.log('loadCss r is null');
        return false;
    }

    let l = document.createElement('link');
    l.type = 'text/css';
    l.rel = 'stylesheet';
    l.href = r;
    l.charset = sCharset;
    l.id = r;

    if (c) {
        checkLoadCss(c, l.id);
    }

    // oHead.insertBefore(l, document.getElementById(sIndexScriptTagId));
    // oHead.insertBefore(l, sIndexScriptTag);
    asyn('asynLoadCss', l);
}
function asynLoadCss (l) {
    // oHead.insertBefore(l, sIndexScriptTag);
    insertAfter(l, oFinalMeta ? oFinalMeta : finalMeta());
}
let oIndexScriptTag = '';
function indexScriptTag () {
    oIndexScriptTag = document.getElementById(sIndexScriptTagId);
}
indexScriptTag();

let oFinalMeta = '';
function finalMeta () {
    oFinalMeta = document.getElementById(sFinalMetaTagId);
    return oFinalMeta;
}
/**
 *
 * 检查 css 是否加载
 *
 * @param c 回调函数 type  string
 * @param d css link 标签 id type string
 * @returns {boolean}
 */
function checkLoadCss (c = '', d = '') {
    if (!c || !d) {
        console.log('checkLoadCss c or d is null');
        return false;
    }

    let k = 'checkLoadCss' + '--' + c;
    if (document.getElementById(d)) {
        clearTimeout(aBaseTimer[k]);

        clearTimeout(aBaseTimer[k]);

        window[c]();
        return;
    }

    aBaseTimer[k] = setTimeout(function () {
        checkLoadCss(c, d);
    }, aTimer['checkLoadCss']);
}
/**
 *
 * 在 j 之后插入 新节点n
 *
 * @param n 新节点 type dom
 * @param j
 */
function insertAfter (n, j) {
    let p = j.parentNode;
    if (p.lastChild == j) {
        p.appendChild(n);
    } else {
        p.insertBefore(n,j.nextSibling);
    }
}

let bInloadUserPersonalizedColorFromLocalstorage = false;
function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        console.log('queryUserPersonalizedColor sPersonlizedColor is defined, so no to load user personlized color css file');
        return sPersonlizedColor;
    }

    if (bInloadUserPersonalizedColorFromLocalstorage) {
        console.log('queryUserPersonalizedColor bInloadUserPersonalizedColorFromLocalstorage is true, so no to load user personlized color css file');
        return;
    }
    bInloadUserPersonalizedColorFromLocalstorage = true;

    // queryLocalstorage(sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
    asyn('queryLocalstorage', sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
}
/**
 *
 * @param c color string
 */
function afterQueryUserPersonalizedColor (c = '') {
    if (c) {
        sPersonlizedColor = c;
    } else {
        sPersonlizedColor = iDefaultUserPersonalizedColor;

        // setPersonlizedColor(sPersonlizedColor);
        asyn('setPersonlizedColor', sPersonlizedColor);
    }
    bInloadUserPersonalizedColorFromLocalstorage = false;

    // loadPersonlizedColorCss(sPersonlizedColor);
    asyn('loadPersonlizedColorCss', sPersonlizedColor);
}
/**
 *
 * @param c localstorage key string
 * @returns {boolean}
 */
function setPersonlizedColor (c = '') {
    if (!c) {
        console.log('setPersonlizedColor c is null');
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(sLocalstorgaeUserPersonalizedColorKey, c, false, 'loadPersonlizedColorCss');
    }, 0);
}
/**
 *
 * @param c personnalzed color
 * @returns {boolean}
 */
function loadPersonlizedColorCss (c = '') {
    c = c ? c : iDefaultUserPersonalizedColor;
    if (!c) {
        console.log('loadPersonlizedColorCss c is null');
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadPersonalizedCss(c);
    }, 0);
}

let bInLoadPageJs = false;
let sPageNow = '';
function loadPageJs () {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzaaaa');
    if (bInLoadPageJs) {
        console.log('loadPageJs bInLoadPageJs in load, so no to do');
        return ;
    }
    bInLoadPageJs = true;

    asyn('showPageShade');

    // let sPage = getNowPage();
    let j = '';
    sPageNow = getNowPage();
    switch (sPageNow) {
        case sForumPage:
            j = sForumJsFile;
            break;
        case sChatPage:
            j = sChatJsFile;
            break;
        case sFriendPage:
            j = sFriendJsFile;
            break;
        case sSettingPage:
            j = sSettingJsFile;
            break;
    }

    if (!j) {
        console.log('loadPageJs j is null, no to do');
        return false;
    }

    if (!checkRequestJsCssLimit('js', 'loadPageJs_' + j)) {
        console.log('loadPageJs checkRequestJsCssLimit loadPageJs_' + j + ', limit, so no to load');
        return false;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        changeDomFatherOpacity();
    }, 0);

    // let t2 = setTimeout(function () {
    //     clearTimeout(t2);
    //
    //     writePageShade();
    // }, 0);

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        loadJs(j, true, 'afterLoadPageJs');
    }, 0);
}
function afterLoadPageJs () {
    if (typeof window['urlDecode'] == 'undefined') {
        console.log('afterLoadPageJs urlDecode is undefined, so settimtoue retry ');

        setTimeoutFunction('afterLoadPageJs');
        return;
    }
    console.log('afterLoadPageJs urlDecode is defined, so will to do ');

    bInLoadPageJs = false;

    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs');
    // console.log(sPageNow + 'Begin');
    asyn(sPageNow + 'Begin');

    // let sPage = getNowPage();
    // let f = document.getElementById(getNowPage() + sFootTag + sFootLiSuffix);
    // if (!f) {
    //     console.log('afterLoadPageJs f is null, no to do');
    //     return false;
    // }
    //
    // let o = document.getElementsByClassName(sFootTag);
    // if (o.length) {
    //     let sPreg = new RegExp('\\s+' + sActiveFootTag,'gm');
    //     for (let i in o) {
    //         if (!o[i].className) {
    //             continue;
    //         }
    //
    //         o[i].className = o[i].className.toString().replace(sPreg, '');
    //     }
    // }
    // f.className += ' ' + sActiveFootTag;
    //
    // let t1 = setTimeout(function () {
    //     clearTimeout(t1);
    //
    //     changeDomFatherOpacity(true);
    // }, 0);
    //
    // let t2 = setTimeout(function () {
    //     clearTimeout(t2);
    //
    //     repeatedlyPage(getUrlArgs(sUrlAddressPageKey));
    // }, 0);
}

function loadJs (s = '', b = true, c = false) {
    if (!s) {
        return false;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.src = s;
    // if (b) {
    //     o.async = 'async';
    // }
    // o.defer = 'defer';
    o.charset = sCharset;

    if (c) {
        if (o.addEventListener) {
            o.addEventListener('load', function () {
                if (typeof window[c] == 'undefined') {
                    setTimeoutFunction(c);
                    return;
                }

                window[c]();
            }, false);
        } else if (o.attachEvent) {
            o.attachEvent('onreadystatechange', function () {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    window[c]();
                }
            });
        }
    }

    // oHead.appendChild(o);
    // insertAfter(o, document.getElementById(sIndexScriptTagId));
    asyn('asynLoadJs', o);
}
function asynLoadJs (o) {
    // oHead.appendChild(o);
    insertAfter(o, oIndexScriptTag);
}

function setCssPathAndVersion () {
    let sResetCss = '/static_resource/css/public/reset.css';
    let sPublicCss = '/static_resource/css/public/' + sPlatformTag + '/public.css';

    aCssVersion[sResetCss] = 'zzzzzzz';
    aCssVersion[sPublicCss] = 'yyyyyy';

    sResetCssFile = setJsCssSrc('css', sResetCss);
    sPublicCssFile = setJsCssSrc('css', sPublicCss);
}

/**
 *
 * hash 求余
 *
 * @param s  带求余字符串
 * @param i 余数
 * @returns {boolean|number}
 */
function hashFunc(s, i){
    if (!s ||!i) {
        console.log(s);
        console.log(i);
        console.log('hashFunc s or i is null');
        return false;
    }

    //1.定义iHashCode变量
    let h = 0;

    //2.霍纳算法，来计算 h的值
    for (let i = 0; i < s.length; i++) {
        h = 37 * h + s.charCodeAt(i) //获取编码
    }
    h = parseInt(h);

    //3.取余状态
    return h % i;
}

let aHost = [];
let iHostNumber = 0;
function setHosts () {
    let i = 0;
    let o = window.location.host;
    for (i; i < sBaseHostSonNumber; i++) {
        aHost.push(sBaseProtocol + i + '.' + sBaseHostSonPrefix + '.' + o);
    }
    iHostNumber = aHost.length;

    return true;
}

function allocationHost (u = '') {
    if (!u) {
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    return aHost[hashFunc(u, iHostNumber)];
}

function getUserIp () {
    loadJs(sQueryUserIpAddress, false, 'setUserIp');
}
function setUserIp () {
    // console.log(returnCitySN);
    sIp = returnCitySN.cip;
    sCid = returnCitySN.cid;
    sIpCityName = returnCitySN.cname;
}

//获取毫秒时间戳
function getNowTime () {
    return new Date().getTime();
}
//获取时间戳
function getTime () {
    return parseInt(getNowTime() / 1000);
}

/**
 *
 * 设置静态文件地址
 *
 * @param t 文件类型 type string
 * @param s 文件地址 type string
 * @returns {string|boolean}
 */
function setJsCssSrc (t = '', s = '') {
    if (!t ||!s) {
        console.log('hashFunc t or s is null');
        return false;
    }

    let v = getNowTime();
    switch (t) {
        case 'js' :
            v = aJsVersion[s];
            break;
        case 'css' :
            v = aCssVersion[s];
            break;
    }

    // return allocationHost(s) + s + '?v=' + v + jsCssVersionSuffix();
    return allocationHost(s) + s + '?v=' + v + sFileVersionSuffix;
}
let sFileVersionSuffix = '';
function jsCssVersionSuffix () {
    sFileVersionSuffix = debug ? '-' + getNowTime() : '';
}
jsCssVersionSuffix();

function setJsPathAndVersion () {
    sBaseJsFile = setJsCssSrc('js', sBaseJs);
    sIndexJsFullName = setJsCssSrc('js', sIndexJs);
    sFunctionJsFile = setJsCssSrc('js', sFunctionJs);
    sJqueryJsFile = setJsCssSrc('js', sJqueryJs);
    sLogicJsFile = setJsCssSrc('js', sLogicJs);
    sDomJsFile = setJsCssSrc('js', sDomJs);
    sEncodeJsFile = setJsCssSrc('js', sBaseEncodeJs);
    sCnLangFile = setJsCssSrc('js', sCnLang);
    sEnLangFile = setJsCssSrc('js', sEnLang);
    sPlatformDomJsFile = setJsCssSrc('js', sPlatformDomJs);
    sForumJsFile = setJsCssSrc('js', sForumJs);
    sChatJsFile = setJsCssSrc('js', sChatJs);
    sFriendJsFile = setJsCssSrc('js', sFriendJs);
    sSettingJsFile = setJsCssSrc('js', sSettingJs);
    sApiJsFile = setJsCssSrc('js', sApiJs);
}

function checkUseTime () {
    if (getTime() - iBeginTime > iNoticeTimeLimit) {
        iBeginTime = getTime();

        showUseTimeLimitNotice();
    }

    setTimeoutFunction('checkUseTime');
}
function showUseTimeLimitNotice () {
    if (typeof aLang == 'undefined') {
        console.log('showUseTimeLimitNotice aLang is undefined, so settimeout retry ');

        setTimeoutFunction('showUseTimeLimitNotice');
        return;
    }

    alert(aLang['use_time_out_limit']);
}

/**
 *
 * 定时处理函数
 *
 * @param f 函数名 type string
 * @param a 参数1 type string
 * @param b 参数2 type string
 * @returns {boolean}
 */
function setTimeoutFunction (f = '', a = '', b = '') {
    if (!f) {
        console.log(f);
        console.log('setTimeoutFunction f is null');
        return false;
    }

    if (typeof aTimer[f] == 'undefined') {
        console.log(f);
        console.log('setTimeoutFunction aTimer ' + f + ' undefined');
    }

    if (typeof window[f] != 'function') {
        console.log(f);
        console.log('setTimeoutFunction ' + f + ' is not function, so settimeout retry to asyn ');

        let t = setTimeout(function () {
            clearTimeout(t);

            setTimeoutFunction(f, a, b);
        }, 0);
        return;
    }

    aBaseTimer[f] = setTimeout(function () {
        clearTimeout(aBaseTimer[f]);

        if (!a) {
            window[f]();
        } else {
            if (b) {
                window[f](a, b);
            } else {
                window[f](a);
            }
        }
    }, aTimer[f]);

    return true;
}
function asyn (f = '', a = '', b = '') {
    if (!f) {
        console.log(f);
        console.log('asyn f is null');
        return false;
    }

    if (typeof window[f] != 'function') {
        console.log('asyn ' + f + ' is not function, so settimeout retry to asyn ');

        let t = setTimeout(function () {
            clearTimeout(t);

            asyn(f, a, b);
        }, 0);
        return;
    }
    console.log('asyn ' + f + ' is function, so will to do ' + f + ' ');

    let t = setTimeout(function () {
        clearTimeout(t);

        if (b) {
            window[f](a, b);
            return;
        }

        if (a) {
            window[f](a);
            return;
        }

        window[f]();
    }, 0);
}

let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (p = '', f = '') {
    if (!f) {
        console.log('checkRequestJsCssLimit p or f is null');
        return false;
    }

    let t = getNowTime();
    let l = typeof aRequestJsCssLastTime[f] !== 'undefined' ? aRequestJsCssLastTime[f] : 0;
    if (t - l < iRequertTimeout) {
        console.log('checkRequestJsCssLimit ' + f + ' time last ' + iRequertTimeout + ' millisecond, so wait a minutes retry ');
        setTimeoutFunction(f);
        return false;
    }
    aRequestJsCssLastTime[f] = t;

    return true;
}

function queryMasterOrigin () {
    let t = '.';
    let o = window.location.origin;
    let a = o.split(t);
    let l = a.length;
    let s = window.location.protocol;
    o = a[l - 2] + t + a[l - 1];
    o = o.replace(s + '//', '');
    o = s + '//' + o;

    sOrigin = o;
    return o;
}

let bLoadIndexJs = false;
function loadIndexJs () {
    if (bLoadIndexJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadIndexJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sIndexJsFullName, true, 'afterloadIndexJs');
    }, 0);

    setTimeoutFunction('loadIndexJs');
}
function afterloadIndexJs () {
    bLoadIndexJs = true;

    asyn('indexBegin');
}
//


function setHtmlLang () {
    oHtml.lang = sHtmlLang;
}

// function appendChildPreventRedraw (appendChild, FragmentId) {
//     let d = document.getElementById(FragmentId);
//     if (!d) {
//         d = document.createDocumentFragment();
//         d.id = FragmentId;
//     }
//
//     d.appendChild(appendChild);
//     // console.log(d);
//     // appendFather.appendChild(d);
//     // return d;
// }

let bSetMeta = false;
function setMeta () {
    if (bSetMeta) {
        return;
    }
    bSetMeta = true;

    // oHtml.style.display = 'none';

    let a = [
        sContentAndCharset,
        sRobots,
        sAboutIe,
        sClearType,
        sSkypeToolbar,
        sWin8Ie10_1,
        sWin8Ie10_2,
        sWin9_1Ie11,
        sGoogleBrowser,
        s360,
        sUc,
        sFullScreen,
        sAppMode,
        sForbidNight,
        sAdaptScreen,
        sQqImmobilizationOrientation,
        sQqFullScreen,
        sQqAppMode,
        sIosAppBanner,
        sForbidQueryTelNumber,
        sNeglectEmail,
        sAppFullScreenMode,
        sAppleMobileWebBarColor,
        sMobileFullScreen,
        sAuther,
        sKeywords,
        sDescription,
        sApplicationName,
        sCopyright,
    ];

    let o = document.createDocumentFragment();
    let m = '';
    for (let i in a) {
        m = setContent(a[i]);
        if (m) {
            o.appendChild(m);
        }
    }
    oHead.appendChild(o);
}
/**
 *
 * 设置 meta 标签
 *
 * @param n meta name type string
 */
function setContent (n = '') {
    let m = document.createElement('meta');
    switch (n) {
        case sCopyright :
            m.id = sFinalMetaTagId;
            m.name = 'Copyright';
            m.content = sCopyrightContent;
            break;
        case sAuther :
            m.name = 'author';
            m.content = sAutherInfo;
            break;
        case sKeywords :
            m.name = 'keywords';
            m.content = sKeyword;
            break;
        case sDescription :
            m.name = 'description';
            m.content = sDescriptionContent;
            break;
        case sApplicationName :
            m.name = 'application-name';
            m.content = sApplicationNameContent;
            break;
        case sRobots :
            m.name = 'robots';
            m.content = sAllowCurlPage + ',' + sAllowIndexOther;
            break;
        case sContentAndCharset :
            m.httpEquiv = sContentAndCharsetType;
            m.content = sContentAndCharsetContent;
            break;
        case sAboutIe :
            m.httpEquiv = sAboutIeHttpEquiv;
            m.content = sAboutIeContent;
            break;
        case sClearType :
            m.httpEquiv = sClearTypeHttpEquiv;
            m.content = sClearTypeContent;
            break;
        case sSkypeToolbar :
            m.name = sSkypeToolbar;
            m.content = sSkypeToolbarContent;
            break;
        case sWin8Ie10_1 :
            m.name = sWin8Ie10_1;
            m.content = sWin8Ie10_1Content;
            break;
        case sWin8Ie10_2 :
            m.name = sWin8Ie10_2;
            m.content = sWin8Ie10_2Content;
            break;
        case sWin9_1Ie11 :
            m.name = sWin9_1Ie11;
            m.content = sWin9_1Ie11Content;
            break;
        case sGoogleBrowser :
            m.httpEquiv = sGoogleBrowserHttpEquiv;
            m.content = sGoogleBrowserContent;
            break;
        case s360 :
            m.name = s360Name;
            m.content = s360Content;
            break;
        case sUc :
            m.name = sUcName;
            m.content = sUcContent;
            break;
        case sFullScreen :
            m.name = sFullScreenName;
            m.content = sFullScreenContent;
            break;
        case sAppMode :
            m.name = sAppModeName;
            m.content = sAppModeContent;
            break;
        case sForbidNight :
            m.name = sForbidNightName;
            m.content = sForbidNightContent;
            break;
        case sAdaptScreen :
            m.name = sAdaptScreenName;
            m.content = sAdaptScreenContent;
            break;
        case sQqImmobilizationOrientation :
            m.name = sQqImmobilizationOrientationName;
            m.content = sQqImmobilizationOrientationContent;
            break;
        case sQqFullScreen :
            m.name = sQqFullScreenName;
            m.content = sQqFullScreenContent;
            break;
        case sQqAppMode :
            m.name = sQqAppModeName;
            m.content = sQqAppModeContent;
            break;
        case sIosAppBanner :
            m.name = sIosAppBannerName;
            m.content = sIosAppBannerContent;
            break;
        case sForbidQueryTelNumber :
            m.name = sForbidQueryTelNumberName;
            m.content = sForbidQueryTelNumberContent;
            break;
        case sNeglectEmail :
            m.name = sNeglectEmailName;
            m.content = sNeglectEmailContent;
            break;
        case sAppFullScreenMode :
            m.name = sAppFullScreenModeName;
            m.content = sAppFullScreenModeContent;
            break;
        case sAppleMobileWebBarColor :
            m.name = sAppleMobileWebBarColorName;
            m.content = sAppleMobileWebBarColorContent;
            break;
        case sMobileFullScreen :
            m.name = sMobileFullScreenName;
            m.content = sMobileFullScreenContent;
            break;
    }
    return m;
}

let oFatherDom = '';
function fatherDom () {
    // if (oFatherDom) {
    //     return oFatherDom;
    // }
    //
    // oFatherDom = document.getElementById(oDomFatherId);
    // return oFatherDom;
    oFatherDom = oFatherDom ? oFatherDom : document.getElementById(oDomFatherId);
    return oFatherDom;
}

let bAllreadyLoadUserLang = false;
function queryUserLang () {
    if (sUserLangvage) {
        console.log('queryUserLang sUserLangvage is defined, so rerturn sUserLangvage, no get user lang from localstorage ');
        return sUserLangvage;
    }

    if (bAllreadyLoadUserLang) {
        console.log('queryUserLang bAllreadyLoadUserLang is true, so no to load user lang from localstorage ');
        return;
    }
    bAllreadyLoadUserLang = true;

    // queryLocalstorage(sLocalstorageLangTag, 'afterQueryLang');
    asyn('queryLocalstorage', sLocalstorageLangTag, 'afterQueryLang');
}
/**
 *
 *
 *
 * @param l lang
 */
function afterQueryLang (l = '') {
    if (l) {
        sUserLangvage = l;
    } else {
        sUserLangvage = sDefaultLangvage;
        // setLang(sUserLangvage);
        asyn('setLang', sUserLangvage);
    }
    bAllreadyLoadUserLang = false;

    // loadLang(sUserLangvage);
    asyn('loadLang', sUserLangvage);
}
/**
 *
 * set localstorage lang
 *
 * @param l 语言 type string
 * @returns {boolean}
 */
function setLang (l = '') {
    if (!l) {
        console.log('setLang l is null, so no to do');
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(sLocalstorageLangTag, l, false, 'afterSetLang');
    }, 0);
}
/**
 *
 * set localstorage lang 之后操作
 *
 * @param b 结果 type bool
 * @returns {boolean}
 */
function afterSetLang (b = '') {
    if (!b) {
        console.log('afterSetLang b is null');
        return false;
    }

    if (!b) {
        console.log('afterSetLang b false');
        return false;
    }
}

/**
 *
 * @param k localstorage key
 * @param m localstorage message
 * @param t localstorage lefttime
 * @param f localstorage callback function
 * @returns {boolean}
 */
function setLocalstorage (k = '', m = '', t = false, f = '') {
    if (!k || !f || !m) {
        console.log(k);
        console.log(m);
        console.log(f);
        console.log('queryLocalstorage k or f or m is null');
        return false;
    }

    let p = localstoragePage (k);

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length);

    p = localstorageNowPage();

    let q = 1;
    let z = 0;
    // let sss = sOriginLocalstorageSizeKey;
    // let c = queryLocalstorageCache(sss);
    let c = queryLocalstorageCache(sOriginLocalstorageSizeKey);
    c = eval('(' + z + ')');
    c = c ? c : {};
    while (!z || iMaxLocalstorageSize < z) {
        p = z ? parseInt(p) + parseInt(1) : p;

        if (!c || typeof c[p] == 'undefined') {
            z = l;
            c[p] = z;
        } else {
            q = parseInt(c[p]);

            z = parseInt(q) + parseInt(l);
            c[p] = z;
        }
    }

    // localstorageLocalCache(k, p);

    // localstorageLocalCache(sss, c);

    p = storagePage(p);

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        localstoragePostMessage(p, {action: 'set', key: k, message: m, leftTime: t, after: f});
    }, 0);
}

let cookie = {
    set:function (sKey, sVal, iTime) {
        //设置cookie方法
        let iOutTime = parseInt(getNowTime()) + parseInt(iTime); //获取当前时间
        document.cookie = sKey + '=' + sVal + ';expires=' + iOutTime;  //设置cookie
    },

    get:function (sKey) {//获取cookie方法
        /*获取cookie参数*/
        let sCookie = document.cookie.replace(/[ ]/g,'');
        //获取cookie，并且将获得的cookie格式化，去掉空格字符
        let aArrCookie = sCookie.split(';')
        //将获得的cookie以"分号"为标识 将cookie保存到aArrCookie的数组中
        let tips = 'false';  //声明变量tips
        let arr = [];
        for(let i = 0; i < aArrCookie.length; i++){   //使用for循环查找cookie中的tips变量
            arr =aArrCookie[i].split('=');   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if (sKey == arr[0]) {
                //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips = arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            }
        }
        return tips;
    }
}


/**
 *
 * 加载语言包
 *
 * l 语言包 名字 type string
 *
 * @type {number}
 */
let iLastRequestLangTime = 0;
function loadLang (l = '') {
    l = l ? l : sUserLangvage;
    if (!l) {
        console.log('loadLang l is null, so no to load lang js ');
        return false;
    }

    let t = getNowTime();
    if (t - iLastRequestLangTime < iRequertLangJsTimeout) {
        console.log('loadLang l last time limit, so no to load lang js ');
        setTimeoutFunction('loadLang', l);
        return false;
    }
    iLastRequestLangTime = t;

    let y = '';
    switch (l) {
        case 'cn' :
            y = sCnLangFile;
            break;
        case 'en' :
            y = sEnLangFile;
            break;
    }
    if (!y) {
        console.log('loadLang y is null, so no to load lang js ');
        return false;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        loadJs(y, true, 'replaceLangs');
    }, 0);
}

window.addEventListener('message', function(event){
    if (!event.data) {
        return false;
    }

    if (!event.data || !event.data.after) {
        console.log('addEventListener data or data.after is null');
        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^');
    console.log('get form ' + event.origin + ' message, will to do after load localstorage function');
    console.log(event.data);
    console.log('^^^^^^^^^^^^^^^^^^^^^');

    window[event.data.after](event.data.message);
}, false);

/**
 *
 * 处理localstorage 数据
 *
 * @param v value string
 * @param t lefttime 生存时间
 * @returns {*}
 */
function disposeLocalstorageValue (v, t = false) {
    v = typeof v != 'object' ? v : JSON.stringify(v);

    return t ? {'v': v, 't': t * 1000, 'st': getNowTime()} : {'v': v};
}

/**
 *
 * @param k localstorage key string
 * @returns {boolean}
 */
function localstoragePage (k) {
    if (!k) {
        console.log('localstoragePage k is null');
        return false;
    }

    let i = myStorage.get(k);

    if (!i) {
        i = sLocalstorgaeBeginTag;
        // console.log(k);
        // console.log(i);
        localstorageLocalCache (k, i);
    }

    return i;
}

function localstorageNowPage () {
    let i = myStorage.get(sLocalstorgaeNowPageTag);
    return i ? i : sLocalstorgaeBeginTag;
}

/**
 *
 * @param k localstorage key  string
 * @param f localstorage callback  string
 * @returns {boolean}
 */
function queryLocalstorage (k = '', f = '') {
    if (!k || !f) {
        console.log('queryLocalstorage k or f is null');
        return false;
    }

    // console.log('**********************************');
    // console.log(k);
    let p = localstoragePage(k);

    p = storagePage(p);
    if (!p) {
        window[f](false);
        console.log('queryLocalstorage setLocalstorageOrigins p is null');
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        localstoragePostMessage(p, {action: 'get', key: k, after: f});
    }, 0);
}

function localstoragePostMessage (p = '', m = '') {
    if (!m || !p) {
        console.log('localstoragePostMessage m or p is null');
        return false;
    }

    let o = document.getElementById(p);
    if (typeof aAllreadyLoadIframe[p] != 'undefined') {
        o.contentWindow.postMessage(m, p);
        return true;
    }

    if (!o) {
        writeStorageDom(p);
    }

    // let t = setTimeout(function () {
        console.log('localstoragePostMessage o is null, so settimeout retry ');
        // localstoragePostMessage (p, m);
        setTimeoutFunction('localstoragePostMessage', p, m);

        // clearTimeout(t);
    // }, aTimer['localstoragePostMessage']);

    return false;
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        console.log('myStorage localstorage error');
        return false;
    }

    let set = function (k, v, t = false) {
        if (!k) {
            console.log('myStorage set k or v is null');
            return false;
        }

        v = disposeLocalstorageValue (v, t);

        v = JSON.stringify(v);

        let b = localStorage.setItem(k, v);
        return b == undefined ? true : false;
    };

    let get = function (k, t = true) {
        //读取
        let d = localStorage.getItem(k);
        if (!d) {
            return false;
        }
        d = JSON.parse(d);
        if (!d) {
            return false;
        }

        if (typeof d.t !== 'undefined') {
            if (getNowTime() - d.st > d.t) {
                remove(k);
                return false;
            } else {
                if (t) {
                    set(k, d.v, d.t / 1000);
                }
            }
        }

        return d.v;
    };

    let remove = function (k) {
        //读取
        // let oData = localStorage.getItem(k);
        if(!localStorage.getItem(k)){
            return true;
        }

        return localStorage.removeItem(k);
    };

    let clear = function() {
        //清除对象
        localStorage.clear();
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear
    };
})();

/**
 *
 * 是否json 数据格式
 *
 * @param s 待检查字符串
 * @returns {boolean}
 */
function isJson (s = '') {
    if (!s) {
        return false;
    }

    if (typeof s == 'sString') {
        try {
            JSON.parse(s);
            return true;
        } catch(e) {
            // console.log(e);
            return false;
        }
    }
}

/**
 *
 * json 转成 字符串
 *
 * @param s 需要转换的json type json
 * @returns {Array|any}
 */
function jsonConvertFormatForReadNumberKey (s = '') {
    if (!s) {
        console.log('jsonToArray s is null, so return []');
        return [];
    }

    return eval('(' + s + ')');
}

/**
 *
 * @param k local localstorage key
 * @param v local localstorage value
 */
function localstorageLocalCache (k = '', v = '') {
    if (!k) {
        console.log('localstorageLocalCache k or v is null, so no to do');
        return false;
    }

    myStorage.set(k, v);
}
/**
 *
 * @param k local localstorage key
 */
function queryLocalstorageCache (k = '') {
    if (!k) {
        console.log('queryLocalstorageCache k is null, so no to do');
        return false;
    }

    return myStorage.get(k);
}

/**
 * 设置storage 页面 url
 *
 * @param i page 远程storage 子域名 序号 type number
 * @returns {string}
 */
function storagePage (i = 0) {
    let p = sBaseProtocol;

    let o = sOrigin ? sOrigin : queryMasterOrigin();
    o = o.replace(p, '');
    return p + i + '.' + sStorageOriginsSonPrefix + '.' + o + '/' + sStoragePage;
}
/**
 * 先读取本地localstorage，写对应远程storage页面 iframe dom
 */
function writeLocalstorageIframe () {
    let s = queryLocalstorageCache(sOriginLocalstorageSizeKey);

    let a = jsonConvertFormatForReadNumberKey(s);

    for (let i in a) {
        if (a[i] > 0) {
            writeStorageDom (storagePage(i));
        }
    }
}
let oStorageDom = '';
function storageDom () {
    if (oStorageDom) {
        return oStorageDom;
    }

    oStorageDom = document.getElementById(oDomStorageId);
    return oStorageDom;
}
/**
 *
 * 写远程 storage 页面 iframe
 * @param p 远程 storage 页面完整 url type string
 * @returns {boolean}
 */
function writeStorageDom (p = 0) {
    let d = p;
    if (document.getElementById(d)) {
        console.log('writeStorageDom ' + p + ' is allready exist, so retrun true ');
        return true;
    }

    let o = document.createElement('iframe');
    o.src = p;
    o.className = sNoShowIframeCLass;
    o.id = d;

    storageDom().appendChild(o);

    if (o.attachEvent) {
        o.attachEvent('onload', function() {
            aAllreadyLoadIframe[o.id] = true;
        });
    } else {
        o.onload = function() {
            aAllreadyLoadIframe[o.id] = true;
        };
    }

    return true;
}

let os = function() {
    let a = navigator.userAgent;
    isWindowsPhone = /(?:Windows Phone)/.test(a),
        isSymbian = /(?:SymbianOS)/.test(a) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(a),
        isFireFox = /(?:Firefox)/.test(a),
        isChrome = /(?:Chrome|CriOS)/.test(a),
        isTablet = /(?:iPad|PlayBook)/.test(a) || (isAndroid && !/(?:Mobile)/.test(a)) || (isFireFox && /(?:Tablet)/.test(a)),
        isPhone = /(?:iPhone)/.test(a) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;

    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

function checkPlatform () {
    if (os.isAndroid || os.isPhone) {
        return sIsPhone;
    }

    if (os.isTablet) {
        return sIsTablet;
    }

    if (os.isPc) {
        return sIsPc;
    }
}

// 获取每毫米的像素值
function getOneMmsPx (){
    let d = sQueryOneMmPxId;

    // 创建一个1mm宽的元素插入到页面，然后坐等出结果
    let o = document.createElement('div');
    o.id = d;
    o.style.width = '1mm';

    fatherDom().appendChild(o);

    // 原生方法获取浏览器对元素的计算值
    o = document.getElementById(d);
    let w = o.getBoundingClientRect().width;
    o.parentNode.removeChild(o);
    return w;
}

/**
 *
 * 根据每毫米px大小 设置字体大小
 */
function initializeFontSize () {
    let p = checkPlatform();

    // if (p === sIsPhone) {
    //     iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    // if (p === sIsTablet) {
    iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    if (p === sIsPc) {
        iFontSize = iDefaultFontSize;
    }

    oHtml.style.fontSize = iFontSize + 'px';
}

let bJquery = false;
let bLoadLocalJquery = false;
function loadLocalJquery () {
    if (bLoadLocalJquery) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadLocalJquery')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sJqueryJsFile, true, 'afterloadLocalJquery');
    }, 0);

    setTimeoutFunction('loadLocalJquery');
}
function afterloadLocalJquery () {
    bLoadLocalJquery = true;
    bJquery = true;
}

let bLoadOriginJquery = false;
let iLoadOriginJqueryLastTime = 0;
let bAllreadyLoadOriginJquery = false;
function loadOriginJquery () {
    if (bLoadOriginJquery) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadOriginJquery')) {
        return false;
    }
    iLoadOriginJqueryLastTime = getNowTime();

    if (bAllreadyLoadOriginJquery) {
        return true;
    }
    bLoadOriginJquery = true;

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sOriginJquery, true, 'afterloadOriginJquery');
    }, 0);

    setTimeoutFunction('loadOriginJquery');
}
function afterloadOriginJquery () {
    bLoadOriginJquery = true;
    bJquery = true;
}

let bLoadEncodeJs = false;
function loadEncodeJs () {
    if (bLoadEncodeJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadEncodeJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sEncodeJsFile, true, 'afterloadEncodeJs');
    }, 0);

    setTimeoutFunction('loadEncodeJs');
}
function afterloadEncodeJs () {
    bLoadEncodeJs = true;
}

let bLoadFunctionJs1 = false;
function loadFunctionJs () {
    if (bLoadFunctionJs1) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadFunctionJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sFunctionJsFile, true, 'afterloadFunctionJs');
    }, 0);

    setTimeoutFunction('loadFunctionJs');
}
function afterloadFunctionJs () {
    bLoadFunctionJs1 = true;
}

let bLoadDomJs = false;
function loadDomJs () {
    if (bLoadDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadDomJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sDomJsFile, true, 'afterloadDomJs');
    }, 0);

    setTimeoutFunction('loadDomJs');
}
function afterloadDomJs () {
    bLoadDomJs = true;
}

let bLoadPlatformDomJs = false;
function loadPlatformDomJs () {
    if (bLoadPlatformDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadPlatformDomJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sPlatformDomJsFile, true, 'afterloadPlatformDomJs');
    }, 0);

    setTimeoutFunction('loadPlatformDomJs');
}
function afterloadPlatformDomJs () {
    bLoadPlatformDomJs = true;

    asyn('platformBegin');
}

let bLoadLogicJs = false;
function loadLogicJs () {
    if (bLoadLogicJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadLogicJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sLogicJsFile, true, 'afterloadLogicJs');
    }, 0);

    setTimeoutFunction('loadLogicJs');
}
function afterloadLogicJs () {
    bLoadLogicJs = true;

    asyn('logicBegin');
}

let bLoadApiJs = false;
function loadApiJs () {
    if (bLoadApiJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadApiJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadJs(sApiJsFile, true, 'afterloadApiJs');
    }, 0);

    setTimeoutFunction('loadApiJs');
}
function afterloadApiJs () {
    bLoadApiJs = true;
}

function loadBaseJs () {
    // let t7 = setTimeout(function () {
    //     clearTimeout(t7);
    //
    //     loadIndexJs();
    // }, 0);
    asyn('loadIndexJs');

    // let t2 = setTimeout(function () {
    //     clearTimeout(t2);
    //
    //     loadFunctionJs();
    // }, 0);
    asyn('loadFunctionJs');

    // let t3 = setTimeout(function () {
    //     clearTimeout(t3);
    //
    //     loadDomJs();
    // }, 0);
    asyn('loadDomJs');

    // let t4 = setTimeout(function () {
    //     clearTimeout(t4);
    //
    //     loadPlatformDomJs();
    // }, 0);
    asyn('loadPlatformDomJs');

    // let t5 = setTimeout(function () {
    //     clearTimeout(t5);
    //
    //     loadLogicJs();
    // }, 0);
    asyn('loadLogicJs');

    // let t6 = setTimeout(function () {
    //     clearTimeout(t6);
    //
    //     loadApiJs();
    // }, 0);
    asyn('loadApiJs');

    // let t1 = setTimeout(function () {
    //     clearTimeout(t1);
    //
    //     loadEncodeJs();
    // }, 0);
    asyn('loadEncodeJs');

    // console.log('indexBegin 3333333333333');
    // asyn('loadLocalJquery1');
}

/**
 *
 * 修改body状态，是否显示或隐藏
 *
 * @param b 显示或隐藏 type bool true 显示
 */
function changeBodyStatus (b = true) {
    let h = b ? 'visible' : 'hidden';
    oHtml.style.visibility = h;
    oBody.style.visibility = h;
}

let iBeginTime = 0;
let oHtml = false;
let oHead = false;
let oBody = false;
function baseBegin (bOnload = false) {
    console.log('base begin');
    if (bOnload) {
        bFirstLoad = true;

        asyn('showBaseShade');

        console.log('indexBegin 11111111111');
        asyn('sessId');
    }

    console.log('base 111111111111111111');
    asyn('setHtmlLang');
    if (
        (!oHtml || typeof oHtml == 'undefined')
        ||
        (!oHead || typeof oHead == 'undefined')
        ||
        !oBody || typeof oBody == 'undefined'
    ) {
        oHtml = document.getElementsByTagName('html')[0];
        oHead = document.getElementsByTagName('head')[0];
        oBody = document.getElementsByTagName('body')[0];

        setTimeoutFunction('baseBegin', bOnload);
        return;
    }

    console.log('base 2222222222222222');
    if (bOnload) {
        // oHtml.style.visibility = 'hidden';
        // oBody.style.visibility = 'hidden';
        asyn('changeBodyStatus', false);

        asyn('winResize', bOnload);
    }

    console.log('base 3333333333333');
    asyn('getUserIp');

    console.log('base 44444444444444');
    asyn('queryMasterOrigin');

    console.log('base 5555555555555');
    asyn('setHosts');

    console.log('base 666666666666666');
    asyn('initializeFontSize');

    console.log('base 7777777777777');
    asyn('setMeta');

    console.log('base 8888888888888888');
    asyn('fatherDom');

    console.log('base 888888888--------------------111111111111111111111111111111');
    asyn('writePublicShade');

    console.log('base 999999999999999');
    asyn('writePublicDom');

    console.log('base aaaaaaaaaaaaaaaaaaa');
    asyn('writeLocalstorageIframe');

    console.log('base bbbbbbbbbbbbbbbbb');
    asyn('setCssPathAndVersion');

    console.log('base cccccccccccccccccccc');
    asyn('setJsPathAndVersion');

    console.log('base dddddddddddddddddd');
    asyn('loadBaseCss');

    console.log('base eeeeeeeeeeeeeeeee');
    asyn('queryUserLang');

    console.log('base fffffffffffffffff');
    asyn('loadOriginJquery');

    console.log('base gggggggggggggggg');
    iBeginTime = getTime();
    asyn('checkUseTime');

    console.log('base hhhhhhhhhhhhhhhhhhhh');
    asyn('loadBaseJs');
}
function winResize (bOnload = false) {
    let t = setTimeout(function () {
        clearTimeout(t);

        if (bOnload) {
            astrict();
        }
    }, 0);

    asyn('winSize');

    asyn('initializeFontSize');

    if (bOnload){
        asyn('clearBaseShade');
    }
}

function illegality () {
    window.location.href = sAstrictJumpUrl;
}

let bNoticeAstrict = false;
function astrict () {
    if (bNoticeAstrict) {
        return;
    }
    bNoticeAstrict = true;

    let b = bMobile !== '' ? bMobile : isMobile();
    if (!b) {
    // if (!isMobile()) {
        alert('The computer side is not enabled yet, will jump to ' + sAstrictJumpUrl);

        illegality();
        return false;
    }

    return true;
}

/**
 *
 * 浏览器尺寸
 *
 */
function winSize() {
    //获取窗口宽度
    if (window.innerWidth) {
        iWinWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)) {
        iWinWidth = document.body.clientWidth;
    }

    //获取窗口高度
    if (window.innerHeight) {
        iWinHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        iWinHeight = document.body.clientHeight;
    }

    // //通过深入Document内部对body进行检测，获取窗口大小
    // if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    //     iWinHeight = document.documentElement.clientHeight;
    //     iWinWidth = document.documentElement.clientWidth;
    // }
}

window.onload = baseBegin(true);

window.onresize = function () {
    if (bFirstLoad) {
        console.log('window load but use resize, no use resize function');
        return false;
    }
    console.log('window resize, will do resize function');

    asyn('showBaseShade');

    if (aBaseTimer['winResize']) {
        clearTimeout(aBaseTimer['winResize']);
    }

    aBaseTimer['winResize'] = setTimeout(function () {
        winResize();
    }, aTimer['winResize']);
}