
const btn = document.getElementById("submit");
btn.addEventListener("click", function() {
  var result,x,y,z,w,v;
  var match = document.getElementById('match').value;
  var winrateA = document.getElementById('winrateA').value;
  var winrateB = document.getElementById('winrateB').value;
  y = (winrateA/100)*match;
  x = ((100*y)-winrateB*match)/(winrateB-100);
  w = Math.ceil(x);
  console.log(x);
  if(x > 0){
    z = 'Anda memerlukan sekitar ' + w + ' win tanpa lose untuk mencapai winrate '+ winrateB + '%';
    result = document.getElementById('hasilB').innerHTML = z;
  }
  else 
  {
    v = Math.abs(w);
    z = 'Anda memerlukan sekitar ' + v + ' lose tanpa win untuk mencapai winrate '+ winrateB + '%';
    result = document.getElementById('hasilB').innerHTML = z;
  }

});