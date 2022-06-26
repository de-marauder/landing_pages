const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


console.log(tooltipTriggerList);

// tooltipTriggerList.forEach((tooltip)=> {
//     // console.log(tooltip)
//     tooltip.addEventListener('mouseover', (e)=>{
//         e.stopPropagation()
//         e.stopImmediatePropagation()
//         console.log("You just hovered on a tooltip")
//     })
// })
