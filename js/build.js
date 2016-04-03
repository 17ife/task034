var config = {
    row:6,
    column:7
}

var cubebox = {
    deg:0,
    forward : 0,// 0-up 1-left 2-bottom 3-right 
    topPos:23,
    leftPos:43,
    TURNLEFT:function(cube){
        this.forward++;
        if(this.forward==4){
            this.forward = this.forward - 4;
        }
        this.deg -= 90;
        cube.style.transform = "rotate(" + this.deg + "deg)";
    },
    TURNRIGHT:function(cube){
        this.forward--;
        if(this.forward==-1){
            this.forward = this.forward + 4;
        }
        this.deg += 90;
        cube.style.transform = "rotate(" + this.deg + "deg)";
    },
    TURNBACK:function(cube){
        this.forward = this.forward + 2;
        if(this.forward>3){
            this.forward = this.forward - 4;
        }
        if(this.forward<0){
            this.forward = this.forward + 4;
        }
        this.deg += 180;
        cube.style.transform = "rotate(" + this.deg + "deg)";
    },
    GO:function(cube){
        var next = this.At;
        if(this.forward == 0){
            this.topPos -= 42;
            if(this.topPos < 23){
               this.topPos += 42;
               return
            }
            cube.style.top = this.topPos + 'px';
        }else if(this.forward == 2){
            this.topPos += 42;
            if(this.topPos > 23+ 42*(config.column-1)){
               this.topPos -= 42;
               return
            }
            cube.style.top = this.topPos + 'px';
        }else if(this.forward == 1){
            this.leftPos -= 42
            if(this.leftPos<42){
               this.leftPos += 42
               return
            }
            cube.style.left = this.leftPos + 'px';
        }else if(this.forward == 3){
            this.leftPos += 42;
            if(this.leftPos> 43+42*(config.row-1)){
               this.leftPos -= 42
               return
            }
            cube.style.left = this.leftPos + 'px';
        }   
    },
    TRALEF:function(cube){
        this.leftPos -= 42
        if(this.leftPos<42){
            this.leftPos += 42
            return
        }
        cube.style.left = this.leftPos + 'px';
    },
    TRATOP:function(cube){
        this.topPos -= 42;
        if(this.topPos < 23){
            this.topPos += 42;
            return
        }
        cube.style.top = this.topPos + 'px';
    },
    TRARIG:function(cube){
        this.leftPos += 42;
        if(this.leftPos> 43+42*(config.row-1)){
            this.leftPos -= 42
            return
        }
        cube.style.left = this.leftPos + 'px';
    },
    TRABOT:function(cube){
        this.topPos += 42;
        if(this.topPos > 23+ 42*(config.column-1)){
            this.topPos -= 42;
            return
        }
        cube.style.top = this.topPos + 'px';
    },
    MOVLEF:function(cube){
        this.forward = 1;
        this.deg = -90;
        cube.style.transform = "rotate(" + this.deg + "deg)";
        this.GO(cube);
    },
    MOVTOP:function(cube){
        this.forward = 0;
        this.deg = 0;
        cube.style.transform = "rotate(" + this.deg + "deg)";
        this.GO(cube);
    },
    MOVRIG:function(cube){
        this.forward = 3;
        this.deg = 90;
        cube.style.transform = "rotate(" + this.deg + "deg)";
        this.GO(cube);
    },
    MOVBOT:function(cube){
        this.forward = 2;
        this.deg = 180;
        cube.style.transform = "rotate(" + this.deg + "deg)";
        this.GO(cube);
    },
    init:function(cube){
        var startAt = Math.ceil(Math.random() * config.row * config.column) -1,//随机起始点
            forwardAT = Math.ceil(Math.random()*100);
        // 
        // this.deg = (-90)*forward;
        this.forward =  (forwardAT % 4);
        this.deg = (-90)*this.forward;
        cube.style.transform = "rotate(" + this.deg + "deg)";
        var x = startAt % config.row;
        var y = (startAt - x)/config.row;
        this.topPos += 42*y;
        this.leftPos += 42*x;

        cube.style.top = this.topPos + 'px';
        cube.style.left = this.leftPos + 'px';
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

function init(){
    var cube = document.getElementById("cube")
    cubebox.init(cube);
    //bind events
    document.getElementById("tl").addEventListener("click",function(){
        cubebox.TURNLEFT(cube);
    })
    document.getElementById("tr").addEventListener("click",function(){
        cubebox.TURNRIGHT(cube);
    })
    document.getElementById("tb").addEventListener("click",function(){
        cubebox.TURNBACK(cube);
    })
    document.getElementById("go").addEventListener("click",function(){
        cubebox.GO(cube);
    })
    document.getElementById("execute").addEventListener("click",function(){
       var order = document.getElementById("order").value;
       cubebox[order](cube);
       //cubebox.move(cube);
    })
}

buildGrid();
init();