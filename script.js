function voteButton(){
    var radio1 = document.getElementById('r1').checked
    var radio2 = document.getElementById('r2').checked
    var radio3 = document.getElementById('r3').checked
    if(radio1 === true || radio2 === true || radio3 === true) {
        alert("Thank you for voting");
    }
    else {
        alert("Please select one fo the stories");
    }
}