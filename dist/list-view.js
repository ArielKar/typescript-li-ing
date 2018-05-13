var ListView = /** @class */ (function () {
    function ListView(elem) {
        this.elem = elem;
    }
    ListView.prototype.add = function (value) {
        var newLi = document.createElement("li");
        newLi.innerText = value;
        this.elem.appendChild(newLi);
    };
    return ListView;
}());
//# sourceMappingURL=list-view.js.map