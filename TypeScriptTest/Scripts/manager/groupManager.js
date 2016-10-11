var groupManager = (function () {
    function groupManager() {
        this.groupCollection = new Array();
    }
    groupManager.prototype.loadGroups = function () {
        var _this = this;
        $.getJSON("/Home/GetGroup")
            .then(function (data) { _this.groupCollection = data; });
    };
    groupManager.prototype.displayGroup = function () {
    };
    return groupManager;
}());
//# sourceMappingURL=groupManager.js.map