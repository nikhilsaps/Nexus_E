document.addEventListener("DOMContentLoaded", function () {
  // Get script toggle elements
  var scriptToggle1 = document.getElementById("scriptToggle1");
  var scriptToggle2 = document.getElementById("scriptToggle2");
  var scriptToggle4 = document.getElementById("scriptToggle4");

  // Retrieve toggle states from local storage
  chrome.storage.local.get(
    ["script1Enabled", "script2Enabled", "script4Enabled"],
    function (result) {
      // Set initial state of toggle elements based on stored values
      scriptToggle1.checked = result.script1Enabled || false;
      scriptToggle2.checked = result.script2Enabled || false;
      scriptToggle4.checked = result.script4Enabled || false;
    }
  );

  // Add event listeners to script toggle checkboxes
  scriptToggle1.addEventListener("change", toggleScript1);
  scriptToggle2.addEventListener("change", toggleScript2);
  scriptToggle4.addEventListener("change", toggleScript4);

  // Function to toggle script 1 execution
  function toggleScript1() {
    var script1Enabled = scriptToggle1.checked;
    chrome.storage.local.set({ script1Enabled: script1Enabled });
  }
   function toggleScript2() {
    var script2Enabled = scriptToggle2.checked;
    chrome.storage.local.set({ script2Enabled: script2Enabled });
  }

  // Function to toggle script 4 execution
  function toggleScript4() {
    var script4Enabled = scriptToggle4.checked;
    chrome.storage.local.set({ script4Enabled: script4Enabled });
  }
});