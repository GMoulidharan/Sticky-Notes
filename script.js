const containerElement = document.getElementById('container');
const btnADD = document.getElementsByClassName('btn-add')[0];//[0] mean take the first element.



function getAppStorage(){
    return JSON.parse(localStorage.getItem('sticky-app')||"[]");//JSON to array formate[obj and values].
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
    return textElement;
}