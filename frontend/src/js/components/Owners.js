export default function Owners(owners){
    return `
        <h1>List of Owners</h1>
        <ul class="owner__list">
            ${owners.map(owner => {
                return `
                <li>
                    <h4 class="owner__name" id="${owner.id}">${owner.name}</h4>
                    <input class="owner__id" type="hidden" value="${owner.id}">
                </li>
                `
            }).join("")}
        </ul>
    `
}

// export default function Owners(owners){
//     return `
//         <h1>List of Owners</h1>
//         <ul>
//             ${owners.map(owner => {
//                 return `
//                 <li>${owner.name}'s Todos:
//                     <ol>
//                     ${owner.todos.map(todo =>{
//                         return`
//                         <li>${todo.name}</li>
//                         `
//                     }).join("")}
//                     </ol>
//                 </li>
//                 `
//             }).join("")}
//         </ul>
//     `
// }
