

// grabs all tabs in current window (whichever I access the extension from)
// tabs is an array of all tabs in the current window. property is called title.
const tabsListing = []

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  let tabsList = document.getElementById('tabs');

  for (let i = 0; i < tabs.length; i++) {
    console.log('TABS INPUT:', tabs);
    // console.log('TABS[i]:', tabs[i]);
    // tabsListing.push(tabs[i])
    let tabLink = tabs[i].id;
    let tabTitle = tabs[i].title;
    // console.log(tabLink);
    // console.log(typeof(tabLink));
    let link = document.createElement('a');
    link.setAttribute('href',tabLink);
    link.innerHTML = tabTitle + '<br>';
    tabsList.appendChild(link);
  }

  //function to be invoked by eventlistener when the link is clicked on the chrome extension
  function updateTab(tabID) {
    let updating = chrome.tabs.update(tabID, {
      active: true
    });
  }


  for (let i = 0; i < tabs.length; i++) {
    chrome.tabs.move(tabs[i].id, {index: Math.floor(Math.random() * (tabs.length - 0))})
  }
  

  const button = document.createElement("BUTTON")
  button.innerHTML = 'CLICK ME!';
  tabsList.appendChild(button);
  
});
