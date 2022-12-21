export const addEvent = (id)=>{

    var id =document.querySelector(`#${id}`)
    id.addEventListener("click", ()=>{`${id}`()})
}

