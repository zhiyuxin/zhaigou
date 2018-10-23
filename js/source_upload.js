window.onload = function () {
//获取标签
    var litop = document.getElementById('top');
    var top = litop.getElementsByTagName("a");
    var centerdom = document.getElementById('center');
    var center = centerdom.getElementsByClassName("dom");
    //开始监听
    for (var i = 0; i < top.length; i++) {
        var li = top[i];
        li.index = i;
        li.onclick = function () {
            for (var j = 0; j < top.length; j++) {
                top[j].className = "";
                center[j].style.display = "none";
            }
            this.className = "activeem";
            center[this.index].style.display = "block";
        };
    };
    //视频上传
    $(function () {
        var objUrl;
        var video_html;
        $("#video_file").change(function () {
            var video_div = $(".video_div");
            var filepath = $("input[name='video_file']").val();
            for (var i = 0; i < this.files.length; i++) {//this.files.length 上传文件数量
                objUrl = getObjectURL(this.files[i]);
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".OGG" && ext != ".3GP" && ext != ".MP4" && ext != ".SWF" && ext != ".WMV") {
                    // $(".shade").fadeIn(500);
                    // $(".text_span").text("图片限于bmp,png,gif,jpeg,jpg格式");
                    alert("视频格式不正确");
                    this.value = "";
                    $(".video_div").html("");
                    return false;
                } else {
                    video_html = "<li class='isvideo'><video src='" + objUrl + "'' style='height: 4rem; width: 7.2rem;' controls='controls'/><button class='removeBtn' onclick='javascript:removeImg(this)'>×</button></li>";
                    video_div.append(video_html);
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

    //图片上传
    $(function () {
        var objUrl;
        var img_html;
        $("#img_file").change(function () {
            var img_div = $(".img_div");
            var filepath = $("input[name='img_file']").val();
            for (var i = 0; i < this.files.length; i++) {//this.files.length 上传文件数量
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
                    img_html = "<li class='isimg'><img src='" + objUrl + "'' style='height: 1.71rem; width: 3.43rem;' /><button class='removeBtn' onclick='javascript:removeImg(this)'>×</button></li>";
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

    //语音上传
    $(function () {
        var objUrl;
        var audio_html;
        $("#audio_file").change(function () {
            var audio_div = $(".audio_div");
            var filepath = $("input[name='audio_file']").val();
            for (var i = 0; i < this.files.length; i++) {//this.files.length 上传文件数量
                objUrl = getObjectURL(this.files[i]);
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".OGG" && ext != ".MP3") {
                    // $(".shade").fadeIn(500);
                    // $(".text_span").text("图片限于bmp,png,gif,jpeg,jpg格式");
                    alert("音频格式不正确");
                    this.value = "";
                    $(".audio_div").html("");
                    return false;
                } else {
                    audio_html = "<li class='isaudio'><audio src='" + objUrl + "'' style='width: 3.43rem;' controls='controls' /><button class='removeBtn' onclick='javascript:removeImg(this)'>×</button></li>";
                    audio_div.append(audio_html);
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

    //全景图片上传
    $(function () {
        var objUrl;
        var panimg_html;
        $("#panimg_file").change(function () {
            var panimg_div = $(".panimg_div");
            var filepath = $("input[name='panimg_file']").val();
            for (var i = 0; i < this.files.length; i++) {//this.files.length 上传文件数量
                objUrl = getObjectURL(this.files[i]);
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
                    // $(".shade").fadeIn(500);
                    // $(".text_span").text("图片限于bmp,png,gif,jpeg,jpg格式");
                    alert("图片格式不正确");
                    this.value = "";
                    $(".panimg_div").html("");
                    return false;
                } else {
                    panimg_html = "<li class='ispanimg'><img src='" + objUrl + "'' style='height: 1.71rem; width: 3.43rem;' /><button class='removeBtn' onclick='javascript:removeImg(this)'>×</button></li>";
                    panimg_div.append(panimg_html);
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