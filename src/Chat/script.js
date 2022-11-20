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