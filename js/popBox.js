$(document).ready(function () {
    $("#playerGrave").click(function () {
        $(".playerGravePop").fadeIn(300);
        positionPopup();
    });

    $(".playerGravePop > span, .playerGravePop").click(function () {
        $(".playerGravePop").fadeOut(300);
    });
});


$(document).ready(function () {
    $("#enemyGrave").click(function () {
        $(".enemyGravePop").fadeIn(300);
        positionPopup();
    });

    $(".enemyGravePop > span").click(function () {
        $(".enemyGravePop").fadeOut(300);
    });
});