var userManager = (function () {
    function userManager() {
        this.users = new Array();
    }
    userManager.prototype.load = function () {
        var _this = this;
        $.getJSON('/Home/GetUsers', function (data) {
            _this.users = data;
            alert('data is loaded');
        });
    };
    userManager.prototype.displayUsers = function () {
        var table = '<table class="table">';
        for (var i = 0; i < this.users.length; i++) {
            var tableRow = '<tr>' +
                '<td>' + this.users[i].Id + '</td>' +
                '<td>' + this.users[i].FirstName + '</td>' +
                '<td>' + this.users[i].LastName + '</td>' +
                '<td>' + this.users[i].Age + '</td>' +
                '</tr>';
            table += tableRow;
        }
        table += '</table>';
        $('#content').html(table);
    };
    return userManager;
}());
//# sourceMappingURL=userManager.js.map