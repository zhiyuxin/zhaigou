window.onload = function () {
    $(function () {

        $('.slide .icon li').not('.up,.down').mouseenter(function () {
            $('.slide .info ').addClass('hover');
            $('.slide .info li').hide();
            $('.slide .info li.' + $(this).attr('class')).show();//.slide .info li.qq
        });
        $('.slide').mouseleave(function () {
            $('.slide .info').removeClass('hover');
        });
    });
    var radioli = document.getElementById('radio');
    var radio = radioli.getElementsByTagName('li');

    var shopownerdom = document.getElementById('shopowner');
    var shopowner = shopownerdom.getElementsByClassName('dom');

    for (var i = 0; i < radio.length; i++) {
        var li = radio[i];
        li.index = i;
        li.onmouseover = function () {
            for (var j = 0; j < radio.length; j++) {
                radio[j].className = "";
                shopowner[j].style.display = "none";
            }
            this.className = "active";
            shopowner[this.index].style.display = "block";
        };
    }
}