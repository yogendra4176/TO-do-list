document.querySelector("#push").onclick=function(){
    if (document.querySelector("#new_task input").value.length == 0){
        alert("Please type-in a Task")
    }
    else{
        document.querySelector("#task").innerHTML+=`<div class="tasks">
                <span id="name_of_task">${document.querySelector('#new_task input').value}</span>
                <button class="del">
                    <i class="fa fa-trash"></i>
                </button>
        </div>`
        let current_tasks = document.querySelectorAll(".del")
        for (let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }
       

    }
    document.querySelector("#new_task input").value= "";


    
}