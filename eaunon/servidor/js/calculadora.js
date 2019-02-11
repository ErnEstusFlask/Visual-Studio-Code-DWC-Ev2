var operation = document.getElementById("txt1");
var txt = document.getElementById("txt2");
var equl;
var lastPulsedNum=true;
var lastPulsedSign=false;
num1.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "1";
    }else{
        txt.value="";
        txt.value="1";
        lastPulsedNum=true;
    }
}
num2.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "2";
    }else{
        txt.value="";
        txt.value="2";
        lastPulsedNum=true;
    }
}
num3.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "3";
    }else{
        txt.value="";
        txt.value="3";
        lastPulsedNum=true;
    }
}
num4.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "4";
    }else{
        txt.value="";
        txt.value="4";
        lastPulsedNum=true;
    }
}
num5.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "5";
    }else{
        txt.value="";
        txt.value="5";
        lastPulsedNum=true;
    }
}
num6.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "6";
    }else{
        txt.value="";
        txt.value="6";
        lastPulsedNum=true;
    }
}
num7.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "7";
    }else{
        txt.value="";
        txt.value="7";
        lastPulsedNum=true;
    }
}
num8.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "8";
    }else{
        txt.value="";
        txt.value="8";
        lastPulsedNum=true;
    }
}
num9.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "9";
    }else{
        txt.value="";
        txt.value="9";
        lastPulsedNum=true;
    }
}
num0.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + "0";
    }else{
        txt.value="";
        txt.value="0";
        lastPulsedNum=true;
    }
}
numC.onclick = function(){
    lastPulsedSign=false;
    if(lastPulsedNum==true){
        txt.value= txt.value + ".";
    }else{
        txt.value="";
        txt.value=".";
        lastPulsedNum=true;
    }
}
clear.onclick = function(){
    txt.value= "";
    operation.value="";
}
clearL.onclick = function(){
    txt.value=txt.value.slice(0, -1);
}
plus.onclick = function(){
    if(lastPulsedSign==false){
        if(operation.value==""){
            operation.value=operation.value+txt.value;
            txt.value= operation.value;
            operation.value=operation.value+ "+";
            lastPulsedNum=false;
            lastPulsedSign=true;
        }else{
            equl=(operation.value+txt.value);
            var oper1;
            var oper2;
            var inst;
            var checker;
            var max=equl.length;
            for(i=1;i<max;i++){
                checker=equl.slice(i-1, i);
                if(checker=="+"||checker=="-"||checker=="/"||checker=="*"){
                    oper1=equl.slice(0, i-1);
                    inst=equl[i-1];
                    oper2=equl.slice(i, max);
                }
            }
            oper1=parseFloat(oper1);
            oper2=parseFloat(oper2);
            if(inst=="+"){
                operation.value="";
                txt.value= oper1+oper2 +"";
                operation.value= oper1+oper2 +"+";
                lastPulsedNum=false;
            }
            if(inst=="-"){
                operation.value="";
                txt.value= oper1-oper2 +"";
                operation.value= oper1-oper2 +"+";
                lastPulsedNum=false;
            }
            if(inst=="*"){
                operation.value="";
                txt.value= oper1*oper2 +"";
                operation.value= oper1*oper2 +"+";
                lastPulsedNum=false;
            }
            if(inst=="/"){
                operation.value="";
                txt.value= oper1/oper2 +"";
                operation.value= oper1/oper2 +"+";
                lastPulsedNum=false;
            }
            lastPulsedSign=true;
        }
    }
    
    
}
minus.onclick = function(){
    if(lastPulsedSign==false){
        if(operation.value==""){
            operation.value=operation.value+txt.value;
            txt.value= operation.value;
            operation.value=operation.value+ "-";
            lastPulsedNum=false;
            lastPulsedSign=true;
        }else{
            equl=(operation.value+txt.value);
            var oper1;
            var oper2;
            var inst;
            var checker;
            var max=equl.length;
            for(i=1;i<max;i++){
                checker=equl.slice(i-1, i);
                if(checker=="+"||checker=="-"||checker=="/"||checker=="*"){
                    oper1=equl.slice(0, i-1);
                    inst=equl[i-1];
                    oper2=equl.slice(i, max);
                }
            }
            oper1=parseFloat(oper1);
            oper2=parseFloat(oper2);
            if(inst=="+"){
                operation.value="";
                txt.value= oper1+oper2 +"";
                operation.value= oper1+oper2 +"-";
                lastPulsedNum=false;
            }
            if(inst=="-"){
                operation.value="";
                txt.value= oper1-oper2 +"";
                operation.value= oper1-oper2 +"-";
                lastPulsedNum=false;
            }
            if(inst=="*"){
                operation.value="";
                txt.value= oper1*oper2 +"";
                operation.value= oper1*oper2 +"-";
                lastPulsedNum=false;
            }
            if(inst=="/"){
                operation.value="";
                txt.value= oper1/oper2 +"";
                operation.value= oper1/oper2 +"-";
                lastPulsedNum=false;
            }
            lastPulsedSign=true;
        }
    }
    
}
mult.onclick = function(){
    if(lastPulsedSign==false){
        if(operation.value==""){
            operation.value=operation.value+txt.value;
            txt.value= operation.value;
            operation.value=operation.value+ "*";
            lastPulsedNum=false;
            lastPulsedSign=true;
        }else{
            equl=(operation.value+txt.value);
            var oper1;
            var oper2;
            var inst;
            var last=0;
            var checker;
            var max=equl.length;
            for(i=1;i<max;i++){
                checker=equl.slice(i-1, i);
                if(checker=="+"||checker=="-"||checker=="/"||checker=="*"){
                    oper1=equl.slice(0, i-1);
                    inst=equl[i-1];
                    oper2=equl.slice(i, max);
                }
            }
            oper1=parseFloat(oper1);
            oper2=parseFloat(oper2);
            if(inst=="+"){
                operation.value="";
                txt.value= oper1+oper2 +"";
                operation.value= oper1+oper2 +"*";
                lastPulsedNum=false;
            }
            if(inst=="-"){
                operation.value="";
                txt.value= oper1-oper2 +"";
                operation.value= oper1-oper2 +"*";
                lastPulsedNum=false;
            }
            if(inst=="*"){
                operation.value="";
                txt.value= oper1*oper2 +"";
                operation.value= oper1*oper2 +"*";
                lastPulsedNum=false;
            }
            if(inst=="/"){
                operation.value="";
                txt.value= oper1/oper2 +"";
                operation.value= oper1/oper2 +"*";
                lastPulsedNum=false;
            }
            lastPulsedSign=true;
        }
    }
    
}
divi.onclick = function(){
    if(lastPulsedSign==false){
        if(operation.value==""){
            operation.value=operation.value+txt.value;
            txt.value= operation.value;
            operation.value=operation.value+ "/";
            lastPulsedNum=false;
            lastPulsedSign=true;
        }else{
            equl=(operation.value+txt.value);
            var oper1;
            var oper2;
            var inst;
            var checker;
            var max=equl.length;
            for(i=1;i<max;i++){
                checker=equl.slice(i-1, i);
                if(checker=="+"||checker=="-"||checker=="/"||checker=="*"){
                    oper1=equl.slice(0, i-1);
                    inst=equl[i-1];
                    oper2=equl.slice(i, max);
                }
            }
            oper1=parseFloat(oper1);
            oper2=parseFloat(oper2);
            if(inst=="+"){
                operation.value="";
                txt.value= oper1+oper2 +"";
                operation.value= oper1+oper2 +"/";
                lastPulsedNum=false;
            }
            if(inst=="-"){
                operation.value="";
                txt.value= oper1-oper2 +"";
                operation.value= oper1-oper2 +"/";
                lastPulsedNum=false;
            }
            if(inst=="*"){
                operation.value="";
                txt.value= oper1*oper2 +"";
                operation.value= oper1*oper2 +"/";
                lastPulsedNum=false;
            }
            if(inst=="/"){
                operation.value="";
                txt.value= oper1/oper2 +"";
                operation.value= oper1/oper2 +"/";
                lastPulsedNum=false;
            }
            lastPulsedSign=true;
        }
    }
    
}
equ.onclick = function(){
    if(lastPulsedSign==false){
        equl=(operation.value+txt.value);
        var oper1;
        var oper2;
        var inst;
        var checker;
        var max=equl.length;
        for(i=1;i<max;i++){
            checker=equl.slice(i-1, i);
            if(checker=="+"||checker=="-"||checker=="/"||checker=="*"){
                oper1=equl.slice(0, i-1);
                inst=equl[i-1];
                oper2=equl.slice(i, max);
            }
        }
        oper1=parseFloat(oper1);
        oper2=parseFloat(oper2);
        operation.value="";
        if(inst=="+"){
            txt.value= oper1+oper2;
            lastPulsedNum=false;
        }
        if(inst=="-"){
            txt.value= oper1-oper2;
            lastPulsedNum=false;
        }
        if(inst=="*"){
            txt.value= oper1*oper2;
            lastPulsedNum=false;
        }
        if(inst=="/"){
            txt.value= oper1/oper2;
            lastPulsedNum=false;
        }
    }
    
}

