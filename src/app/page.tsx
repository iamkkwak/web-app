"use client";

import Image from "next/image";

export default function Home() {
  const sendData = () => {
    const data = {
      name: "Rachel",
      birth: "Feb 07",
    };
    window.flutter_inappwebview
      .callHandler("myHandler", data)
      .then(() => alert(data));
  };
  return <button onClick={sendData}>HI</button>;
}
