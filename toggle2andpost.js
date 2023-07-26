var tasklabel;
var TheKey;
function AddTheTaskForm(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  var hidemessage = document.getElementById("NotSubmit");
  myDiv1.style.display = 'none';
  myDiv2.style.display = 'block';
  myDiv3.style.display = 'none';
  AT.style.display = 'block';
  UT.style.display = 'none';
  SU.style.display = 'none';
  SA.style.display = 'block';
  hidemessage.style.display = 'none';

  document.getElementById("Task").value = '';
  document.getElementById("DueDate").value = '';
  document.getElementById("Description").value = '';

  tasklabel = e.querySelector("#AddLabelChild2");
  TheKey = tasklabel.textContent;


};

function AddTheTask() {
  var i = localStorage.getItem('counter') ?? (localStorage.setItem('counter', 0), 0);
  var SubmittionCheck = document.getElementById("NotSubmit");

  var task = document.getElementById("Task").value;
  var due = document.getElementById("DueDate").value;
  var desc = document.getElementById("Description").value;

  if (task === '' || due === '' || desc === '') {
    SubmittionCheck.style.display = 'block';
  }
  else {
    SubmittionCheck.style.display = 'none';

    var key = i;
    i++;
    localStorage.setItem('counter', i);
    console.log(key);

    const NewJson = {
      Task: task,
      DueDate: due,
      Description: desc,
      KeyId: key
    };

    var Arrayy = localStorage.getItem(TheKey) ?? (localStorage.setItem(TheKey, '[]'), '[]');
    var array = JSON.parse(Arrayy);
    array.push(NewJson);

    const jsonString = JSON.stringify(array);
    localStorage.setItem(TheKey, jsonString);
    location.reload();
  }

};

