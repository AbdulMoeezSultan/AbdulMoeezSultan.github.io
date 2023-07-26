var array;
var i;
var TheArraysKey;

function ScrollUp(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    const UT = document.getElementById('U-T');
    const AT = document.getElementById('A-T');
    const SA = document.getElementById('SubmitAdd');
    const SU = document.getElementById('SubmitUpdate');
    myDiv1.style.display = 'none';
    myDiv2.style.display = 'block';
    myDiv3.style.display = 'none';
    UT.style.display = 'block';
    AT.style.display = 'none';
    SA.style.display = 'none';
    SU.style.display = 'block';

    var updatechild = e.querySelector("#UpdateChild2");
    var objnumber = updatechild.textContent;
    if (typeof objnumber === 'string') {
        objnumber = Number(objnumber);
        console.log(objnumber);
    }

    
    var taskmain = e.parentNode.parentNode;
    var mainlabel = taskmain.parentNode.parentNode;
    TheArraysKey = mainlabel.children[1].textContent.trim();
    console.log(TheArraysKey);
    var Arrayy = localStorage.getItem(TheArraysKey);
    array = JSON.parse(Arrayy);

    for (i = (array.length - 1); i >= 0; i--) {
        var obj = array[i];
        if (typeof obj.KeyId === 'string') {
            obj.KeyId = Number(obj.KeyId);
            console.log(obj.KeyId);
        }
        if (obj.KeyId === objnumber) {
            document.getElementById("Task").value = obj.Task;
            document.getElementById("DueDate").value = obj.DueDate;
            document.getElementById("Description").value = obj.Description;
            break;
        }
    };
};

function UpdateTheTask() {
    SubmittionCheck = document.getElementById("NotSubmit");

    var task = document.getElementById("Task").value;
    var due = document.getElementById("DueDate").value;
    var desc = document.getElementById("Description").value;

    if (task === '' || due === '' || desc === '') {
        SubmittionCheck.style.display = 'block';
        console.log("Form not filled properly");
    }
    else {
        SubmittionCheck.style.display = 'none';
        var obj = array[i];
        obj.Task = task;
        obj.DueDate = due;
        obj.Description = desc;
        const jsonString = JSON.stringify(array);
        localStorage.setItem(TheArraysKey, jsonString);
        location.reload();
    }
};