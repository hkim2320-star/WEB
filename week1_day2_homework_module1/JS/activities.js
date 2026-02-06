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

$(document).ready(function () {

  $("td").click(function () {
    var content = $(this).text();
    


    if (content != "Not Available") {
        $(this).toggleClass("tdhighlight");
    }

    var colIndex = $(this).index();
    var siteName = $("table tr:first-child").children().eq(colIndex).text();

    if ($(this).hasClass("tdhighlight")) {

      $("#displaySelected").css("visibility", "visible");
      $("#displaySelected").css("margin-top", "2em");
      $("#result").append("<p>" + content + " at " + siteName + "</p>");

    } else {
      $("#result p:contains('" + content + " at " + siteName + "')").remove();

      if ($("#result").has("p").length == false) {
        $("#displaySelected").css("visibility", "hidden");
        $("#displaySelected").css("margin-top", "0");
      }
      }
  });
});
