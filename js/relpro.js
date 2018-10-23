
window.onload = function () {
    //自定义分组弹窗
    groupb();
    //全景图库弹窗
    sckT();
    //上传图片加载过程
    loading();
    //禁止再次提交
    var submit = document.getElementsByClassName('submit')[1];
    submit.onclick = function () {
        this.className = 'active';
    };
    $(function () {
        var objUrl;
        var img_html;
        $("#myFile").change(function () {
            var img_div = $(".img_div");
            var filepath = $("input[name='myFile']").val();
            for (var i = 0; i < 4; i++) {//this.files.length 上传图片数量
                objUrl = getObjectURL(this.files[i]);
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                    // $(".shade").fadeIn(500);
                    // $(".text_span").text("图片限于bmp,png,gif,jpeg,jpg格式");
                    alert("图片格式不正确");
                    this.value = "";
                    $(".img_div").html("");
                    return false;
                } else {
                    img_html = "<li class='isImg'><img src='" + objUrl + "'' style='height: 1.71rem; width: 3.43rem;' /><button class='removeBtn' onclick='javascript:removeImg(this)'>×</button></li>";
                    img_div.append(img_html);
                }
            }
            var file_size = 0;
            var all_size = 0;
            for (j = 0; j < 4; j++) {
                file_size = this.files[j].size;
                all_size = all_size + this.files[j].size;
                var size = all_size / 1048576;
                if (size > 400) {
                    $(".shade").fadeIn(400);
                    $(".text_span").text("上传的图片大小不能超过400M！");
                    this.value = "";
                    $(".img_div").html("");
                    return false;
                }
            }
            return true;
        });

        function getObjectURL(file) {
            var url = null;
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            // console.log(url);
            return url;
        }
    });


};
function removeImg(r) {
    $(r).parent().remove();
};


//创建分组自定义弹窗
var group = document.getElementsByClassName('group')[0];
var mask1 = document.getElementsByClassName('mask1')[0];
var close = document.getElementsByClassName('close')[0];
var btn = document.getElementsByClassName('btn')[0];

function groupb() {
    group.onchange = function () {
        if (this.options[this.options.selectedIndex].value === '自定义') {
            mask1.style.display = 'block';
        }
    };
    close.onclick = function () {
        mask1.style.display = 'none';
    }
}


//出租出售选项卡切换
var radiol = document.getElementById('radiol');
var radios = document.getElementById('radios');
var chuz = document.getElementsByClassName('chuz')[0];
var fuk = document.getElementsByClassName('fuk')[0];
var mode = document.getElementsByClassName('mode')[0];

radiol.onclick = function () {
    mode.style.display = 'none';
    fuk.style.display = 'block';
    chuz.style.display = 'block';
};
radios.onclick = function () {
    chuz.style.display = 'none';
    fuk.style.display = 'none';
    mode.style.display = 'block';
};
//素材库弹窗
function sckT() {
    var choiceqj = document.getElementById('choiceqj');
    var mask2 = document.getElementById('mask2');
    var confirm = document.getElementById('confirm');
    var checkboxs = document.getElementsByClassName('checkbox');

    choiceqj.onclick = function () {
        mask2.style.display = 'block';
    };
    confirm.onclick = function () {
        mask2.style.display = 'none';
        for (var i = 0; i < checkboxs.length; i++){
            if (checkboxs[i].checked){
                //获取到要加入节点的区域
                var img_div = document.getElementsByClassName('img_div')[0];
                //开始创建节点
                var li = document.createElement('li');
                var img = document.createElement('img');
                var btn = document.createElement('button');
                //获取到素材库里面图片的路径
                var img_src = document.getElementById('img1').src;
                //将素材库的图片路径赋值到创建节点的img标签里面
                img.src = img_src;
                //将li添加到ul
                var ul_lis = img_div.appendChild(li);
                console.log(li.length);
                //将img添加到li里面
                ul_lis.appendChild(img);
                var img_btn = ul_lis.appendChild(btn);
                img_btn.innerHTML = '×';
            }


        }

    };
};

//上传图片加载过程
function loading() {
    var mask3 = document.getElementsByClassName('mask3')[0];
    var bgc = document.getElementsByClassName('bgc')[0];
    var myFile = document.getElementById('myFile');

    myFile.onclick = function () {
        mask3.style.display = 'block';
    }
    bgc.onclick = function () {
        mask3.style.display = 'none';
    }

}

var listhand = document.getElementsByClassName('listhand')[0];
var mask2 = document.getElementById('mask2');

listhand.onclick = function(){
	mask2.style.display = 'none';
}
