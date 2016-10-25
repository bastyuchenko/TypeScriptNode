/// <reference path="typings/jquery/jquery.d.ts" />
"use strict";
var UserManager = require("./manager/userManager");
window.onload = function () {
    var userMgr = new UserManager.userManager();
    var groupMgr = new GroupNS.groupManager();
    $('#loadBtn').click(function () { userMgr.load(); });
    $("#displayBtn").click(function () { userMgr.displayUsers(); });
    $("#addUser").click(function () { userMgr.addUser(); });
    $('#loadGrBtn').click(function () { groupMgr.loadGroups(); });
    $("#displayGrBtn").click(function () { groupMgr.displayGroup(); });
};
//# sourceMappingURL=app.js.map