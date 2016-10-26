/// <reference path="typings/jquery/jquery.d.ts" />

import UserManager = require("./manager/userManager");
import GroupManager = require("./manager/groupManager");

let userMgr: UserManager.userManager = new UserManager.userManager();
let groupMgr: GroupManager.groupManager = new GroupManager.groupManager();

$('#loadBtn').click(() => { userMgr.load(); });
$("#displayBtn").click(() => { userMgr.displayUsers(); });
$("#addUser").click(() => { userMgr.addUser(); });

$('#loadGrBtn').click(() => { groupMgr.loadGroups(); });
$("#displayGrBtn").click(() => { groupMgr.displayGroup(); });
