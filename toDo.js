/*function onAddItem(){ 
    var addList = document.getElementById('list_create')
    var arr = []
    arr.push(addList.value);

    // console.log(addList.setAttribute('value'))
    let div = document.createElement("div");
    let del = document.createElement("img");
    let edit = document.createElement('img');
    del.classList.add('del')
    edit.classList.add('edit')
    edit.src = 'edit.png'
    del.src="todo.png";
    div.classList.add('list_adddiv');
    let span =document.createElement('span');
    if(addList.value.trim() === ""){
        alert("Enter Value ");  
    }else{
    span.innerHTML = addList.value;
    arr.push(span.innerHTML)
    div.appendChild(span);
    div.appendChild(del);
    div.appendChild(edit);
    document.getElementById('main').appendChild(div);
    
    console.log(arr);
    addList.value = ' '; 

} 
  edit.addEventListener('click',onChangeText);
    del.addEventListener("click",function(){
       div.style.display= 'none';
    });
    function onChangeText(){
       console.log(addList.value = span.innerHTML);
       span.innerHTML ='';
    
       console.log(arr);
     }
} 

  
 
*/
const itemMain  = document.getElementById('main');
const itemInput = document.getElementById('list_create');
//const childItem = document.getElementById('child');
const addItem = document.getElementById('add');

let dataStore =[];

addItem.addEventListener('click',function(){
    if(!itemInput.value.trim()){
    alert('Enter A Value');
    }
    else{
        addItemList();
        //dataStore.push(itemInput.value);
        console.log(dataStore);
        itemInput.value = '';
    }
})


function addItemList(){

   const div =document.createElement('div');
   div.classList.add('newItem');
   const span = document.createElement('span');
   span.classList.add('span')
   span.innerHTML = itemInput.value;
   //console.log(span)
   const deleteItem =document.createElement('img');
   deleteItem.src ='todo.png';
   deleteItem.classList.add('del')
   const editItem =document.createElement('img');
   editItem.src ='edit.png';
   editItem.classList.add('edit');
   const  inputChange = document.createElement('input');

   inputChange.classList.add('edit-input')
   itemMain.appendChild(div);
   div.appendChild(span);
   div.appendChild(inputChange);
   div.appendChild(deleteItem);
   div.appendChild(editItem);
    div.appendChild(inputChange);
   deleteItem.addEventListener('click',function(){
       div.style.display = 'none';
   });
   editItem.addEventListener('click',function(){
    //itemMain.removeChild(div);
    inputChange.addEventListener('blur',function(){
        span.innerHTML = this.value;
        this.style.display = 'none';
    });
    inputChange.style.opacity ='1';
    inputChange.value = span.innerHTML;
    //span.innerHTML ='';
    //inputChange.classList.add('span');
    //dataStore = inputChange.value;
    //dataStore.push(inputChange.value);
   });

}

