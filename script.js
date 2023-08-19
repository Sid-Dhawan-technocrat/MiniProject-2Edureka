function autocomplete(inp,arr){
    var currentFocus;
    inp.addEventListener("input",function(e){
        var a,b,i,val=this.value;
        closeAllLists();
        if(!val)
        {return false;} 
        currentFocus=-1;
        
        a=document.createElement("DIV");
        a.setAttribute(id,this,id)
    })
}

function addActive(x){
    if(!x)return false;
    removeActive(x);
    if(currentFocus>=x.length)currentFocus=0;
    if(currentFocus<0)currentFocus=(x.length-1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
}

function removeActive(){
    for(var i=0;i<x.length;i++){
        x[i].classList.remove("autocomplete-active");
    }
}

function closeAllLists(elmnt){
    var x=document.getElementsByClassName("autocomplete-items")
        for(var i=0;i<x.length;i++){
            if(elmnt!=x[i] && elmnt!=inp){
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click",function(e){
        closeAllLists(e.target);
    })
