const toggleButton1 = document.getElementById("AddLabelForm");
const myDiv1 = document.getElementById("CreateLabel");
const myDiv2 = document.getElementById("CreateTask");
const myDiv3 = document.getElementById("MoveTaskForm");
const AT = document.getElementById("A-T");
const UT = document.getElementById("U-T");
const SU = document.getElementById("SubmitUpdate");
const SA = document.getElementById("SubmitAdd");
var SubmittionChecking = document.getElementById("NotSubmit2");
var message = document.getElementById("NotSubmit3");
window.addEventListener('load', ()=>{
  myDiv1.style.display = 'none';
  myDiv2.style.display = 'none';

});

toggleButton1.addEventListener('click', function () {
  if (myDiv1.style.display === 'none') {
    myDiv1.style.display = 'block';
    myDiv2.style.display = 'none';
    myDiv3.style.display = 'none';
    SubmittionChecking.style.display = 'none';
    message.style.display = 'none';

    document.getElementById("Label").value = '';
  }
  else {
    myDiv1.style.display = 'none';
  }
});
