function input(a) {
    valuetab.a.value += a
}

function rem() {
    len=valuetab.a.value
    len = len.substring(0, len.length-1)
    valuetab.a.value = len

}
function clr() {
    valuetab.a.value=''
}
function eq() {
    valuetab.a.value=eval(valuetab.a.value)
}
