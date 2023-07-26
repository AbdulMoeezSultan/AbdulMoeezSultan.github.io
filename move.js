var objnumberr;
var labelarray;
var TheArraysKeys;

function MoveTask(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    myDiv1.style.display = 'none';
    myDiv2.style.display = 'none';
    myDiv3.style.display = 'block';
    var movechild = e.querySelector("#MoveChild2");
    objnumberr = movechild.textContent;
    if (typeof objnumberr === 'string') {
        objnumberr = Number(objnumberr);
    }
    console.log(objnumberr);
    var taskmain = e.parentNode.parentNode;
    var mainlabel = taskmain.parentNode.parentNode;
    TheArraysKeys = mainlabel.children[1].textContent.trim();

    var LabelArray = localStorage.getItem('LabelArray');
    labelarray = JSON.parse(LabelArray);
    var dropdown = document.getElementById("DropDown");
    let optionsHTML = "";
    for (var i = 0; i < labelarray.length; i++) {
        var attribute = labelarray[i];
        optionsHTML += `<option value="${attribute.Label}">${attribute.Label}</option>`;
    }
    dropdown.innerHTML = optionsHTML;
};

function MoveTheTask() {
    var PostLabelKey;
    var mytask;
    var mydue;
    var mydesc;
    var myid;
    var dd = document.getElementById("DropDown").value;

    var Arrayy = localStorage.getItem(TheArraysKeys);
    var array = JSON.parse(Arrayy);

    for (var i = 0; i < array.length; i++) {
        var findobj = array[i];
        if (typeof findobj.KeyId === 'string') {
            findobj.KeyId = Number(findobj.KeyId);
            console.log(findobj.KeyId);
        }
    
        if (findobj.KeyId === objnumberr) {
            mytask = findobj.Task;
            mydue = findobj.DueDate;
            mydesc = findobj.Description;
            myid = findobj.KeyId;
            array.splice(i, 1);
            const jsonString = JSON.stringify(array);
            localStorage.setItem(TheArraysKeys, jsonString);
            break;
        }
    }
    const movejson = {
        Task: mytask,
        DueDate: mydue,
        Description: mydesc,
        KeyId: myid
    };

    for (var i = 0; i < labelarray.length; i++) {
        var anobj = labelarray[i];
        if (anobj.Label === dd) {
            PostLabelKey = anobj.KeyId;
            break;
        }
    }

    var shifttask = localStorage.getItem(PostLabelKey) ?? (localStorage.setItem(PostLabelKey, '[]'), '[]');
    var ShiftTask = JSON.parse(shifttask);

    ShiftTask.push(movejson);
    const newmovejson = JSON.stringify(ShiftTask);

    localStorage.setItem(PostLabelKey, newmovejson);

    location.reload();

};