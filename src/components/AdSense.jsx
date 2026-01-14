import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7814536015702761"
      data-ad-slot="5226428366"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
