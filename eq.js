var p = document.createElement("div");
p.innerHTML = `<div class="popup">
  <h2 class="popup-title"></h2>
  <button class="popup-toggle-btn">&#9660; Actions</button>
  <div class="popup-items">
    <a class="popup-item" id="WB">Writeback</a>
    <a class="popup-item" id="CAS">CAS</a>
    <a class="popup-item" id="TR">Temp_Reins</a>
    <a class="popup-item" id="RE_INS">Reinstate</a>
    <a class="popup-item" id="WU">Wrapping up</a>
    <a class="popup-item" id="TRANS">Transfer</a>
    <a class="popup-item" id="OTH">Others</a>
    <!-- Add more items as needed -->
  </div>`;

p.setAttribute("class", "popup");
document.body.appendChild(p);

var s = document.createElement("style");
s.textContent = `.popup{font-family:Arial,sans-serif;position:fixed;z-index:9999;bottom:10px;left:10px;width:100px;background-color:#fff;border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,0.1);overflow:hidden;transition:transform .3s ease}.popup-title{text-align:center;margin:8px 0;color:#333}.popup-toggle-btn{display:block;width:100%;padding:8px;border:none;background-color:#3498db;color:#fff;font-size:12px;cursor:pointer}.popup-toggle-btn:hover{background-color:#2980b9}.popup-items{display:none;background-color:#f9f9f9;padding:6px 0}.popup-item{display:block;padding:8px;text-decoration:none;color:#333;transition:background-color .3s}.popup-item:hover{background-color:#e0e0e0}.popup.active{transform:translateY(-100%)}`;

document.head.appendChild(s);

var items = document.querySelector('.popup-items');
var toggleBtn = document.querySelector('.popup-toggle-btn');
var jsonData = {
  "WB": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Solicit enforcement appeal \n Latest enforcement: Solicit \n Previous action date: \n Ab Type: DNR \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Deny appeal \n Gap ID/Toll Gate Login (if applicable):\n  SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",
  "CAS":"Clear abuse Section",
  "TR": "Temp Reinstate",
  "RE_INS": "Reinstate",
  "WU": "Wrapping up",
  "TRANS":"Transfer ",
  "OTH":"Others",
  
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
  let inv_annotations = document.getElementById("annotationText").value;
  let inv_anno= inv_annotations.split(" ");
  
  let updatedstring= dataString.replace(/Task ID:\w*/, `Task ID:${inv_anno[0]}`);
  updatedstring =updatedstring.replace(/Contact ID:\w*/,`Contact ID: ${inv_anno[1]}${inv_anno[2]}`);
  console.log(document.getElementsByClassName("pi-widgets nautilus-widgets")[0])

  return updatedstring;
}
//new 
