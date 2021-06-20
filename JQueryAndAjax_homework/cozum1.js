// görev 1
$(document).ready(function () {
    $("#gorev1 > button").click(function () {
      var basliklar = Array.from($("h2:lt(3)"));
      basliklar.forEach(baslik => {
        $("#gorev1 > ul").append("<li>" + baslik.textContent + "</li>");
      });
    });
  });
  
  
  // görev 2
  $(document).ready(function () {
    $("#gorev2 > button").click(function () {
      $('#gorev2 > input[type=text]').val("15");
    });
  });
  
  
  
  
  // görev 3
  $(document).ready(function () {
    $("#gorev3 > button").click(function () {
      $('#gorev3 > input[type=text]').val("15 amazing science facts that will blow your mind");
    });
  });
  
  
  // görev 4
  $(document).ready(function() {
  $("#gorev4").click(function() {
      var ogeler = Array.from($("p"));
      var basliklar = Array.from($("h2"));
      for(let i = 0; i < basliklar.length; i++) {
          basliklar[i].append(`(${ogeler[i].textContent.length})`);
      }
  });
  });
  
  
  
  // görev 5
  $(document).ready(function() {
    $("#gorev5").click(function(){
    $("h2:even").css(  "color", "orange");
    $("h2:odd").css(  "color", "blue");
    $("h1").css(  "color", "red");
    $("h3:nth-child(1)").css(  "color", "black");
  });
  });
  
  
  // görev 6
  $(document).ready(function () {
    $("#gorev6 > button").click(function () {
      var basliklar = Array.from($("h2:lt(15)"));
      basliklar.forEach(baslik => {
        $("h2:lt(1)").fadeOut();
      });
    });
  });
  $(document).ready(function () {
    $("#gorev6 > button").click(function () {
      var paragraflar = Array.from($("p:lt(15)"));
      paragraflar.forEach(parag => {
        $("p:lt(1)").fadeOut();
      });
    });
  });
  

  // görev 7
  $(document).ready(function () {
    $("#gorev7 > button").click(function () {
      var basliklar = Array.from($("h2:lt(15)"));
      var ilk = basliklar[1];
      var son = basliklar[basliklar.length - 1];
      $("#gorev7 > ul").append("<li>" + ilk.textContent + "</li>");
      $("#gorev7 > ul").append("<li>" + son.textContent + "</li>");
    });
  });
  
  // görev 8
  $(document).ready(function () {
    $("#gorev8 > button").click(function () {
      var baslık = $("<h3>");
      baslık.html("Lorem");
      $("h1").append(baslık);
      var metin = $("<p>");
      metin.addClass("met")
      $("h1").after(metin);
      $.ajax({
        url: "lorem.html",
        type: "get",
        success: function (sonuc) {
          for (var ad of sonuc) {
            $(".met").load("lorem.html")
          }
        }
      });
    });
  });
  
  
  
  // görev 9
  $("h2, h1").hover(function(){
    var fare = $(this).hover().text();
    $("#gorev9 > input[type=text]").val(fare);
  });
  // görev 10
  $(document).ready(function () {
    $("#gorev10 > button").click(function () {
        var divim = $("<div>");
        $("footer").append(divim);
        divim.addClass("dv");
        $('.dv').prepend('<img class = ".im" src = "check.png" width="100" height="100" style="position: fixed; bottom: 20px; right: 25px;"/>');
  
  });
  });