var alllabels = document.getElementById("MyLabels")
var childDivs = alllabels.getElementsByClassName('MainLabel');

for (var i = 0; i < childDivs.length; i++) {
    var child = childDivs[i];
    var keychild = child.children[1].textContent.trim();
    var placeholder = child.children[2];
    var cardtask = "";
    var Arrayy = localStorage.getItem(keychild);
    if (Arrayy != null) {
        var array = JSON.parse(Arrayy);
    for (var j = 0; j < array.length; j++) {
        var obj = array[j];
        cardtask += `
            <div class="TaskMain" id="TID_${obj.KeyId}" draggable="true" ondragstart="onDragStart(event);" ondragend="dragEnd(event)" ondrop="onChildDropHandler(event);" >
                <div id="Child1">
                    <div id="Task">
                        <p class="Label">Task:&nbsp;</p> 
                        <p>${obj.Task}</p>
                    </div>
                    <div id="Due">
                        <p class="Label">Due:&nbsp;</p> 
                        <p> ${obj.DueDate}</p>
                    </div>
                </div>
                <div id="Child2">
                    <div id="Description">
                        <p class="Label">Description:&nbsp;</p> 
                        <p> ${obj.Description}</p>
                    </div>
                </div>
                <div id="Child3">
                    <button id="Del" onclick="DelTask(this)">
                        <p id="DelChild1">🗑️ Delete</p>
                        <p id="DelChild2">${obj.KeyId}</p>
                    </button>
                    <button id="Update" onclick="ScrollUp(this)">
                        <p id="UpdateChild1">⇧ Update</p>
                        <p id="UpdateChild2">${obj.KeyId}</p>
                    </button>
                    <button id="Move" onclick="MoveTask(this)">
                        <p id="MoveChild1">◄► Move</p>
                        <p id="MoveChild2">${obj.KeyId}</p>
                    </button>
                </div>
            </div>
            `;
    };
    placeholder.innerHTML = cardtask;
    }


}