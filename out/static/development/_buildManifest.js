self.__BUILD_MANIFEST = {
  __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
  "/_app": ["static/chunks/pages/_app.js"],
  "/_error": ["static/chunks/pages/_error.js"],
  sortedPages: ["/_app", "/_error"],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
