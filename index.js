document.getElementById('container').style.backgroundColor = 'silver';

document.getElementById('title').style.color = 'green';

document.getElementById('veges').style.textTransform = 'uppercase';
document.getElementById('fruits').style.textTransform = 'uppercase';

let li = document.createElement('li');
li.innerHTML = 'Apple'

document.getElementById('fruList').appendChild(li);

let li2 = document.createElement('li2');
li2.innerHTML = 'Potatoes'

document.getElementById('vegList').appendChild(li2);