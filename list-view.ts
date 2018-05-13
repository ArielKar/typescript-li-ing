class ListView {

    constructor(private elem) {}

    add(value) {
        let newLi = document.createElement("li");
        newLi.innerText = value;
        console.log(this.elem.style.color);
        newLi.style.color = `rgb(${this.getRandom()},${this.getRandom()},${this.getRandom()})`;
        this.elem.appendChild(newLi);
    }

    getRandom() {
        return Math.floor((Math.random()*255)+1);
    }
}