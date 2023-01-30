console.log("Hello World!")

let count = 0;

const countHeader = document.getElementById("count")
const countAddBtn = document.getElementById("add")
const countSubBtn = document.getElementById("sub")
const countLangit = document.getElementById("langit")
const countdiLangit = document.getElementById("dilangit")
countHeader.innerText = count

countAddBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText =  count;
})

countSubBtn.addEventListener("click", () => {
    count --;
    countHeader.innerText = count;
})

countLangit.addEventListener("click", () => {
    count = count - 1000;
    countHeader.innerText = count;
    alert("Bawi ka next life, say hello kay satanas nalang")
})

countdiLangit.addEventListener("click", () => {
    count = count + 1000;
    countHeader.innerText = count;
})
