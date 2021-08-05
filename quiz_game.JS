Pname1=localStorage.getItem("Player1Name");
p2name=localStorage.getItem("Player2Name");
console.log(p1name);
console.log(p2name);
p1score=0;
p2score=0;

document.getElementById("PN1").innerHTML=Pname1;
document.getElementById("PN2").innerHTML=p2name;

document.getElementById("PS1").innerHTML=p1score;
document.getElementById("PS2").innerHTML=p2score;

function send() {
    number1 = document.getElementById("input").value;
    number2 = document.getElementById("input2").value;
    actual_answer= parseInt(number1)*parseInt(number2);

    question_numbers="<h4>"+number1+" x "+number2+"</h4>";
    input_box= "<br>Answer : <input placeholder='type your answer' id='input_answer'>";
    check_button="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    row=question_numbers+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("input").value="";
    document.getElementById("input2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    console.log("check");
}
