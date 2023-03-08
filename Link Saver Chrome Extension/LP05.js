url =[]
let cin=url.length;
let n=0
if(localStorage.getItem('links')){
        localStorage.getItem('links')
        const storedBlogs = JSON.parse(localStorage.getItem('links'))
        for(a=0; a<storedBlogs.length; a++){
            url[a]=storedBlogs[a]
        }
        cin=url.length
    Show()
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){   
     link.value=tabs[0].url
})
const inputBtn = document.getElementById("input-btn")
const delbtn = document.getElementById("del-btn")
inputBtn.addEventListener("click", function sav(){
   save()
})
delbtn.addEventListener("click", function del(){
    localStorage.clear('links')
    list.innerHTML = ""
} )
function save(){
url[cin]=document.getElementById("link").value;
link.value=""
localStorage.setItem('links', JSON.stringify(url));
cin++
Show()
}

function Show(){
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

