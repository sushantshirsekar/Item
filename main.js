let form = document.querySelector('#addForm');
let ul = document.getElementById('items');


form.addEventListener('submit', addItem);
ul.addEventListener('click', deleteItem);
ul.addEventListener('click', editItem);

function addItem(e)
{
    let newItem = document.getElementById('inputText').value;
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
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
    console.log(1);
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
