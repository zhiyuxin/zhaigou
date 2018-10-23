window.onload = function () {
    var del = document.getElementById('del');
    var dellist = document.getElementById('dellist');
    var mask1 = document.getElementById('mask1');
    var close = document.getElementById('close');
    var btn = document.getElementById('btn');


    //弹出层的显示和隐藏
    del.onclick = function () {
        mask1.style.display = 'block';
    };
    close.onclick = function(){
        mask1.style.display = 'none';
    };
    btn.onclick = function () {
        mask1.style.display = 'none';
        dellist.remove();
    };
};