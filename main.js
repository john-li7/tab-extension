// grabs all tabs in current window (whichever I access the extension from)
// tabs is an array of all tabs in the current window. property is called title.

document.addEventListener('DOMContentLoaded',() => {
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
      link.innerHTML = tabTitle + '<br><br>';
      tabsList.appendChild(link);
    }

    //function to be invoked by eventlistener when the link is clicked on the chrome extension
    function updateTab(tabID) {
      let updating = chrome.tabs.update(tabID, {
        active: true
      });
    }


    // randomize audio file choice
    let randomNum = Math.floor(Math.random() * (19 - 1) + 1);
    console.log(randomNum);
    // let audio = new Audio(chrome.runtime.getURL(`sounds/${randomNum}.mp3`))
    let audio = new Audio(chrome.runtime.getURL("sounds/3.mp3"))
    audio.play();
    // let shuffleAudio = new Audio(chrome.runtime.getURL(`sounds/pew.mp3`))
    // let removeAudio = new Audio(chrome.runtime.getURL(`sounds/explosion.mp3`))


      // for loop to shuffle each tab to a random index in the tabs array
    function randomize() {
      for (let i = 0; i < tabs.length; i++) {
        chrome.tabs.move(tabs[i].id, {index: Math.floor(Math.random() * (tabs.length))})
      }
    }

    //------ BUTTONS: ---------

    // SHUFFLE BUTTON:
    const button = document.createElement("BUTTON")
    button.innerHTML = 'SHUFFLE';
    // tabsList.appendChild(button);
    buttons.appendChild(button);

    // randomize tab choice
    function randomizeTab(){
      window.location.reload();
      randomize();
    }

    // button.addEventListener("click", shuffleAudio.play)
    button.addEventListener("click", audio.play)
    button.addEventListener("click", randomizeTab);
    
    // REMOVE BUTTON:
    const removeButton = document.createElement("BUTTON")
    removeButton.innerHTML = 'REMOVE';
    // tabsList.appendChild(removeButton);
    buttons.appendChild(removeButton);

    function randomRemove() {
      window.location.reload();
      let removing = chrome.tabs.remove(tabs[Math.floor(Math.random() * (tabs.length))].id);
      removing.then(reloadAudio,reloadAudio);
    }

    function reloadAudio() {
      audio.play();
      // removeAudio.play();
      window.location.reload();
    }

    removeButton.addEventListener("click", randomRemove);
  });
});












//----C&P AT 3:20PM

// document.addEventListener('DOMContentLoaded',() => {
//   chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
//     let tabsList = document.getElementById('tabs');

//     for (let i = 0; i < tabs.length; i++) {
//       console.log('TABS INPUT:', tabs);
//       // console.log('TABS[i]:', tabs[i]);
//       // tabsListing.push(tabs[i])
//       let tabLink = tabs[i].id;
//       let tabTitle = tabs[i].title;
//       // console.log(tabLink);
//       // console.log(typeof(tabLink));
//       let link = document.createElement('a');
//       link.setAttribute('href',tabLink);
//       link.innerHTML = tabTitle + '<br><br>';
//       tabsList.appendChild(link);
//     }

//     //function to be invoked by eventlistener when the link is clicked on the chrome extension
//     function updateTab(tabID) {
//       let updating = chrome.tabs.update(tabID, {
//         active: true
//       });
//     }


//     // randomize audio file choice
//     let randomNum = Math.floor(Math.random() * (19 - 1) + 1);
//     console.log(randomNum);
//     let audio = new Audio(chrome.runtime.getURL(`sounds/${randomNum}.mp3`))
//     audio.play();


//       // for loop to shuffle each tab to a random index in the tabs array
//     function randomize() {
//       for (let i = 0; i < tabs.length; i++) {
//         chrome.tabs.move(tabs[i].id, {index: Math.floor(Math.random() * (tabs.length))})
//       }
//     }

//     //------ BUTTONS: ---------

//     // SHUFFLE BUTTON:
//     const button = document.createElement("BUTTON")
//     button.innerHTML = 'SHUFFLE';
//     // tabsList.appendChild(button);
//     buttons.appendChild(button);

//     // randomize tab choice
//     function randomizeTab(){
//       // audio.play();
//       window.location.reload();
//       randomize();
//       // audio.play();
//     }

//     button.addEventListener("click", audio.play)
//     button.addEventListener("click", randomizeTab);
    
//     // REMOVE BUTTON:
//     const removeButton = document.createElement("BUTTON")
//     removeButton.innerHTML = 'REMOVE';
//     // tabsList.appendChild(removeButton);
//     buttons.appendChild(removeButton);

//     function randomRemove() {
//       window.location.reload();
//       let removing = chrome.tabs.remove(tabs[Math.floor(Math.random() * (tabs.length))].id);
//       removing.then(reloadAudio,reloadAudio);
//       // audio.play();
//     }

//     function reloadAudio() {
//       audio.play();
//       window.location.reload();
//     }

//     removeButton.addEventListener("click", randomRemove);
//   });
// });















//----------C&P AT 1:06PM

// // grabs all tabs in current window (whichever I access the extension from)
// // tabs is an array of all tabs in the current window. property is called title.
// const tabsListing = []

// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
//   let tabsList = document.getElementById('tabs');

//   for (let i = 0; i < tabs.length; i++) {
//     console.log('TABS INPUT:', tabs);
//     // console.log('TABS[i]:', tabs[i]);
//     // tabsListing.push(tabs[i])
//     let tabLink = tabs[i].id;
//     let tabTitle = tabs[i].title;
//     // console.log(tabLink);
//     // console.log(typeof(tabLink));
//     let link = document.createElement('a');
//     link.setAttribute('href',tabLink);
//     link.innerHTML = tabTitle + '<br><br>';
//     tabsList.appendChild(link);
//   }

//   //function to be invoked by eventlistener when the link is clicked on the chrome extension
//   function updateTab(tabID) {
//     let updating = chrome.tabs.update(tabID, {
//       active: true
//     });
//   }

//   // for loop to shuffle each tab to a random index in the tabs array
//   for (let i = 0; i < tabs.length; i++) {
//     chrome.tabs.move(tabs[i].id, {index: Math.floor(Math.random() * (tabs.length - 0))})
//   }
  
//   // BUTTON:
//   const button = document.createElement("BUTTON")
//   button.innerHTML = 'SHUFFLE TABS';
//   tabsList.appendChild(button);

// /// added today -- when you click the shuffle button, reshuffle the tabs
//   function refreshPage(){
//     window.location.reload();
//   }
//   button.addEventListener("click", refreshPage);
// });