class groupManager {
    private groupCollection: Array<Group> = new Array<Group>();

    loadGroups(): void {
        $.getJSON("/Home/GetGroup")
            .then((data) => { this.groupCollection = data });
    }

    displayGroup(): void {

    }
}