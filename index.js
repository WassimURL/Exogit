const inputext= document.getElementById("txt")
const btn= document.getElementById("btn")
// const inputlist= document.getElementById("list")
const inputlist= document.getElementsByClassName("todolist")[0]

console.log('elementfound',inputext)
console.log('elementfound 2',btn)
console.log('elementfound 3',inputlist)

// const firstLi = document.getElementById("list");
// console.log(firstLi)
// checkbox.addEventListener("change",function()
// {
//     if(checkbox.checked){
//         firstLi.className= firstLi.className + "checked";
//     } else
//      firstLi.className = firstLi.className.replace("checked"," ")
    

// })
// console.log(firstLi)
let cpt = 0


btn.addEventListener('click', function(){

    const li= document.createElement("li")
    li.id="li"+cpt ;
    
    console.log(li)
    const p= document.createElement("p")
    p.innerText = inputext.value ;

    console.log(p)
    const checkbox = document.createElement("input")
    checkbox.id="checkbox"
    checkbox.type="checkbox"
    const button = document.createElement("button")
    button.id="btn"+cpt
    const image = document.createElement("img")
    image.src="trash.svg"
       image.alt="trash"
        image.width="10"
         image.height="10"
         
    button.appendChild(image)
    button.addEventListener("click",function(){
        console.log("button clicked")
        inputlist.removeChild(li)
    })
    checkbox.addEventListener("change",()=> {
        console.log(li.id,checkbox.checked)
        if (checkbox,checked){
            li.classname=li.className+'checked';}
            else {
                li.className=li.className.replace("checked","")          
        }
        
    })
    console.log(checkbox)
    console.log(inputlist)
    inputlist.appendChild(li)
    li.appendChild(p)
    li.appendChild(checkbox)
    li.appendChild(button)
    cpt++
    console.log(inputlist)
    
    
})