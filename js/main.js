var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 750) {
    deviceWidth = 750;
}
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';


//��ҳ���С�����仯ʱҳ�����¼���
// window.onresize = function(){
//     window.location = window.location.href;
// }