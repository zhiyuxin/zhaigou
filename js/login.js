window.onload = function () {

    //关闭错误提示
    var btn = document.getElementById('btn');
    var mask1 = document.getElementById('mask1');
    var tips = document.getElementById('tips');
    btn.onclick = function () {
        mask1.style.display = 'none';
    };
    //点击登陆后开始验证账号密码
    var submit = document.getElementById('submit');
    var tel = document.getElementById('tel');
    var pwd = document.getElementById('pwd');
    var mask1 = document.getElementById('mask1');
    submit.onclick = function () {
        var tel = document.getElementById('tel').value;
        //手机号码验证
        if (Trim(tel) == '' || Trim(tel) == null) {
            mask1.style.display = 'block';
            tips.innerText = '手机号码不能为空';
            return false;
        } else if (!(/^1[345789]\d{9}$/.test(tel))) {
            mask1.style.display = 'block';
            tips.innerText = '手机号码不正确';
            return false;
        };
        var pwd = document.getElementById('pwd').value;
        if (!(/^[a-zA-Z\d_]{6,16}$/.test(pwd))){
            mask1.style.display = 'block';
            tips.innerText = '请输入正确的6到16位密码';
        }else {
            mask1.style.display = 'none';
            tips.innerText = '';
        };
        ajax({
            type:'post',
            url:routes.seller.loginStore,
            dataType:"json",
            data:{"mobile":tel,'password':pwd,'_token':routes.seller._token},
            success:function(response){
                if(response.code == 200){
                    mask1.style.display = 'block';
                    tips.innerText = '恭喜注册成功';
                    return false;
                    window.location.href=routes.seller.login;
                }else{
                    mask1.style.display = 'block';
                    tips.innerText = response.message;
                }
            },
        });
    };
    //当输入框获得焦点
    pwd.onfocus = function () {
        pwd.value = "";//清除已输入的文字
    };
}