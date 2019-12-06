chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log("The color is green.");
  });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('tabs: ', tabs)
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.body.style.backgroundColor = "' + 'red' + '";' });
  });


  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: { hostEquals: 'juejin.im' },
  //     })
  //     ],
  //     actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});
// chrome.tabs.onUpdated.addListener(function(id, obj, status) {
//   console.log(status.status)
//   if(status.status === 'complete') {
//     chrome.tabs.executeScript(id, {file: "init.js"}, function() {
//       console.log(...arguments)
//     })
//   }
//   // console.log(...arguments)
// })