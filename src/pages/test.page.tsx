/* eslint-disable react/jsx-handler-names */
import type { CustomNextPage } from "next";
import { useEffect } from "react";

const CreateCheckout: CustomNextPage = () => {
  const fetchCheckoutSessionUrl = async () => {
    const res = await fetch(
      `/api/createCheckoutSession?userId=U95a6f533bec7346550b28fcc1cccc7fc&priceId=price_1LTyu0IECqNI7FWXQYZ3CSWv`
    );
    const { url } = await res.json();
    return url;
  };

  useEffect(() => {
    fetchCheckoutSessionUrl()
      .then((url) => {
        window.location.href = url;
      })
      .catch(() => {
        alert("エラー");
      });
  });

  return (
    <div>
      <div>Loading...</div>
      <button onClick={fetchCheckoutSessionUrl}>aul</button>
    </div>
  );
};

export default CreateCheckout;
