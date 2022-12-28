/*
function fieldRequiredErr()
{
    $("#fieldRequiredID").show();
}
*/
$(document).ready(function() {
    $("#enterID").click(function() {
        console.log("Clicked enter");
        if ($("#12").prop("checked") || $("#24").prop("checked"))
        {
            return true;
        }
        else 
        {
            $("#fieldRequiredID").show();
            return false;
        }
    });
});