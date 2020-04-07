var titleText=document.querySelector("#titleText");
var myList =document.querySelector("#myList");

function viewData()
{    
    if(localStorage.myData)
    myList.innerHTML=localStorage.myData;  
}
function saveData()
{
    if(titleText.value!=0)
        {                    
            var trueSign=document.createElement("span");
            trueSign.innerHTML="&#9989;";
            trueSign.classList.add("notSigned");
            var listItem=document.createElement("li");
            listItem.innerHTML=titleText.value;
            var x=document.createElement("span");
            x.innerHTML="X";
            x.className="close";
            x.onclick = function()
            {
                this.parentElement.remove();
                localStorage.myData=myList.innerHTML;
            }
            listItem.appendChild(trueSign);
            listItem.appendChild(x);
            myList.appendChild(listItem);
            localStorage.myData=myList.innerHTML;
            titleText.value="";
            titleText.focus();
            }
            else
            {
                alert("You forgot to type anything");
                titleText.focus();
            }
}

function clearData()
{
    titleText.value="";
    localStorage.clear();
    myList.textContent="";
}

function avtivateX()
{
    var closeBtn = document.getElementsByClassName("close");
    for (var num = 0; num < closeBtn.length; num++)
    {
        closeBtn[num].onclick = function()
        {
            this.parentElement.remove();
            localStorage.myData=myList.innerHTML;
        }
    }
}

var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        var marker= ev.target.getElementsByTagName('span')[0];
         marker.classList.toggle("notSigned");
        localStorage.myData=myList.innerHTML;
        }
}, false);