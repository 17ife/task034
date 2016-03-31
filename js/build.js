var config = {
    row:6,
    column:7
}

function buildGrid(){
    var row = config.row,
        column = config.column,
        htmlStr = "";
    htmlStr += '<div id="cube" class="cube"><div class="cube-bar"></div></div>';    
    htmlStr += '<div class="group"><div class="box-bord"></div>';   
    for(var i = 0;i<row;i++){
        htmlStr += '<div class="box-bord">'+(i+1)+'</div>';
    }
    htmlStr +='</div>';
    for(var i = 0;i<column;i++){
        htmlStr += '<div class="group"><div class="box-bord">'+(i+1)+'</div>';
        for(var j = 0;j<row;j++){
            htmlStr += '<div class="box"></div>';
        }
        htmlStr +='</div>';
    }
    document.getElementById("Grid").innerHTML = htmlStr;
}

function turnLeft(){
    console.log("1")
    var cube = document.getElementById("cube");
    console.log(cube.style.transform)
}

function move(){
}

function init(){
    //随机位置、随机方向
    var startAt = Math.ceil(Math.random() * config.row * config.column) -1,
        forwardAT = Math.random(),
        forward = 0;
    window.startAt = startAt;
    if(forwardAT<0.25){
        forward = 0;
    }else if(forwardAT<0.5){
        forward = 1;
    }else if(forwardAT<0.75){
        forward = 2;
    }else{
        forward = 3;
    }
    window.forward = forward;
    
    //bind events
    document.getElementById("tl").addEventListener("click",function(){
        turnLeft();
    })
    
}

buildGrid();
init();