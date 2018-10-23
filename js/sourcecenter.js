window.onload = function () {
    //获取标签
    var litop = document.getElementById('top');
    var top = litop.getElementsByTagName("em");
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


    //控制视频的播放
    var video1 = document.getElementById("video1");
    this.controls = true; //控制条
    var current = true;
    video1.addEventListener("click", function () {
        if (current) {
            video1.play();
            current = false;  //下次点击的状态
        } else {
            video1.pause();
            current = true;
        }
    });
    var video2 = document.getElementById("video2");
    this.controls = true; //控制条
    var current = true;
    video2.addEventListener("click", function () {
        if (current) {
            video2.play();
            current = false;  //下次点击的状态
        } else {
            video2.pause();
            current = true;
        }
    });
    var video3 = document.getElementById("video3");
    this.controls = true; //控制条
    var current = true;
    video3.addEventListener("click", function () {
        if (current) {
            video3.play();
            current = false;  //下次点击的状态
        } else {
            video3.pause();
            current = true;
        }
    });
    var video4 = document.getElementById("video4");
    this.controls = true; //控制条
    var current = true;
    video4.addEventListener("click", function () {
        if (current) {
            video4.play();
            current = false;  //下次点击的状态
        } else {
            video4.pause();
            current = true;
        }
    });

    //控制声音的播放
    var audioplay1 = document.getElementById('audioplay1');
    var audio1 = document.getElementById('audio1');
    var audioplay2 = document.getElementById('audioplay2');
    var audio2 = document.getElementById('audio2');
    var audioplay3 = document.getElementById('audioplay3');
    var audio3 = document.getElementById('audio3');
    var audioplay4 = document.getElementById('audioplay4');
    var audio4 = document.getElementById('audio4');

    // var img1 = document.getElementById('img1');



    audioplay1.onclick = function () {
        audio1.play();
        //播放完毕后图标变色
        if(audio1){
            audio1.loop = false;
            audio1.addEventListener('ended', function () {
                $('#img1').attr("src",'img/sourcecenter/audioing.png');
            }, false);
        }
    };
    audioplay2.onclick = function () {
        audio2.play();
        //播放完毕后图标变色
        if(audio2){
            audio2.loop = false;
            audio2.addEventListener('ended', function () {
                $('#img2').attr("src",'img/sourcecenter/audioing.png');
            }, false);
        }
    };
    audioplay3.onclick = function () {
        audio3.play();
        //播放完毕后图标变色
        if(audio3){
            audio3.loop = false;
            audio3.addEventListener('ended', function () {
                $('#img3').attr("src",'img/sourcecenter/audioing.png');
            }, false);
        }
    };
    audioplay4.onclick = function () {
        audio4.play();
        //播放完毕后图标变色
        if(audio4){
            audio4.loop = false;
            audio4.addEventListener('ended', function () {
                $('#img4').attr("src",'img/sourcecenter/audioing.png');
            }, false);
        }
    };
    //视频单选或全选
    var $vselect = $(".vselect"); //全选按钮
    var $vsele = $(".vsele"); //单选按钮
    $vselect.click(function() {
        var that = this;
        $vsele.each(function() { //所有的单选按钮跟随选中的多选按钮变化
            this.checked = that.checked;
        })
        $vselect.each(function(){  //所有的多选按钮跟随选中的多选按钮变化
            this.checked=that.checked;
        })
    })
    $vsele.change(function() {
        let count = 0; //单选 按钮 个数
        $vsele.each(function() {
            if(this.checked) {
                count ++;
            }
        })
        if(count == $vsele.length) {   //当count等于单选按钮的个数时 说明单选按钮全部选中了，此时多选按钮也该被选中
            $vselect.each(function() {
                this.checked = true;
            })
        } else {
            $vselect.each(function() {
                this.checked = false;
            })
        }
    });
    //图片单选或全选
    var $iselect = $(".iselect"); //全选按钮
    var $isele = $(".isele"); //单选按钮
    $iselect.click(function() {
        var that = this;
        $isele.each(function() { //所有的单选按钮跟随选中的多选按钮变化
            this.checked = that.checked;
        })
        $iselect.each(function(){  //所有的多选按钮跟随选中的多选按钮变化
            this.checked=that.checked;
        })
    })
    $isele.change(function() {
        let count = 0; //单选 按钮 个数
        $isele.each(function() {
            if(this.checked) {
                count ++;
            }
        })
        if(count == $isele.length) {   //当count等于单选按钮的个数时 说明单选按钮全部选中了，此时多选按钮也该被选中
            $iselect.each(function() {
                this.checked = true;
            })
        } else {
            $iselect.each(function() {
                this.checked = false;
            })
        }
    });
    //语音单选或全选
    var $aselect = $(".aselect"); //全选按钮
    var $asele = $(".asele"); //单选按钮
    $aselect.click(function() {
        var that = this;
        $asele.each(function() { //所有的单选按钮跟随选中的多选按钮变化
            this.checked = that.checked;
        })
        $aselect.each(function(){  //所有的多选按钮跟随选中的多选按钮变化
            this.checked=that.checked;
        })
    })
    $asele.change(function() {
        let count = 0; //单选 按钮 个数
        $asele.each(function() {
            if(this.checked) {
                count ++;
            }
        })
        if(count == $asele.length) {   //当count等于单选按钮的个数时 说明单选按钮全部选中了，此时多选按钮也该被选中
            $aselect.each(function() {
                this.checked = true;
            })
        } else {
            $aselect.each(function() {
                this.checked = false;
            })
        }
    });
    //全景单选或全选
    var $qselect = $(".qselect"); //全选按钮
    var $qsele = $(".qsele"); //单选按钮
    $qselect.click(function() {
        var that = this;
        $qsele.each(function() { //所有的单选按钮跟随选中的多选按钮变化
            this.checked = that.checked;
        })
        $qselect.each(function(){  //所有的多选按钮跟随选中的多选按钮变化
            this.checked=that.checked;
        })
    })
    $qsele.change(function() {
        let count = 0; //单选 按钮 个数
        $qsele.each(function() {
            if(this.checked) {
                count ++;
            }
        })
        if(count == $qsele.length) {   //当count等于单选按钮的个数时 说明单选按钮全部选中了，此时多选按钮也该被选中
            $qselect.each(function() {
                this.checked = true;
            })
        } else {
            $qselect.each(function() {
                this.checked = false;
            })
        }
    });
}