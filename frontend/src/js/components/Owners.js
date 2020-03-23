export default function Owners(owners){
    return `
    <ol> 
        ${owners.map(owner => {
            return `
            <li>
                <h4 class="owner__items">${owner.name}</h4>
                <button class="edit-owner__submit">Edit</button>
                <button class="delete-owner__submit">Delete</button>
                <input class="owner__id" type="hidden" value="${owner.id}">
            </li>
            `
        }).join("")}
    </ol>

    <section class="add-owner">
            <input class="add-owner__ownerName" type="text" placeholder="Add a Name here">
            <button class="add-owner__submit">Add an owner</button>
    </section>
    `
}