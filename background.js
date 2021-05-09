let color = '#181818';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default dark mode color set %c', `color: ${color}`);
});
