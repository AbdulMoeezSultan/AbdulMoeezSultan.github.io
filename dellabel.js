function DelLabel(e) {
    var delchild = e.querySelector("#DelLabelChild2");
    var TheTaskArrayKey = delchild.textContent;
    console.log(TheTaskArrayKey);

    var taskmain = e.parentNode.parentNode;
    console.log(taskmain);
    taskmain.style.display = 'none';

    var LabelArray = localStorage.getItem('LabelArray');
    var labelarray = JSON.parse(LabelArray);
    console.log(labelarray)

    var Arrayy = localStorage.getItem(TheTaskArrayKey);
    var array = JSON.parse(Arrayy);
    console.log(array);
    for (var i = (labelarray.length - 1); i >= 0; i--) {
        var obj = labelarray[i];
        if (obj.KeyId === TheTaskArrayKey) {
            labelarray.splice(i, 1);
            const jsonString = JSON.stringify(labelarray);
            localStorage.setItem('LabelArray', jsonString);
            localStorage.removeItem(TheTaskArrayKey);
            break;
        }
    };
    location.reload();

};