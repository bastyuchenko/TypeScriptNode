/// <reference path="typings/jquery/jquery.d.ts" />

window.onload = () => {
    import { userManager } from "./manager/userManager";
    let userMgr: userManager = new userManager();
    let groupMgr: GroupNS.groupManager = new GroupNS.groupManager();

    $('#loadBtn').click(() => { userMgr.load(); });
    $("#displayBtn").click(() => { userMgr.displayUsers(); });
    $("#addUser").click(() => { userMgr.addUser(); });

    $('#loadGrBtn').click(() => { groupMgr.loadGroups(); });
    $("#displayGrBtn").click(() => { groupMgr.displayGroup(); });
}