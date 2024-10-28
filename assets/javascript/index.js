addEventListener("DOMContentLoaded", (event) => {
    
    const liElements = document.querySelectorAll("li");

    for  (let item of liElements) {
        if (item.className === "empty-li") {
            item.innerText -= "ho";
            // const newText = document.createTextNode("Ho");
            // item.appendChild(newText);
        } else {
        const newText = document.createTextNode("Hi");
        item.appendChild(newText);
        }   
    }

    const hiElements = document.getElementById("empty-li1");

    hiElements.innerText = "ho";

    console.log(liElements);
})



