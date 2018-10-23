window.onload = function () {

    //关闭错误提示
    $('btn').onclick = function () {
        $('mask1').style.display = 'none';
    };
    //点击登陆后开始验证账号
    $('submit').onclick = function () {
        //微信验证
        var wx = $('wx').value;
        if(!(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(wx))){
            $('tips').innerText = '微信号码不正确';
            $('mask1').style.display = 'block';
        };
    };
};
function $(id) {
    return typeof id === "string" ? document.getElementById(id):null;
}