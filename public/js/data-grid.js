//初始化DataGrid值
function InitGrid(setting) {
    var grid = setting.grid;
    var toolbar = InitToolbar(setting);
    grid.datagrid({
        title: setting.title == null ? "数据列表" : setting.title,
        iconCls: setting.iconCls == null ? "icon-list" : setting.iconCls,   //图标设置
        url: setting.url,
        method: setting.method,
        width: setting.width,
        idField: setting.idField,   //主键列设置
        columns: setting.columns,
        sortName: setting.sortName, //定义哪些列可以进行排序。
        striped: true,  //是否隔行变色
        rownumbers: setting.rownumbers,   //是否显示序号
        singleSelect: setting.singleSelect, //是否是单行选择模式
        fitColumns: true,
        pagination: true,   //是否显示分页
        pageSize: 20,
        pageList: [10, 15, 20, 25, 30],
        queryParams: setting.queryParams,
        toolbar: toolbar,
        lastIndex: 0,

        //注册事件

    });
    //初始化分页导航工具栏
    InitPagerToolbar(setting);
}

//初始化工具栏
function InitToolbar(setting) {
    var toolbar;
    //如果工具栏不为空，则自动添加刷新按钮
    if (setting.toolbar != null && setting.toolbar.length > 0) {
        for (var i = 0; i < setting.toolbar.length; i++) {
            toolbar.push(setting.toolbar[i]);
            toolbar.push("-");
        }
        var reloadButton = {
            id: 'btnReload',
            text: '刷新',
            iconCls: 'icon-reload',
            handler: function () {
                setting.grid.datagrid("reload");
            }
        };
        toolbar.push(reloadButton);
    }
    return toolbar;
}

//初始化分页导航工具栏
function InitPagerToolbar(setting) {
    if (setting.pager_toolbar != null && setting.pager_toolbar.length > 0) {
        var pager = setting.grid.datagrid('getPager');
        pager.pagination({
            buttons: setting.pager_toolbar
        });
    }
}