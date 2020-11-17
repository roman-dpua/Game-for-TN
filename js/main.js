var it = {
    inputName: "Введите имя",
    inputTotalScore: 0,
    inputScore: 0,
    allUsers:0,
    inputDate: new Date() // дата игры
};
var it2 = {
    inputName: "Введите имя",
    inputTotalScore: 0,
    inputScore: 0,
    allUsers:0,
    inputDate: new Date() // дата игры
};
var counter = setInterval(timer, 1000);
var count = 0;
var message = "";
var random_k1_left = Math.random( );// рандомное расположение в начеле игры куб 1
var random_k1_top = Math.random( );
var k1_left = random_k1_left * 90;
var k1_top = random_k1_top * 90;
document.getElementById("k1").style.left =k1_left+"%";
document.getElementById("k1").style.top =k1_top+"%";
var random_k2_left = Math.random( );// рандомное расположение в начеле игры куб 2
var random_k2_top = Math.random( );
var k2_left = random_k2_left * 90;
var k2_top = random_k2_top * 90;
document.getElementById("k2").style.left =k2_left+"%";
document.getElementById("k2").style.top =k2_top+"%";
var random_k3_left = Math.random( );// рандомное расположение в начеле игры куб 3
var random_k3_top = Math.random( );
var k3_left = random_k3_left * 90;
var k3_top = random_k3_top * 90;
document.getElementById("k3").style.left =k3_left+"%";
document.getElementById("k3").style.top =k3_top+"%";
var random_k4_left = Math.random( );// рандомное расположение в начеле игры куб 4
var random_k4_top = Math.random( );
var k4_left = random_k4_left * 90;
var k4_top = random_k4_top * 90;
document.getElementById("k4").style.left =k4_left+"%";
document.getElementById("k4").style.top =k4_top+"%";
var random_k5_top = Math.random( ); // рандомное расположение в начеле игры куб 5
var random_k5_left = Math.random( );
var k5_left = random_k5_left * 90;
var k5_top = random_k5_top * 90;
document.getElementById("k5").style.left =k5_left+"%";
document.getElementById("k5").style.top =k5_top+"%";
var random_k6_top = Math.random( ); // рандомное расположение в начеле игры куб 6
var random_k6_left = Math.random( );
var k6_left = random_k6_left * 90;
var k6_top = random_k6_top * 90;
document.getElementById("k6").style.left =k6_left+"%";
document.getElementById("k6").style.top =k6_top+"%";
function myFunction_k1() { // рандомное расположение в при клике куб 1
    it.inputScore = 10;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k1_left = Math.random( );
    random_k1_top = Math.random( );
    k1_left = random_k1_left * 90;
    k1_top = random_k1_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k1").style.left =k1_left+"%";
    document.getElementById("k1").style.top =k1_top+"%";
}
function myFunction_k2() {// рандомное расположение в при клике куб 2
    it.inputScore = 2;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k2_left = Math.random( );
    random_k2_top = Math.random( );
    k2_left = random_k2_left * 90;
    k2_top = random_k2_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k2").style.left =k2_left+"%";
    document.getElementById("k2").style.top =k2_top+"%";
}
function myFunction_k3() {// рандомное расположение в при клике куб 3
    it.inputScore = 3;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k3_left = Math.random( );
    random_k3_top = Math.random( );
    k3_left = random_k3_left * 90;
    k3_top = random_k3_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k3").style.left =k3_left+"%";
    document.getElementById("k3").style.top =k3_top+"%";
}
function myFunction_k4() {// рандомное расположение в при клике куб 4
    it.inputScore = 4;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k4_left = Math.random( );
    random_k4_top = Math.random( );
    k4_left = random_k4_left * 90;
    k4_top = random_k4_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k4").style.left =k4_left+"%";
    document.getElementById("k4").style.top =k4_top+"%";
}
function myFunction_k5() {// рандомное расположение в при клике куб 5
    it.inputScore = 5;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k5_left = Math.random( );
    random_k5_top = Math.random( );
    k5_left = random_k5_left * 90;
    k5_top = random_k5_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k5").style.left =k5_left+"%";
    document.getElementById("k5").style.top =k5_top+"%";
}
function myFunction_k6() {// рандомное расположение в при клике куб 5
    it.inputScore = -50;
    it.inputTotalScore = it.inputTotalScore + it.inputScore;
    random_k6_left = Math.random( );
    random_k6_top = Math.random( );
    k6_left = random_k6_left * 90;
    k6_top = random_k6_top * 90;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    document.getElementById("k6").style.left =k6_left+"%";
    document.getElementById("k6").style.top =k6_top+"%";
}
function myFunction_Stop() {
    count = 0;
    clearInterval(counter);
    myFunction_Hide();
}
function myFunction_Start() {
    console.log('start');
    myFunction_Random();
    document.getElementById("b1-s").style.display = 'none';
    document.getElementById("b1-p").style.display = 'inline';
    it.inputTotalScore = 0;
    document.getElementById("points").innerHTML = it.inputTotalScore;
    myFunction_Show();
    counter = setInterval(timer, 1000);
    count = 60;
    function timer() {
        count = count - 1;
        console.log(count);
        if (count < 1) {
            clearInterval(counter);
            document.getElementById("gametime").innerHTML= "0m : 0s";
            myFunction_Hide();
            document.getElementById("b1-p").style.display ='none';
            document.getElementById("b1-s").style.display ='inline';
            message = "Ваш результат: " + it.inputTotalScore + " points";
            if (it.inputTotalScore === 1) message = "Ваш результат только: " + it.inputTotalScore + " point";
            if (it.inputTotalScore === 2) message = "Ваш результат только: " + it.inputTotalScore + " points";
            if (it.inputTotalScore === 3) message = "Ваш результат только: " + it.inputTotalScore + " points";
            if (it.inputTotalScore === 4) message = "Ваш результат только: " + it.inputTotalScore + " points";
            if (it.inputTotalScore === 5) message = "Ваш результат только: " + it.inputTotalScore + " points";
            myFunction_Alert();
            return;
        }
        var minutes = Math.floor(count / 60) % 60;
        var seconds = count % 60;
        document.getElementById("gametime").innerHTML= minutes + "m : " + seconds + "s";
    }
  }
function myFunction_Pause() {
    console.log('pause');
    alert("Для продолжения жми ОК )))");
}
function myFunction_NewGame() {
    console.log('new game');
    myFunction_Random();
    myFunction_Stop();
    it.inputTotalScore = 0;
    myFunction_Read();
    document.getElementById("points").innerHTML = it.inputTotalScore;
    myFunction_Start();
}
function myFunction_Alert() {
    $("#myModalBox").modal('show');
    document.getElementById("modal_save").innerHTML= message;
}
function myFunction_Random() {
    random_k1_left = Math.random();// рандомное расположение в начеле игры куб 1
    random_k1_top = Math.random();
    k1_left = random_k1_left * 100;
    k1_top = random_k1_top * 100;
    document.getElementById("k1").style.left = k1_left + "%";
    document.getElementById("k1").style.top = k1_top + "%";
    random_k2_left = Math.random();// рандомное расположение в начеле игры куб 2
    random_k2_top = Math.random();
    k2_left = random_k2_left * 100;
    k2_top = random_k2_top * 100;
    document.getElementById("k2").style.left = k2_left + "%";
    document.getElementById("k2").style.top = k2_top + "%";
    random_k3_left = Math.random();// рандомное расположение в начеле игры куб 3
    random_k3_top = Math.random();
    k3_left = random_k3_left * 100;
    k3_top = random_k3_top * 100;
    document.getElementById("k3").style.left = k3_left + "%";
    document.getElementById("k3").style.top = k3_top + "%";
    random_k4_left = Math.random();// рандомное расположение в начеле игры куб 4
    random_k4_top = Math.random();
    k4_left = random_k4_left * 100;
    k4_top = random_k4_top * 100;
    document.getElementById("k4").style.left = k4_left + "%";
    document.getElementById("k4").style.top = k4_top + "%";
    random_k5_left = Math.random();// рандомное расположение в начеле игры куб 5
    random_k5_top = Math.random();
    k5_left = random_k5_left * 100;
    k5_top = random_k5_top * 100;
    document.getElementById("k5").style.left = k5_left + "%";
    document.getElementById("k5").style.top = k5_top + "%";
    random_k6_left = Math.random();// рандомное расположение в начеле игры куб 5
    random_k6_top = Math.random();
    k6_left = random_k6_left * 100;
    k6_top = random_k6_top * 100;
    document.getElementById("k6").style.left = k6_left + "%";
    document.getElementById("k6").style.top = k6_top + "%";
}
function myFunction_Hide() {
    document.getElementById("k1").style.display = 'none';
    document.getElementById("k2").style.display = 'none';
    document.getElementById("k3").style.display = 'none';
    document.getElementById("k4").style.display = 'none';
    document.getElementById("k5").style.display = 'none';
    document.getElementById("k6").style.display = 'none';
}
function myFunction_Show() {
    document.getElementById("k1").style.display = 'inline';
    document.getElementById("k2").style.display = 'inline';
    document.getElementById("k3").style.display = 'inline';
    document.getElementById("k4").style.display = 'inline';
    document.getElementById("k5").style.display = 'inline';
    document.getElementById("k6").style.display = 'inline';
}
function myFunction_Save() {
    it.inputName=document.getElementById("pName").value;
    it.inputDate=new Date(); // дата сохранения
    localStorage.setItem (it.allUsers, JSON.stringify(it)); // save to localStorage   id:it.allUsers
    it.allUsers = it.allUsers + 1;
    if (it.allUsers === 17) it.allUsers = 0;
    myFunction_Read();
}
function myFunction_Read() {
    var dat1 = JSON.parse(localStorage.getItem('0'));
    var dat2 = JSON.parse(localStorage.getItem('1'));
    var dat3 = JSON.parse(localStorage.getItem('2'));
    var dat4 = JSON.parse(localStorage.getItem('3'));
    var dat5 = JSON.parse(localStorage.getItem('4'));
    var dat6 = JSON.parse(localStorage.getItem('5'));
    var dat7 = JSON.parse(localStorage.getItem('6'));
    var dat8 = JSON.parse(localStorage.getItem('7'));
    var dat9 = JSON.parse(localStorage.getItem('8'));
    var dat10 = JSON.parse(localStorage.getItem('9'));
    var dat11 = JSON.parse(localStorage.getItem('10'));
    var dat12 = JSON.parse(localStorage.getItem('11'));
    var dat13 = JSON.parse(localStorage.getItem('12'));
    var dat14 = JSON.parse(localStorage.getItem('13'));
    var dat15 = JSON.parse(localStorage.getItem('14'));
    var dat16 = JSON.parse(localStorage.getItem('15'));
    var dat17 = JSON.parse(localStorage.getItem('16'));
       var check = null;
    if (dat1 === check){dat1 = it2;
        document.getElementById("dat_1").style.display = 'none';}
    else {document.getElementById("dat_1").style.display = 'inline';}
    if (dat2 === check){dat2 = it2;
        document.getElementById("dat_2").style.display = 'none';}
    else {document.getElementById("dat_2").style.display = 'inline';}
    if (dat3 === check){dat3 = it2;
        document.getElementById("dat_3").style.display = 'none';}
    else {document.getElementById("dat_3").style.display = 'inline';}
    if (dat4 === check){dat4 = it2;
         document.getElementById("dat_4").style.display = 'none';}
    else {document.getElementById("dat_4").style.display = 'inline';}
    if (dat5 === check){dat5 = it2;
         document.getElementById("dat_5").style.display = 'none';}
    else {document.getElementById("dat_5").style.display = 'inline';}
    if (dat6 === check){dat6 = it2;
        document.getElementById("dat_6").style.display = 'none';}
    else {document.getElementById("dat_6").style.display = 'inline';}
    if (dat7 === check){dat7 = it2;
        document.getElementById("dat_7").style.display = 'none';}
    else {document.getElementById("dat_7").style.display = 'inline';}
    if (dat8 === check){dat8 = it2;
        document.getElementById("dat_8").style.display = 'none';}
    else {document.getElementById("dat_8").style.display = 'inline';}
    if (dat9 === check){dat9 = it2;
        document.getElementById("dat_9").style.display = 'none';}
    else {document.getElementById("dat_9").style.display = 'inline';}
    if (dat10 === check){dat10 = it2;
        document.getElementById("dat_10").style.display = 'none';}
    else {document.getElementById("dat_10").style.display = 'inline';}
    if (dat11 === check){dat11 = it2;
        document.getElementById("dat_11").style.display = 'none';}
    else {document.getElementById("dat_11").style.display = 'inline';}
    if (dat12 === check){dat12 = it2;
        document.getElementById("dat_12").style.display = 'none';}
    else {document.getElementById("dat_12").style.display = 'inline';}
    if (dat13 === check){dat13 = it2;
        document.getElementById("dat_13").style.display = 'none';}
    else {document.getElementById("dat_13").style.display = 'inline';}
    if (dat14 === check){dat14 = it2;
        document.getElementById("dat_14").style.display = 'none';}
    else {document.getElementById("dat_14").style.display = 'inline';}
    if (dat15 === check){dat15 = it2;
        document.getElementById("dat_15").style.display = 'none';}
    else {document.getElementById("dat_15").style.display = 'inline';}
    if (dat16 === check){dat16 = it2;
        document.getElementById("dat_16").style.display = 'none';}
    else {document.getElementById("dat_16").style.display = 'inline';}
    if (dat17 === check){dat17 = it2;
        document.getElementById("dat_17").style.display = 'none';}
    else {document.getElementById("dat_17").style.display = 'inline';}
    document.getElementById("dat_1").innerHTML = dat1.inputName + " : " + dat1.inputTotalScore + '<br>';
    document.getElementById("dat_2").innerHTML = dat2.inputName + " : " + dat2.inputTotalScore + '<br>';
    document.getElementById("dat_3").innerHTML = dat3.inputName + " : " + dat3.inputTotalScore + '<br>';
    document.getElementById("dat_4").innerHTML = dat4.inputName + " : " + dat4.inputTotalScore + '<br>';
    document.getElementById("dat_5").innerHTML = dat5.inputName + " : " + dat5.inputTotalScore + '<br>';
    document.getElementById("dat_6").innerHTML = dat6.inputName + " : " + dat6.inputTotalScore + '<br>';
    document.getElementById("dat_7").innerHTML = dat7.inputName + " : " + dat7.inputTotalScore + '<br>';
    document.getElementById("dat_8").innerHTML = dat8.inputName + " : " + dat8.inputTotalScore + '<br>';
    document.getElementById("dat_9").innerHTML = dat9.inputName + " : " + dat9.inputTotalScore + '<br>';
    document.getElementById("dat_10").innerHTML = dat10.inputName + " : " + dat10.inputTotalScore + '<br>';
    document.getElementById("dat_11").innerHTML = dat11.inputName + " : " + dat11.inputTotalScore + '<br>';
    document.getElementById("dat_12").innerHTML = dat12.inputName + " : " + dat12.inputTotalScore + '<br>';
    document.getElementById("dat_13").innerHTML = dat13.inputName + " : " + dat13.inputTotalScore + '<br>';
    document.getElementById("dat_14").innerHTML = dat14.inputName + " : " + dat14.inputTotalScore + '<br>';
    document.getElementById("dat_15").innerHTML = dat15.inputName + " : " + dat15.inputTotalScore + '<br>';
    document.getElementById("dat_16").innerHTML = dat16.inputName + " : " + dat16.inputTotalScore + '<br>';
    document.getElementById("dat_17").innerHTML = dat17.inputName + " : " + dat17.inputTotalScore + '<br>';
    document.getElementById("y1").innerHTML = dat1.inputName;
    document.getElementById("y2").innerHTML = dat2.inputName;
    document.getElementById("y3").innerHTML = dat3.inputName;
    document.getElementById("y4").innerHTML = dat4.inputName;
    document.getElementById("y5").innerHTML = dat5.inputName;
    document.getElementById("yy1").style.width = dat1.inputTotalScore/7 + "%";
    document.getElementById("yy2").style.width = dat2.inputTotalScore/7 + "%";
    document.getElementById("yy3").style.width = dat3.inputTotalScore/7 + "%";
    document.getElementById("yy4").style.width = dat4.inputTotalScore/7 + "%";
    document.getElementById("yy5").style.width = dat5.inputTotalScore/7 + "%";
}

