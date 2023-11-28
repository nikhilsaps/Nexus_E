chrome.runtime.onInstalled.addListener(function () {
  const contextMenus = [
    { id: "taskOpenByID", title: "Open Task" },
    { id: "17track", title: "17track" },
    { id: "phtool", title: "Phone Tool" }
  ];

  contextMenus.forEach(menu => {
    chrome.contextMenus.create({
      id: menu.id,
      title: menu.title,
      contexts: ["page", "selection"]
    });
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  let url;
  switch (info.menuItemId) {
    case "taskOpenByID":
      url = "https://nautilus-eu.amazon-corp.com/investigations/" + info.selectionText;
      break;
    case "17track":
      url = "https://t.17track.net/en#nums=" + info.selectionText;
      break;
    case "phtool":
      url = "https://phonetool.amazon.com/users/" + info.selectionText;
      break;
  }

  if (url) {
    chrome.tabs.create({ url });
  }
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading') {
    chrome.storage.local.get(['script1Enabled','script2Enabled'], function(result) {
      var script1Enabled = result.script1Enabled || false;
      var script2Enabled = result.script2Enabled || false;
      if (script1Enabled) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['neq.js']

        });
      }
       if (script2Enabled) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['eq.js']

        });
      }
      
    });
  }
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get(['script4Enabled'], function(result) {
      var script4Enabled = result.script4Enabled || false;
    
      if (script4Enabled) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['insight.js']
        });
      }
    });
  }
});
