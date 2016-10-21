var userManager = (function () {
    function userManager() {
        var _this = this;
        this.users = new Array();
        this.displayUsers = function () {
            var table = '<table class="table">';
            for (var i = 0; i < _this.users.length; i++) {
                var tableRow = '<tr>' +
                    '<td>' + _this.users[i].Id + '</td>' +
                    '<td>' + _this.users[i].FirstName + '</td>' +
                    '<td>' + _this.users[i].LastName + '</td>' +
                    '<td>' + date2JS(_this.users[i].BirthDate) + '</td>' +
                    '</tr>';
                table += tableRow;
            }
            table += '</table>';
            $('#content').html(table);
        };
    }
    userManager.prototype.load = function () {
        var _this = this;
        $.getJSON('/api/UserActions/GetUsers', function (data) {
            if (data.Success) {
                _this.users = data.Result;
                console.log('data is loaded');
            }
        });
    };
    userManager.prototype.addUser = function () {
        var firstname = $('#FirstName').val();
        var lastname = $('#LastName').val();
        var user = new User();
        user.FirstName = firstname;
        user.LastName = lastname;
        return this.addUserInternal(user, function (msg) {
            alert("Data Saved: " + msg.Message);
        });
    };
    userManager.prototype.addUserInternal = function (user, callback) {
        $.ajax({
            method: "POST",
            url: '/api/UserActions/PostUser',
            data: user
        }).done(callback);
        return true;
    };
    return userManager;
}());
//# sourceMappingURL=userManager.js.map