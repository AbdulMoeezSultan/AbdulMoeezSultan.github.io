var timeout;
var TheDraggedLabel;
var TheDropLabel;
var TheDragTaskId;
var TheDraggedKey;
var TheDropKey;
var num = 0;
var TotalLabelsInTheArray = localStorage.getItem('LabelArray');
var Thelabelarray = JSON.parse(TotalLabelsInTheArray);

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    event.currentTarget.style.borderColor = 'white';
    TheDraggedLabel = iterator;
    var Theid = event.target.id;
    TheDragTaskId = Theid.substring(4);
    if (typeof TheDragTaskId === 'string') {
        TheDragTaskId = Number(TheDragTaskId);
    }
    myDiv1.style.display = 'none';
    myDiv2.style.display = 'none';
    myDiv2.style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function onDragOverNext(event) {
    event.preventDefault();
    if (num === 0) {
        if (iterator < Thelabelarray.length) {
            NextLabel();
            console.log(iterator);
            num++;
        }
    }
    if (num === 20) {
        num = 0;
    }
    else {
        num++;
    }
    console.log(num);
}

function onDragOverPrevious(event) {
    event.preventDefault();
    if (num === 0) {
        if (iterator < Thelabelarray.length) {
            PreviousLabel();
            console.log(iterator);
        }
    }
    if (num === 20) {
        num = 0;
    }
    else {
        num++;
    }
    console.log(num);
}

function onDraggingOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();

    var obj;
    obj = Thelabelarray[TheDraggedLabel];
    TheDraggedKey = obj.KeyId;
    obj = Thelabelarray[TheDropLabel];
    TheDropKey = obj.KeyId;
    console.log(TheDraggedKey);
    console.log(TheDropKey);


    var Thetask;
    var Thedue;
    var Thedesc;
    var Theid;
    var SetArrayBack;

    var DragArray = localStorage.getItem(TheDraggedKey);
    var dragarray = JSON.parse(DragArray);

    for (var i = 0; i < dragarray.length; i++) {
        obj = dragarray[i];
        if (typeof obj.KeyId === 'string') {
            obj.KeyId = Number(obj.KeyId);
            console.log(obj.KeyId);
        }

        if (obj.KeyId === TheDragTaskId) {
            Thetask = obj.Task;
            Thedue = obj.DueDate;
            Thedesc = obj.Description;
            Theid = obj.KeyId;
            dragarray.splice(i, 1);
            SetArrayBack = JSON.stringify(dragarray);
            localStorage.setItem(TheDraggedKey, SetArrayBack);
            break;
        }
    }

    const TheDraggedTaskValues = {
        Task: Thetask,
        DueDate: Thedue,
        Description: Thedesc,
        KeyId: Theid
    };

    console.log(TheDraggedTaskValues);

    var NowDropTask = localStorage.getItem(TheDropKey) ?? (localStorage.setItem(TheDropKey, '[]'), '[]');
    var NDT = JSON.parse(NowDropTask);

    NDT.push(TheDraggedTaskValues);
    SetArrayBack = JSON.stringify(NDT);

    localStorage.setItem(TheDropKey, SetArrayBack);


}


function dragEnd(event) {
    event.currentTarget.style.borderColor = '';
}

function onChildDragOverHandler(event) {
    event.preventDefault();
    event.stopPropagation();
}

function onChildDropHandler(event) {
    event.preventDefault();
    event.stopPropagation();
}