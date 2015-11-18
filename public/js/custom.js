$(document).ready(function(){
	$("#tablesList").hide();
    $("#listButton").click(function(){
        $("#tablesList").show();
        $("#floorPlan").hide();
        $(this).removeClass("btn-default");
        $(this).addClass("btn-primary");
        $("#floorButton").removeClass("btn-primary");
        $("#floorButton").addClass("btn-default");
    });
    $("#floorButton").click(function(){
    	$("#tablesList").hide();
        $("#floorPlan").show();
        $(this).removeClass("btn-default");
        $(this).addClass("btn-primary");
        $("#listButton").removeClass("btn-primary");
        $("#listButton").addClass("btn-default");
    });
    
});




