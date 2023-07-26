//this script loads html from different files according to the names parameters

//theres a chance different files use different css stylesheets which may lead to 
//css collisions. make sure to use different selectors
function LoadExtraHtml(...names){
    for(let i=0;i<names.length;i++)
    fetch_write(names[i]);
}

function fetch_write(Filename){
    fetch("../html/"+Filename+".html").then(response=>response.text()).then(content=>document.getElementById(Filename.toUpperCase()).insertAdjacentHTML("afterbegin",content));
}