const sortableList = document.getElementById("sortable-list");
const items = document.getElementById("item");


items.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});


const initSortableList = () => {
    const draggingItem = sortableList.querySelector(".dragging");


    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortableList.insertBefore(draggingItem, nextSibling);

    console.log(nextSibling);
}
sortableList.addEventListener("dragover", initSortableList);