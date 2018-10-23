var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 750) {
    deviceWidth = 750;
}
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';


//当页面大小发生变化时页面重新加载
// window.onresize = function(){
//     window.location = window.location.href;
// }