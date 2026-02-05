$(document).ready(function () {
    let selectableCells = $("tbody td").not(":first-child");
    selectableCells = selectableCells.filter(function () {
        return $(this).text().trim().toLowerCase() !== "not available";
    });
    selectableCells.addClass("canSelect");
    selectableCells.click(function () {
        $(this).toggleClass("selected");
    })
})