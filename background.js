function toggleStatus() 
{
    browser.storage.local.get('isEnabled').then((item) => {
        const status = (item && item.isEnabled);
        const icon = status ? {path: "icons/status-32-off.png"} : {path: "icons/status-32-on.png"}
        browser.browserAction.setIcon(icon);
        browser.storage.local.set({ isEnabled : !status })
    });
}

browser.browserAction.onClicked.addListener(toggleStatus)