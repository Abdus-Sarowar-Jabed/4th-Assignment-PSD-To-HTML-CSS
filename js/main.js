$(document).ready(function(){
    
    //STICKY MENU
    
    $(".js-about").waypoint(function(direction){
        if (direction == "down") {
            $(".home").addClass("sticky");
        } else {
            $(".home").removeClass("sticky");
        }
    })
    
})