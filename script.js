/**
 * Created by abelghazinyan on 7/7/17.
 */
var ctof=true;
var tmp=0;
var bar1=document.getElementById('bar1');
var bar2=document.getElementById('bar2');
var in1=document.getElementById('in1');
var in2=document.getElementById('in2');

function calculate(){

    if(ctof){
        if(in1.value>100)
            in1.value=100;
        if(in1.value<-100)
            in1.value=-100;
        in2.value=parseInt(in1.value)*9/5+32;
        bar1.style.height=(200+(parseInt(in1.value))*2)+"px";
        bar2.style.height=(200+(parseInt(in2.value))*50/53)+"px";

    }else{
        if(in1.value>212)
            in1.value=212;
        if(in1.value<-212)
            in1.value=-212;
        in2.value=(in1.value-32)*5/9;
        bar1.style.height=(200+(parseInt(in1.value))*50/53)+"px";
        bar2.style.height=(200+(parseInt(in2))*2)+"px";
    }

}

in1.oninput = calculate;

function change(){
    ctof=!ctof;
    tmp= in1.value;
    in1.value=in2.value;
    document.getElementById('in2').value=tmp;
    if(ctof) {
        document.getElementById('label1').textContent = "Celsius";
        document.getElementById('label2').textContent = "Fahrenheit";
        bar1.style.height=(200+(parseInt(in1.value))*2)+"px";
        bar2.style.height=(200+(parseInt(document.getElementById('in2').value))*50/53)+"px";

    }else{
        document.getElementById('label1').textContent = "Fahrenheit";
        document.getElementById('label2').textContent = "Celsius";
        bar1.style.height=(200+(parseInt(in1.value))*50/53)+"px";
        bar2.style.height=(200+(parseInt(in2.value))*2)+"px";
    }
}
in1.value=0;
in2.value=32;
calculate();
