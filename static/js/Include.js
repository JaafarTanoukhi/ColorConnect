//this script loads html from different files according to the names parameters

//theres a chance different files use different css stylesheets which may lead to 
//css collisions. make sure to use different selectors

function LoadExtraHtml(...names){
    for(let i=0;i<names.length;i++)
    fetch_write(names[i]);
}

function fetch_write(Filename){
    let extractedScripts=[];
    fetch("../html/"+Filename+".html")
    .then(response=>response.text())
    .then(content=>{
        document.getElementById(Filename.toUpperCase())
        .insertAdjacentHTML("afterbegin",content);
        evalScripts(content);
});

    
}

async function evalScripts(inputString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = inputString;
  
    const scriptElements = tempElement.querySelectorAll('script');
  
    for (const script of scriptElements) {
      if (script.src) {
        try {
          const response = await fetch(script.src);
          const scriptContent = await response.text();
          eval(scriptContent);
        } catch (error) {
          console.error(`Error loading script from "${script.src}":`, error);
        }
      } else {
        eval(script.innerHTML);
      }
    }
  }
  

