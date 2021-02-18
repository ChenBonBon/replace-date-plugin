document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("submit");

  btn.onclick = function () {
    const oldText = document.getElementById("oldText").value;
    const newText = document.getElementById("newText").value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code:
            "var oldText = '" + oldText + "'; var newText = '" + newText + "'",
        },
        function () {
          chrome.tabs.executeScript(tabs[0].id, {
            file: "js/replace.js",
          });
        }
      );
    });
  };
});
