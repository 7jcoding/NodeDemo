$(function () {
    //读取当前时间
    GetCurrentTime();
    //这里实现对时间动态的变化
    var setTimeInterval = setInterval(GetCurrentTime, 1000);
    //绑定tabs的右键菜单
    $("#tabs").tabs({
        onContextMenu: function (e, title) {
            e.preventDefault();
            $('#tabsMenu').menu('show', {
                left: e.pageX,
                top: e.pageY
            }).data("tabTitle", title);
        }
    });
    //关闭Tabs项功能初始化
    $("#tabsMenu").menu({
        onClick: function (item) {
            CloseTab(this, item.name);
        }
    });
});

//根据点击的菜单项，在右边center区域新增相应的tab项
function AddTab(title, href) {
    var tab = $("#tabs");
    if (tab.tabs('exists', title)) {
        tab.tabs('select', title);
    } else {
        var content;
        if (href) {
            content = '<iframe scrolling="yes" frameborder="0"  src="' + href + '" style="width:100%;height:100%;"></iframe>';
        } else {
            content = '路径参数为空！';
        }
        tab.tabs('add', {
            title: title,
            closable: true,
            iconCls: 'icon-list',
            content: content
        });
    }
}

//关闭Tabs项功能的实现
function CloseTab(menu, type) {
    var curTabTitle = $(menu).data("tabTitle");
    var tabs = $("#tabs");

    if (type === "close") {
        tabs.tabs("close", curTabTitle);
        return;
    }

    var allTabs = tabs.tabs("tabs");
    var closeTabsTitle = [];

    $.each(allTabs, function () {
        var opt = $(this).panel("options");
        if (opt.closable && opt.title != curTabTitle && type === "other") {
            closeTabsTitle.push(opt.title);
        } else if (opt.closable && type === "all") {
            closeTabsTitle.push(opt.title);
        }
    });

    for (var i = 0; i < closeTabsTitle.length; i++) {
        tabs.tabs("close", closeTabsTitle[i]);
    }
}

//读取动态变化的时间
function GetCurrentTime() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var time = new Date().toLocaleTimeString({ hour12: false });
    var addDate = year + "年" + month + "月" + day + "日 " + time;
    $("#date").text(addDate);
}