function DelTask(e) {
        var delchild = e.querySelector("#DelChild2");
        var objnumber = delchild.textContent;
        if (typeof objnumber === 'string') {
                objnumber = Number(objnumber);
        }


        const myDiv = document.getElementById('CreateTask');
        myDiv.style.display = 'none';

        var taskmain = e.parentNode.parentNode;
        var mainlabel = taskmain.parentNode.parentNode;
        var TheArrayKey = mainlabel.children[1].textContent.trim();
        taskmain.remove();

        var Arrayy = localStorage.getItem(TheArrayKey);
        var array = JSON.parse(Arrayy);
        for (var i = (array.length - 1); i >= 0; i--) {
                var obj = array[i];
                if (typeof obj.KeyId === 'string') {
                        obj.KeyId = Number(obj.KeyId);
                    }
                if (obj.KeyId === objnumber) {
                        array.splice(i, 1);
                        const jsonString = JSON.stringify(array);
                        localStorage.setItem(TheArrayKey, jsonString);
                        break;
                }
        };
};