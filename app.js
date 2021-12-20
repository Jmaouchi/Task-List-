const form = document.querySelector ('#task-form');  // all the form
const taskList = document.querySelector('.collection'); // the ul 
const clearBtn = document.querySelector ('.clear-tasks'); // the clear tasks btn 
const filter = document.querySelector ('#filter'); // the filter task input 
const taskInput = document.querySelector ('#task'); // the new task input ( form input )

//load all event listeners 
loadEventListeners();

//start

function loadEventListeners(){
  //add a task list
  form.addEventListener('submit', addTask);
  //remove a task list
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click' , clearTasks);
  //filter task event
  filter.addEventListener ('keyup', filterTasks);
  }

  function addTask(e){
    if (taskInput.value === ''){
      alert('add a task');
      li.remove ();
    }
   
    const li = document.createElement ('li');
    // add a class
    li.className = 'collection-item';
    // creat a textNode and append 
    li.appendChild (document.createTextNode (taskInput.value));
    //creat a new link element 
    const link = document.createElement ('a');
    // add a calss
    link.className = 'delete-item secondary-content';
    //add the icon html
    link.innerHTML = '<i class="fas fa-window-close"></i>';
    //append the link to li

    li.appendChild(link);

    // append the li to ul
   taskList.appendChild(li);   
 

    // Store in LS

    storeTaskInLocalStorage (taskInput.value);
  
      //clear input
   taskInput.value = '';
 
    e.preventDefault();
  
  }

  function storeTaskInLocalStorage (task){
    let tasks;
    if(localStorage.getItem (tasks)===null) {
      tasks = [];
    }
    else {
      tasks = JSON.parse(localStorage('tasks'));
    }
    tasks.push(task);

    localStorage.setItem ('tasks', JSON.stringify(tasks));
  }
  
 



  // remove tasks
  function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){
      if (confirm('are you sure')){
        e.target.parentElement.parentElement.remove();
      }
    }  
  }


  // Clear function

  function clearTasks(e){
  //  taskList.innerHTML = '';
  while (taskList.firstChild){
    taskList.removeChild(taskList.children[1]);
   }

  }

  // filter tasks

  function filterTasks (e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll ('.collection-item').forEach
    (function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text)!= -1){
        task.style.display = 'block';
      }  else {
        task.style.display = 'none';
      }
    })
  }


  
  

 


