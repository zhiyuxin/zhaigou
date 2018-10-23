window.onload = function () {
    $('submit').onclick = function () {
        //获取需要的标签
        var tel = document.getElementById('tel').value;
        var code = document.getElementById('code').value;
        var pwd = document.getElementById('pwd').value;
        var confirmpwd = document.getElementById('confirmpwd').value;

        //手机号码验证
        if (Trim(tel) == '') {
            $('mask1').style.display = 'block';
            $('tips').innerText = '手机号码不能为空';
        } else if (!(/^1[345789]\d{9}$/.test(tel))) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '手机号码不正确';
            return false;
        };
        //验证码验证
        if (Trim(code) == '') {
            $('mask1').style.display = 'block';
            $('tips').innerText = '请输入短信验证码';
            return false;
        };
        //第一次输入密码验证
        if (!(/^[a-zA-Z\d_]{6,16}$/.test(pwd))) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '请输入6位到16位密码';
            return false;
        };
        //第二次输入密码验证
        if (!(/^[a-zA-Z\d_]{6,16}$/.test(confirmpwd))) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '请输入6位到16位确认密码';
            return false;
        };
        //两次输入密码一致性验证
        if (pwd != confirmpwd) {
            $('mask1').style.display = 'block';
            $('tips').innerText = '两次密码输入不一致';
            return false;
        };
        ajax({
            type:'post',
            url:routes.seller.fogetpassStore,
            dataType:"json",
            data:{"mobile":tel,"code":code,'password':pwd,confirmpwd:confirmpwd,_token:routes.seller._token},
            success:function(response){
                if(response.code == 200){
                    $('mask1').style.display = 'block';
                    $('tips').innerText = '密码修改成功!自动重新跳转登陆页面';
                    settime(function () {
                        window.location.href=routes.seller.login;
                    },2000);
                }else{
                    $('mask1').style.display = 'block';
                    $('tips').innerText = response.message;
                }
            },
        });
    };

    var tel = document.getElementById('tel');
    var code = document.getElementById('code');
    var pwd = document.getElementById('pwd');
    var confirmpwd = document.getElementById('confirmpwd');
    var btn = document.getElementById('btn');
    var mask1 = document.getElementById('mask1');
    //当输入框获得焦点
    tel.onfocus = function () {
        tel.value = "";//清除已输入的文字
    };
    code.onfocus = function () {
        code.value = "";//清除已输入的文字
    };
    pwd.onfocus = function () {
        pwd.value = "";//清除已输入的文字
    };
    confirmpwd.onfocus = function () {
        confirmpwd.value = "";//清除已输入的文字
    };
    //关闭错误提示
    btn.onclick = function () {
        mask1.style.display = 'none';
    };
};
//倒计时
var time = 60;

function settime(val) {
    if(Trim($('tel').value) ==''){
        $('mask1').style.display = 'block';
        $('tips').innerText = '请输入手机号';
        return false;
    }
    if (time == 0) {
        val.removeAttribute("disabled");
        val.value = "获取验证码";
        time = 60;
        return false;
    } else {
        if (val.value == '获取验证码') {
            ajax({
                type: 'post',
                url: routes.seller.smsSend,
                dataType: "json",
                data: {"mobile": $('tel').value, "action": 1, '_token': routes.seller._token},
                success: function (response) {
                    if (response.code == 200) {
                        $('mask1').style.display = 'block';
                        $('tips').innerText = '短信验证码已发送!请注意查收';
                        time = 60;
                    } else {
                        $('mask1').style.display = 'block';
                        $('tips').innerText = response.message;
                        time = 0;
                    }
                },
            });
        }
        if (time <= 60) {
            val.setAttribute("disabled", true);
            val.value = '剩余' + time + "s";
            time--;
            setTimeout(function () {
                settime(val);
            }, 1000);
        }
    }
}
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}