window.onload = function () {

    //关闭错误提示
    $('btn').onclick = function () {
        $('mask1').style.display = 'none';
    };
    //点击登陆后开始验证账号密码
    $('submit').onclick = function () {
        //电话号码验证
        var tel = $('tel').value;
        if(!(/^1[34578]\d{9}$/.test(tel))){
            $('tips').innerText = '电话号码不正确';
            $('mask1').style.display = 'block';
        };
    };
};
function $(id) {
    return typeof id === "string" ? document.getElementById(id):null;
}