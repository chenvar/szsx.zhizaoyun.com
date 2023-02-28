// 导航栏
$(function () {
    var qcloud = {};
    $('[dropDown]').hover(function () {
        var nav = $(this).attr('dropDown');
        clearTimeout(qcloud[nav + 'navTime']);
        qcloud[nav + 'navTime'] = setTimeout(function () {
            $('[dropDown]').each(function () {
                $(this)[nav == $(this).attr('dropDown') ? 'addClass' : 'removeClass']('nav-up-selected');
            });
            $('#' + nav).stop(true, true).slideDown(200);
        }, 150);
    }, function () {
        var nav = $(this).attr('dropDown');
        clearTimeout(qcloud[nav + 'navTime']);
        qcloud[nav + 'navTime'] = setTimeout(function () {
            $('[dropDown]').removeClass('nav-up-selected');
            $('#' + nav).stop(true, true).slideUp(10);
        }, 150);
    });
});