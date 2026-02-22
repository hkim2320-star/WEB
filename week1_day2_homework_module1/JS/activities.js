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

function renderSelectedInModal(selectedArr) {
  if (selectedArr.length === 0) {
    $("#selectedList").html("<p>No activities selected.</p>");
    return;
  }

  let html = "<ul>";
  selectedArr.forEach(function(item) {
    html += "<li>" + item + "</li>";
  });
  html += "</ul>";

  $("#selectedList").html(html);
}

function openSelectedModal(selectedArr) {
  renderSelectedInModal(selectedArr);
  $("#selectedModal").modal("show");
}

$(document).ready(function () {
  function getSelectedItems() {
    let selectedArr = [];

    $("td.tdhighlight").each(function () {
      let activity = $(this).text().trim();
      let colIndex = $(this).index();
      let siteName = $("table tr:first-child").children().eq(colIndex).text().trim();
      selectedArr.push(activity + " at " + siteName);
    });

    return selectedArr;
  }

  function renderSelectedInModal(selectedArr) {
    if (selectedArr.length === 0) {
      $("#selectedList").html("<p>No activities selected.</p>");
      return;
    }

    let html = "<ul>";
    selectedArr.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul>";

    $("#selectedList").html(html);
  }

  $("#openSelected").click(function () {
    let selectedArr = getSelectedItems();
    renderSelectedInModal(selectedArr);
    $("#selectedModal").modal("show");
  });
});