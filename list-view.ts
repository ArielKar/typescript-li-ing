class ListView {

    constructor(private elem) {}

    add(value) {
        let newLi = document.createElement("li");
        newLi.innerText = value;
        this.elem.appendChild(newLi);
    }
}