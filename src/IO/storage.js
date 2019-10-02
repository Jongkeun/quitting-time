import browser from "webextension-polyfill";

export function get(...argv) {
  // return Promise.resolve({ Hour: 18 });
  if (browser.storage) {
    return browser.storage.local.get(...argv);
  } else {
    return Promise.reject(new Error("Storage module is unavailable"));
  }
}

export function set(...argv) {
  // return Promise.resolve();
  if (browser.storage) {
    return browser.storage.local.set(...argv);
  } else {
    return Promise.reject(new Error("Storage module is unavailable"));
  }
}

export function clear() {
  browser.storage.local.clear(function() {
    var error = browser.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
}
export default { get, set, clear };
