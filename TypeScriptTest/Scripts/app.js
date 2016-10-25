/// <reference path="typings/jquery/jquery.d.ts" />
define(["require", "exports", "./manager/userManager", "./manager/groupManager"], function (require, exports, UserManager, GroupManager) {
    "use strict";
    window.onload = function () {
        var userMgr = new UserManager.userManager();
        var groupMgr = new GroupManager.groupManager();
        $('#loadBtn').click(function () { userMgr.load(); });
        $("#displayBtn").click(function () { userMgr.displayUsers(); });
        $("#addUser").click(function () { userMgr.addUser(); });
        $('#loadGrBtn').click(function () { groupMgr.loadGroups(); });
        $("#displayGrBtn").click(function () { groupMgr.displayGroup(); });
    };
});
//# sourceMappingURL=app.js.map