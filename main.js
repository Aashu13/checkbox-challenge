var checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');

var lastInputChecked;

function checkHandle(e) {
    var inBetween = false;
    // check if they had the shift key down
    // and catch that they are checking it
    if (e.shiftKey && this.checked) {
        // go ahead and do what we want
        // loop every single element of checkbox
        checkBoxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastInputChecked) {
                console.log(checkbox);
                inBetween = !inBetween;
                console.log("this is the starting point");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastInputChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener("click", checkHandle));