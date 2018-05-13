var ListView = /** @class */ (function () {
    function ListView(elem) {
        this.elem = elem;
    }
    ListView.prototype.add = function (value) {
        var newLi = document.createElement("li");
        newLi.innerText = value;
        console.log(this.elem.style.color);
        newLi.style.color = "rgb(" + this.getRandom() + "," + this.getRandom() + "," + this.getRandom() + ")";
        this.elem.appendChild(newLi);
    };
    ListView.prototype.getRandom = function () {
        return Math.floor((Math.random() * 255) + 1);
    };
    return ListView;
}());
//# sourceMappingURL=list-view.js.map