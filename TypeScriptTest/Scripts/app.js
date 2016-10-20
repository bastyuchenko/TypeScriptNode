/// <reference path="typings/jquery/jquery.d.ts" />
window.onload = function () {
    var userMgr = new userManager();
    var groupMgr = new groupManager();
    $('#loadBtn').click(function () { userMgr.load(); });
    $("#displayBtn").click(function () { userMgr.displayUsers(); });
    $("#addUser").click(function () { userMgr.addUser(); });
    $('#loadGrBtn').click(function () { groupMgr.loadGroups(); });
    $("#displayGrBtn").click(function () { groupMgr.displayGroup(); });
};
//# sourceMappingURL=app.js.map