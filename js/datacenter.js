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
    }
}