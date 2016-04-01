var config = {
    row:6,
    column:7
}

var cubebox = {
    forward : 0,// 0-up 1-right 2-bottom 3-left 
    At:0,
    turnLeft:function(){
        this.forward++;
        if(this.forward==4){
            this.forward = this.forward - 4;
        }
    },
    turnRight:function(){
        this.forward--;
        if(this.forward==-1){
            this.forward = this.forward + 4;
        }
    },
    turnBack:function(){
        this.forward = this.forward + 2;
        if(this.forward>3){
            this.forward = this.forward - 4;
        }
        if(this.forward<0){
            this.forward = this.forward + 4;
        }
    },
    move:function(next){
        this.forward = next ;
    }
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

function turnRight(){
    var cube = document.getElementById("cube");
    if(cubebox.forward == 0 ){
        cube.style.animation = "topToRight 1s";
    }
    if(cubebox.forward == 1 ){
        cube.style.animation = "rightToBottom 1s";
    }
    if(cubebox.forward == 2 ){
        cube.style.animation = "bottomToLeft 1s";
    }
    if(cubebox.forward == 3 ){
        cube.style.animation = "leftToTop 1s";
    }
    cube.style.animationFillMode="forwards";
    cubebox.turnLeft();
}

function turnLeft(){
    var cube = document.getElementById("cube");
    if(cubebox.forward == 0 ){
        cube.style.animation = "topToLeft 1s";
    }
    if(cubebox.forward == 1 ){
        cube.style.animation = "rightToTop 1s";
    }
    if(cubebox.forward == 2 ){
        cube.style.animation = "bottomToRight 1s";
    }
    if(cubebox.forward == 3 ){
        cube.style.animation = "leftToBottom 1s";
    }
    cube.style.animationFillMode="forwards";
    cubebox.turnRight();
}

function turnBack(){
    var cube = document.getElementById("cube");
    if(cubebox.forward == 0 ){
        cube.style.animation = "topTurnBack 1s";
    }
    if(cubebox.forward == 1 ){
        cube.style.animation = "rightTurnBack 1s";
    }
    if(cubebox.forward == 2 ){
        cube.style.animation = "bottomTurnBack 1s";
    }
    if(cubebox.forward == 3 ){
        cube.style.animation = "leftTurnBack 1s";
    }
    cube.style.animationFillMode="forwards";
    cubebox.turnBack();
}

function move(){
    var cube = document.getElementById("cube");
    if(cubebox.forward == 0 ){
        cube.style.animation = "topTurnBack 1s";
    }
    if(cubebox.forward == 1 ){
        cube.style.animation = "rightTurnBack 1s";
    }
    if(cubebox.forward == 2 ){
        cube.style.animation = "bottomTurnBack 1s";
    }
    if(cubebox.forward == 3 ){
        cube.style.animation = "leftTurnBack 1s";
    }
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
    document.getElementById("tr").addEventListener("click",function(){
        turnRight();
    })
    document.getElementById("tb").addEventListener("click",function(){
        turnBack();
    })
    
}

buildGrid();
init();