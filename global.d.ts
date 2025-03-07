export {};

declare global {
  interface Window {
    flutter_inappwebview: {
      callHandler: (eventName: string, ...args: Array<any>) => Promise<void>;
    };
  }
}
