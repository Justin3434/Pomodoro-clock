$(document).ready(function() {
  var x = null;
  var breakLength = 5;
  var sessionLength = 25;

  $( "#breakminus" ).click(function(){
      if(x != null){
        clearInterval(x);
      }
      if(breakLength <= 1){
        breakLength = 6;
      }else{
        breakLength -= 1;
        $("#breaklength").html(breakLength);
        $("#sessiontime").html(sessionLength);
        $("#sessionname").html("Session");
        $("#startbutton").html("Start");
      }
   });
  $( "#breakplus" ).click(function(){
      if(x != null){
        clearInterval(x);
      }

      if(breakLength >= 20){
        breakLength = 5;
      }else
        breakLength += 1;
      $("#breaklength").html(breakLength);
      $("#sessiontime").html(sessionLength)
      $("#sessionname").html("Session");
      $("#startbutton").html("Start");
   });

  $( "#sessionminus" ).click(function(){
      if(x != null){
        clearInterval(x);
      }
      if(sessionLength <= 15){
        sessionLength = 25;
      }else{
        sessionLength -= 1;
      }
      $("#sessionlength").html(sessionLength);
      $("#sessiontime").html(sessionLength);
      $("#sessionname").html("Session");
      $("#startbutton").html("Start");
   });
  $( "#sessionplus" ).click(function(){
      if(x != null){
        clearInterval(x);
      }

      if(sessionLength >= 45){
         sessionLength = 25;
      }else
        sessionLength += 1;
      $("#sessionlength").html(sessionLength);
      $("#sessiontime").html(sessionLength);
      $("#sessionname").html("Session");
      $("#startbutton").html("Start");
   });



  var countDownDate;
  var distance;

  $( "#startbutton" ).click(function(){
      if(x != null){
        clearInterval(x);
        $("#sessiontime").html(sessionLength);
        $("#startbutton").html("Restart");
      }
      $("#startbutton").html("Restart");
      var sessionCounter = Number($("#sessiontime").html());;
      var breakCounter = Number($("#breaklength").html());
      var countDownDate = new Date().getTime() + sessionCounter * 60000;
      var breakCountDown = new Date().getTime() + breakCounter * 60000;
      x = setInterval(theCounter, 1000);

    function theCounter() {
      var currentTime = new Date().getTime();
      distance = countDownDate - currentTime;

      var theMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var theSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      $("#sessiontime").html(theMinutes + ":" + theSeconds);

      if(distance < 0){
         var switchStatement = new Date().getTime() - sessionCounter * 60000;
         switchStatement--;
         currentTime = new Date().getTime() - sessionCounter * 60000;
         distance = breakCountDown - currentTime;

         theMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         theSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#sessiontime").html(theMinutes + ":" + theSeconds);
        $("#sessionname").html("Break");
        if(distance < 0){
          $("#sessiontime").html("Timer Done");
        }

      }

    }


  });

});
