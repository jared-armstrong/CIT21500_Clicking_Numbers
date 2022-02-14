let colorList = ["red", "green", "blue"];
let elements = [];


function colorDiv(colorList) {

    let that = this;
    this.number = 0;
    this.ele = document.createElement("div");
    this.ele.style.height = "100px";
    this.ele.style.width = "200px";
    this.ele.style.fontSize = "18px";
    this.ele.style.textAlign = "center";
    this.ele.style.display = "flex";
    this.ele.style.alignItems = "center";
    this.ele.style.justifyContent = "center";
    this.ele.style.borderRadius = "10px";
    this.ele.style.backgroundColor = colorList;
    this.ele.addEventListener("click", function() {
        that.increaseNum();
    });
    this.ele.innerHTML = this.number;
    document.body.appendChild(this.ele);

}


colorDiv.prototype.increaseNum = function() {
    this.number = this.number + 1;
    this.ele.innerHTML = this.number;
}

for (obj in colorList) {
    elements.push(new colorDiv(colorList[obj]));
}