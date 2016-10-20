﻿/// <reference path="typings/jquery/jquery.d.ts" />

window.onload = () => {
    let userMgr: userManager = new userManager();
    let groupMgr: groupManager = new groupManager();

    $('#loadBtn').click(() => { userMgr.load(); });
    $("#displayBtn").click(() => { userMgr.displayUsers(); });
    $("#addUser").click(() => { userMgr.addUser(); });

    $('#loadGrBtn').click(() => { groupMgr.loadGroups(); });
    $("#displayGrBtn").click(() => { groupMgr.displayGroup(); });
}