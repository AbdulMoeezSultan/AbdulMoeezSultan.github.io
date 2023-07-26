var SubmittionChecking = document.getElementById("NotSubmit2");
var message = document.getElementById("NotSubmit3");
function CreateLabel() {

    var label = document.getElementById("Label").value;
    if (label === '') {
        console.log(SubmittionChecking);
        message.style.display = 'none';
        SubmittionChecking.style.display = 'block';
        console.log("Form not filled properly");
    }
    else {
        SubmittionChecking.style.display = 'none';

        var Arrayy = localStorage.getItem('LabelArray') ?? (localStorage.setItem('LabelArray', '[]'), '[]');
        var array = JSON.parse(Arrayy);
        var checker = true;

        for (i = 0; i < array.length; i++) {
            var labelcheck = array[i];
            if (label === labelcheck.Label) {
                checker = false;
                break;
            }
        }
        if (checker === false) {
            message.style.display = 'block';
        }
        else {
            message.style.display = 'none';
            var i = localStorage.getItem('CreateTaskKey') ?? (localStorage.setItem('CreateTaskKey', 0), 0);

            var key = "TaskKey_" + i;
            i++;
            localStorage.setItem('CreateTaskKey', i);
            console.log(key);

            const NewJson = {
                Label: label,
                KeyId: key
            };


            array.push(NewJson);

            const jsonString = JSON.stringify(array);
            localStorage.setItem('LabelArray', jsonString);
            location.reload();
        }


    }

};