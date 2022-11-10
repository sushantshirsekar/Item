let form = document.querySelector('#addForm');
let ul = document.getElementById('items');
var filter = document.getElementById('search');
var filter1 = document.getElementById('search');

form.addEventListener('submit', addItem);
ul.addEventListener('click', deleteItem);
ul.addEventListener('click', editItem);
filter.addEventListener('keyup', searchItems);
filter1.addEventListener('keyup', searchDesc);
function addItem(e)
{
    let newItem = document.getElementById('inputText').value;

    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    let secondInp = document.getElementById('descText').value;
    li.appendChild(document.createTextNode(secondInp));
    ul.appendChild(li);
    var btn = document.createElement('button');
    var btnTxt = document.createTextNode('X');
    btn.appendChild(btnTxt);
    btn.className = 'btn btn-danger btn-sm float-right delete';
    li.appendChild(btn);

    let ebtn = document.createElement('btn');
    var ebtnTxt = document.createTextNode('Edit');
    ebtn.className = 'btn btn-primary btn-sm float-right';
    ebtn.appendChild(ebtnTxt);
    li.appendChild(ebtn);

}

function deleteItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        confirm('Are you sure?')
        {
            var li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

function editItem(e)
{
    if(e.target.classList.contains('btn-primary'))
    {
        alert('Cannot Edit Yet');
    }
}

function searchItems(e)
{
    let text = e.target.value.toLowerCase();


    let itmli = ul.getElementsByTagName('li');
    Array.from(itmli).forEach(function(item){
        var itmName = item.firstChild.textContent;
        if(itmName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    })
}

function searchDesc(e)
{
    let text1 = e.target.value.toLowerCase();
    console.log(text1);
    let itmli1 = ul.getElementsByTagName('li');
    Array.from(itmli1).forEach(function(item1){
        var itmName1 = item1.childNodes[1].textContent;
        if(itmName1.toLowerCase().indexOf(text1) != -1)
        {
            item1.style.display = 'block';
        }
        else
        {
            item1.style.display = 'none';
        }
    })

    
}
