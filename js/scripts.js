// const brand = $("input:radio[name=fruit]:checked").val ();

// code to read value from animal selection //
// const animal = $("#animal").val();

$(document).ready(function () {
  $('form#info').submit(function () {
    const fruit = $("input:radio[name=fruit]:checked").val();
    const animal = parseInt($("#animal").val());
  
    // const result = fruit + animal
      
    if (animal >=2 && fruit === "orange") {
      $('#celebA').show();
    } else if (animal <2 && >5 && fruit === "orange") {
      $('#celebB').show();
    } else (animal <=5 && fruit === "orange") {
      $('#celebC').show();
    }
      
  
  
  
  
  });
});