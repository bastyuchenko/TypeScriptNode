/// <reference path="typings/jquery/jquery.d.ts" />

import UserManager = require("./manager/userManager");

window.onload = () => {
    let userMgr: UserManager.userManager = new UserManager.userManager();
    let groupMgr: GroupNS.groupManager = new GroupNS.groupManager();

    $('#loadBtn').click(() => { userMgr.load(); });
    $("#displayBtn").click(() => { userMgr.displayUsers(); });
    $("#addUser").click(() => { userMgr.addUser(); });

    $('#loadGrBtn').click(() => { groupMgr.loadGroups(); });
    $("#displayGrBtn").click(() => { groupMgr.displayGroup(); });
}