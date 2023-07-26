var placeholder = document.getElementById("MyLabels");
var cardlabel = "";


var Arrayy = localStorage.getItem('LabelArray');
var array = JSON.parse(Arrayy);
for (var i = 0; i < array.length; i++) {
    var obj = array[i];

    cardlabel += `
        <div class ="MainLabel">
            <div id="LabelHeading">
                ${obj.Label}
            </div>
            <div id="Keys">
                <p>${obj.KeyId}</p>
            </div>

            <div id="MyTasks" ondragover="onDraggingOver(event);" ondrop="onDrop(event);">
                
            </div>

            <div id="LabelHeader">
                <button id="AddTaskForm" onclick="AddTheTaskForm(this)">
                    <p>Add Task</p>
                    <p id="AddLabelChild2">${obj.KeyId}</p>
                </button>
                <button id="DelLabel" onclick="DelLabel(this)">
                    <p id="DelLabelChild1">Delete</p>
                    <p id="DelLabelChild2">${obj.KeyId}</p>
                </button>
            
            </div>
        </div>
        `;
};
placeholder.innerHTML = cardlabel;
