window.onload = function () {

    
    //点击登陆后开始验证账号密码
    $('submit').onclick = function () {
        //名称字数验证
        var namelen = $('name').value;
        var num = 10;
        console.log(namelen.length);
        if (namelen.length >= num) {
            $('tips').innerText = '名称字数超限';
            $('mask1').style.display = 'block';
        };
    };
    //关闭错误提示
    $('btn').onclick = function () {
        $('mask1').style.display = 'none';
    };
};
function $(id) {
    return typeof id === "string" ? document.getElementById(id):null;
}