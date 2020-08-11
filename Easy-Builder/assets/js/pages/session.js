$(document).ready(function() {
    
    "use strict";
    $( document ).idleTimer( 10000 );
        $( document ).on( "idle.idleTimer", function(event, elem, obj) {
            $('#idle-modal').modal('show');
            $( document ).idleTimer( 5000 );
            var logOut = setTimeout(function() {
                window.location.href = "sign-in.html";
            }, 10000);
            
            var sec = 10;
            var timer = setInterval(function() { 
                $('#sessionSecondsReconnecting').text(--sec);
                if (sec == 0) {
                    $('#hideMsg').fadeOut('fast');
                    clearInterval(timer);
                } 
            }, 1000);
            document.querySelector('#extendSession').onclick = function(){
                clearTimeout(logOut);
                clearInterval(timer);
                setTimeout(function() {
                    $('#sessionSecondsReconnecting').text(10);
                }, 5000);
            };
        });
});