export const themeStorageKey = 'taksim.theme';

// Run before paint so a saved dark preference never flashes the light palette.
export const themePreferenceScript = `(function(){var t='light';try{if(localStorage.getItem(${JSON.stringify(themeStorageKey)})==='dark')t='dark';}catch(e){}document.documentElement.dataset.theme=t;})();`;
