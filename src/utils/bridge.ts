export const callHandler = (eventName: string, ...args: Array<unknown>) => {
  if (window.flutter_inappwebview && window.flutter_inappwebview.callHandler) {
    // 앱(WebView) 환경
    window.flutter_inappwebview.callHandler(eventName, args);
  } else {
    // Flutter web iframe 환경
    window.parent.postMessage({ type: eventName, payload: args }, "*");
  }
};
