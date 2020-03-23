export default function TodoEdit(owner){
    return `
        <section class="content__owner">
            <h4>${owner.name}</h4>
        </section>

        <section class="update-owner">
            <input class="update-owner__name" type="text" value="${owner.name}">
            <input class="update-owner__id" type="hidden" value="${owner.id}">
            <button class="update-owner__submit">Save Changes</button>
        </section>

    `;
}