url =[]
activetab="links"                                           //tag for storage
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
const dellinkbtn = document.getElementById("del-btn-fin")                   //CREATING BUTTON FOR SPECIFIC LINKS


inputBtn.addEventListener("click", function sav(){                         //FUNCTION SAVE AND SHOWING ERROR
    if(document.getElementById("link").value==""){
        document.getElementById('aa').className = "myclass";
    }
    else{
        save()
        document.getElementById('aa').className = "visually-hidden";           
    }
   
})
function del(){                               //DELETING VALUE
    localStorage.clear('links')
    list.innerHTML = ""
    window.close();
}

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
            if(url[i]=="" || url[i]=="undefined" || url[i]=="NULL"){
                continue
            }
            else{
       listItems += `
        <li class="list-group-item">
            <a target='_blank' href='${url[i]}'>
                ${url[i]}
            </a>
        </li>
    `   
        }
        }
        list.innerHTML = listItems
        addlist()
    }

function addlist(){
    let lis=""
    for(let i=0; i<url.length; i++){
        let newOption = new Option(url[i],url[i]);    //FIRST IS TEXT AND SECOND IS VALUE
        const select = document.querySelector('#select1'); 
        select.add(newOption,undefined);
    }
     }
    dellinkbtn.addEventListener("click", function droplink(){              //WHEN OPTION IS CLICKED AND ELEMENT IS REQUESTED TO  REMOVE
        let n=0;
        selectElement = document.querySelector('#select1')
        output = selectElement.value
        console.log(output)
        if(output=='ALL'){
            del()
        }
        else{
            const index = url.indexOf(output);
            if (index > -1) {
              url.splice(index, 1);
            }
            console.log(url);
            refresh()
    }
     })
function refresh(){                                   //ADD ELEMENT IN DROP DOWN LIST
    document.getElementById("select1").innerHTML = "<option value='ALL' selected>Delete All</option>";
    save()
    addlist()
}