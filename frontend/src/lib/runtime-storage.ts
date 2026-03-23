declare global {
  interface Window {
    __DESKTOP_STORAGE__?: {
      readState: (key: string) => Promise<string | null>;
      writeState: (key: string, value: string) => Promise<void>;
      getStoragePath: () => Promise<string>;
    };
  }
}

export function isDesktopStorageAvailable() {
  return Boolean(window.__DESKTOP_STORAGE__);
}

export async function readRuntimeStorage(key: string) {
  if (window.__DESKTOP_STORAGE__) {
    return window.__DESKTOP_STORAGE__.readState(key);
  }

  return localStorage.getItem(key);
}

export async function writeRuntimeStorage(key: string, value: string) {
  if (window.__DESKTOP_STORAGE__) {
    await window.__DESKTOP_STORAGE__.writeState(key, value);
    return;
  }

  localStorage.setItem(key, value);
}

export async function getRuntimeStoragePath() {
  if (window.__DESKTOP_STORAGE__) {
    return window.__DESKTOP_STORAGE__.getStoragePath();
  }

  return "localStorage";
}

export function getRuntimeAssetPath(assetName: string) {
  const normalizedName = assetName.startsWith("/") ? assetName.slice(1) : assetName;

  if (window.location.protocol === "file:") {
    return `./${normalizedName}`;
  }

  return `/${normalizedName}`;
}
