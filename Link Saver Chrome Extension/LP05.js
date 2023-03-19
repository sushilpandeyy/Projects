url =[]
let cin=url.length;
let n=0
if(localStorage.getItem('links')){                          //IF URL LIST IS ALREADY SAVED
        localStorage.getItem('links')
        const storedBlogs = JSON.parse(localStorage.getItem('links'))
        for(a=0; a<storedBlogs.length; a++){
            url[a]=storedBlogs[a]
        }
        cin=url.length
    Show()
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){     //GETTING VALUE IN VARIABLE
     link.value=tabs[0].url
}) 

const inputBtn = document.getElementById("input-btn")                      //CREATING BUTTON VALUE FOR INPUT
const delbtn = document.getElementById("del-btn")                          //CREATING BUTTON VALYE FOR DELETE


inputBtn.addEventListener("click", function sav(){                         //FUNCTION SAVE AND SHOWING ERROR
    if(document.getElementById("link").value==""){
        document.getElementById('aa').className = "myclass";
    }
    else{
        save()
        document.getElementById('aa').className = "visually-hidden";           
    }
   
})
delbtn.addEventListener("click", function del(){                               //DELETING VALUE
    localStorage.clear('links')
    list.innerHTML = ""
} )
function save(){                                                            //SAVING AND SHOWING 
url[cin]=document.getElementById("link").value;
link.value=""
localStorage.setItem('links', JSON.stringify(url));
cin++
Show()
}

function Show(){                                                           //SHOWING LINKS
    let listItems = ""
        for (let i = 0; i < url.length; i++) 
        {
       listItems += `
        <li class="list-group-item">
            <a target='_blank' href='${url[i]}'>
                ${url[i]}
            </a>
        </li>
    `
        }
        list.innerHTML = listItems
        
    }
