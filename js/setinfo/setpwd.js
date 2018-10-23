window.onload = function () {

    //关闭错误提示
    $('btn').onclick = function () {
        $('mask1').style.display = 'none';
    };
    //点击登陆后开始验证账号密码
    $('submit').onclick = function () {
        var oldpwd = $('oldpwd').value;
        var newpwd = $('newpwd').value;
        //第一次输入密码验证
        if (!(/^[a-zA-Z\d_]{6}$/.test(oldpwd))) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '密码不正确';
        };
        //第二次输入密码验证
        if (!(/^[a-zA-Z\d_]{6}$/.test(newpwd))) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '密码不正确';
        };
        //两次输入密码一致性验证
        if (oldpwd != newpwd) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '两次密码输入不一致';
        };


    };
};
function $(id) {
    return typeof id === "string" ? document.getElementById(id):null;
}