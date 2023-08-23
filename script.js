
function insert(num) {
  document.getElementById("result").value += num
}

function cal(fn) {
  return new Function('return ' + fn)();
}
function equals() {
  var txt = document.getElementById("result").value;
  if (txt)
    document.getElementById("result").value = cal(txt);
  else
    document.getElementById("result").value = 'ERROR'

}

function clean() {
  document.getElementById("result").value = "";
}
function pow() {
  document.getElementById("result").value = Math.pow(document.getElementById("result").value, 2);

}
function back() {
  var txt = document.getElementById("result").value;
  document.getElementById("result").value = txt.substring(0, txt.length - 1);
}
