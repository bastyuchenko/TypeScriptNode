class userManager {
    private users: Array<User> = new Array<User>();

    load(): void {
        $.getJSON('/Home/GetUsers',
            (data) => {
                this.users = data;
                alert('data is loaded');

            });
    }

    displayUsers(): void {

        var table = '<table class="table">'
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
    }

}