import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CreateCheckout: CustomNextPage = () => {
  const router = useRouter();
  const { userId, priceId } = router.query;

  const fetchCheckoutSessionUrl = async () => {
    const res = await fetch(
      `/api/createCheckoutSession.page?userId=${userId}&priceId=${priceId}`
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

  return <div>Loading...</div>;
};

export default CreateCheckout;
