$('#chatBtn').on('click', function(e)  {
    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.querySelector('.container');
    var btnClose = document.getElementById('btnClose');
    
    if(!$(this).hasClass("opened")){
      //code for open & strikethrough
      overlay.style.display = 'none';
      $(this).addClass("opened strike");
    }else{
      //code for close & original state
      $(this).removeClass("opened strike");
      overlay.style.display = 'block';
    }  
  });

  function()
  var firstname1 = document.getElementById("fname");
  var postcode = document.getElementById("pcode");
  var travel = document.getElementById("trav");
  var week = document.getElementById("week");
  var time = document.getElementById("time");FCERQQQ

//  document.writeln(firstname1+postcode+travel+week+time).value;

  const input = document.querySelector('#input');
  input.addEventListener('change', (e) => {
  const isValid = e.target.checkValidity();
  console.log(isValid);
  });
