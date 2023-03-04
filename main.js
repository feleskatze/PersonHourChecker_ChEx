document.getElementById("personHourChecker").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onRun,
  });
});

function onRun() {
  var ALERT_COLOR = "red";
  var SAFE_COLOR = "green"

  var tables = document.body.getElementsByTagName('table');
  var targetTable = tables[0];
  for (var i = 1; i < targetTable.rows.length; i++) {
    var cells = targetTable.rows[i].cells;

    if (cells[1].firstChild.data == cells[2].firstChild.data) {
      cells[1].style.backgroundColor = SAFE_COLOR;
      cells[2].style.backgroundColor = SAFE_COLOR;
    }
    else {
      cells[1].style.backgroundColor = ALERT_COLOR;
      cells[2].style.backgroundColor = ALERT_COLOR;
    }

    console.log(cells[3].firstChild.textContent);
    console.log("申請中");
    if (cells[3].firstChild.textContent == "申請中") {
      cells[3].style.backgroundColor = SAFE_COLOR;
      console.log("yes");
    }
    else {
      cells[3].style.backgroundColor = ALERT_COLOR;
      console.log("no");
    }

  }
}

