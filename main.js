// grabs all tabs in current window (whichever I access the extension from)
// tabs is an array of all tabs in the current window. property is called title.
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  let tabsList = document.getElementById('tabs');

  for (let i = 0; i < tabs.length; i++) {
    // console.log('TABS INPUT:', tabs);
    // console.log('TABS[i]:', tabs[i]);

    let tabLink = tabs[i].url;
    let tabTitle = tabs[i].title;
    // console.log(tabLink);
    // console.log(typeof(tabLink));
    let link = document.createElement('a');
    link.setAttribute('href',tabLink);
    link.innerHTML = tabTitle + '<br>';
    tabsList.appendChild(link);
  }

  function onUpdated(tabs) {
    console.log(`Updated tab: ${tabs.id}`);
  }

  function updateTab() {
    let updating = chrome.tabs.update(tabs[0].id, {
        active: true
    });
    // updating.then(onUpdated);
  }

  function updateTab() {
    let updating = chrome.tabs.update(tabs[0].id, {
        active: true
    });
    // updating.then(onUpdated);
  }

  updateTab()

});