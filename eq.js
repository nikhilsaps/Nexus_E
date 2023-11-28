var p = document.createElement("div");
p.innerHTML = `<div class="popup">
  <h2 class="popup-title"></h2>
  <button class="popup-toggle-btn">&#9660; Actions</button>
  <div class="popup-items">
    <a class="popup-item" id="WB">Writeback</a>
    <a class="popup-item" id="LW">Lastword</a>
    <a class="popup-item" id="WU">Wrapping up</a>
    <!-- Add more items as needed -->
  </div>`;

p.setAttribute("class", "popup");
document.body.appendChild(p);

var s = document.createElement("style");
s.textContent = `.popup{font-family:Arial,sans-serif;position:fixed;z-index:9999;bottom:15px;left:15px;width:100px;background-color:#fff;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);overflow:hidden;transition:transform .3s ease}.popup-title{text-align:center;margin:10px 0;color:#333}.popup-toggle-btn{display:block;width:100%;padding:8px;border:none;background-color:#3498db;color:#fff;font-size:14px;cursor:pointer}.popup-toggle-btn:hover{background-color:#2980b9}.popup-items{display:none;background-color:#f9f9f9;padding:8px 0}.popup-item{display:block;padding:8px;text-decoration:none;color:#333;transition:background-color .3s}.popup-item:hover{background-color:#e0e0e0}.popup.active{transform:translateY(-100%)}`;

document.head.appendChild(s);

var items = document.querySelector('.popup-items');
var toggleBtn = document.querySelector('.popup-toggle-btn');
var jsonData = {
  "WB": "Writeback \n data",
  "LW": "Lastword data",
  "WU": "Wrapping up data"
  // Add more data as needed
};

toggleBtn.addEventListener('click', function () {
  items.style.display = (items.style.display === 'block') ? 'none' : 'block';
});

var popupItems = document.querySelectorAll('.popup-item');
popupItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var itemId = this.id;
    var modifiedData = modifyString(jsonData[itemId]);
    copyToClipboard(modifiedData);
    items.style.display = 'none';
  });
});

function copyToClipboard(value) {
  const tempInput = document.createElement("textarea");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  tempInput.remove();
}

function modifyString(dataString) {
  // Modify the string as needed
  // For example, add a prefix
  return "Modified: " + dataString;
}
