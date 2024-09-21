const containerElement = document.getElementById('container');
const btnADD = document.getElementsByClassName('btn-add')[0];//[0] mean take the first element.



function getAppStorage(){
    return JSON.parse(localStorage.getItem('sticky-app')||"[]");//string to JSON - array formate[key and values].
};

getAppStorage().forEach(element => {
    const textElement=createTextElement(element.id,element.content);
    containerElement.insertBefore(textElement,btnADD);
});

function createTextElement(id,content){

    const textElement=document.createElement('textarea');
    //adding class name to the textarea.
    textElement.classList.add('sticky');
    //adding value to textarea.
    textElement.value=content;
    textElement.placeholder="Enter your notes";

    //entered text are stored in the local storage 
    textElement.addEventListener("change",()=>{
        updateNotes(id,textElement.value);
    })
    return textElement;
}


//add new sticky note
function addSticky(){
    const notes=getAppStorage();
    const noteObj={
        id:Math.floor(Math.random()*100000),//whole numbers 
        content:"",
    }
    const textElement=createTextElement(noteObj.id,noteObj.content);
    containerElement.insertBefore(textElement,btnADD);//have to store this in local storage
    notes.push(noteObj);//here a empty content pair[array] will be stored.
    saveNotes(notes);
}

btnADD.addEventListener('click',()=>addSticky());

//save
function saveNotes(notes){
    localStorage.setItem('sticky-app',JSON.stringify(notes))//saving the notes in the string formate into the local storage
}

//update new sticky note
function updateNotes(id,content){
    const notes=getAppStorage();
    const updateElement=notes.filter((note)=>note.id==id)[0];
    updateElement.content=content;//assigning the new content
    saveNotes(notes);
}