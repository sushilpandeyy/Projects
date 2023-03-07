click=0
b=0
d=0
dr=0
w=0
l=0
t=0
const win = new Audio('wi.mp3');
const los = new Audio('lo.mp3');
const cli = new Audio('click.mp3');

function hit(){
   
    if(click==2){
document.getElementById("status").innerText="Press FIN To END"
document.getElementById('HBT').style.display= 'none';
    }
    document.getElementById('90').style.display= 'none';
    document.getElementById('91').style.display= 'none';
    document.getElementById('92').style.display= 'none';
    document.getElementById('sd').style.display= 'none';


    
    a= Math.floor(Math.random() * 10) + 1;
    console.log(a)
    photo(a)
    b=b+a
    console.log(b)
    document.getElementById("sy").innerText=b
   
//For the Dealer calculations
    c= Math.floor(Math.random() * 10) + 1;
    console.log(a)
   
    photod(c)
    d=d+c
    console.log(d)
    document.getElementById("sd").innerText=d
    cli.play();

}
function photo(card){
img=card+"S.png"
document.getElementById(click).src=img
}

function photod(card){
    img=card+"S.png"
    document.getElementById(click+90).src=img
    click=click+1
    }

function dea(){
click=0
b=0
d=0
document.getElementById('HBT').style.display= ''
document.getElementById("status").innerText="Press Hit For Next Card "
document.getElementById("command").innerText="Let's Play"
document.getElementById("0").src=""
document.getElementById("1").src=""
document.getElementById("2").src=""
document.getElementById("90").src=""
document.getElementById("91").src=""
document.getElementById("92").src=""
document.getElementById("sy").innerText=b
document.getElementById("sd").innerText=d
cli.play();
}
function fin(){
    t++
    document.getElementById('90').style.display= '';
    document.getElementById('91').style.display= '';
    document.getElementById('92').style.display= '';
    document.getElementById('sd').style.display= '';
    if(b>d && b<21){
        document.getElementById("command").innerText="WINNER"
        w++
        win.play()
    }
    else if(b==dr){
        document.getElementById("command").innerText="DRAW"
        dr++

    }
    else if(b==21){
    document.getElementById("command").innerText="WINNER"
    w++
    win.play();
        
    }
    else{
        document.getElementById("command").innerText="LOST"
        l++
        los.play()
    }

    cli.play();
    document.getElementById("status").innerText="Press Deal To Replay"
    document.getElementById("total").innerText=t
    document.getElementById("wins").innerText=w
    document.getElementById("losses").innerText=l
    document.getElementById("draw").innerText=dr

}
