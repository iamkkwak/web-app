export {};

declare global {
  interface Window {
    flutter_inappwebview: {
      callHandler: (
        eventName: string,
        ...args: Array<unknown>
      ) => Promise<void>;
    };
  }
}
