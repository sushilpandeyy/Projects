//document.getElementById("Counter").innerText=5
let count = 0
let s1=0
let s2=0
let s3=0
function incre() {
count=count+1
document.getElementById("Counter").innerText=count
}
function S() {
s3=s2
s2=s1
s1=count
count=0
Counter.innerText=count
para.innerText=s1 + " - " + s2 + " - " +s3
}