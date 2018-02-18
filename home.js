$(document).ready(function() {
    $("#button").click(function () {
        console.log("Working on it")
        $.ajax({
            url: 'http://35.161.105.159/translate',
            type: 'POST',
            data: JSON.stringify({"text":$("#text").val()}),
            contentType: 'application/json; charset=utf-8',
            timeout: 3000,
            dataType: 'json',
            async: true,
            success: function(msg) {
                alert(msg);
            }
        });
    })
});
