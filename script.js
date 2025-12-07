const list = document.getElementById("infi-list");
let count = 1;

// Add list items
function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + count++;
        list.appendChild(li);
    }
}

// Add initial 10 items
addItems(10);

// Detect scroll end
window.addEventListener("scroll", () => {
    const reachedBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    if (reachedBottom) {
        addItems(2);
    }
});
