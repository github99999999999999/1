//bot token
var telegram_bot_id = "5425838865:AAHrkbjZih-cSTvbsfLq1xW9Y1FwgESgYTk";
//chat id
var chat_id = -744968531;
var message;
var ready = function () {
    message = document.getElementById("message").value;
    message =   message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("message").value = "";
    return false;
};