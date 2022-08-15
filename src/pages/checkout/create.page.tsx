import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CreateCheckout: CustomNextPage = () => {
  const router = useRouter();
  const { userId, priceId } = router.query;

  const fetchCheckoutSessionUrl = async () => {
    const endpoint = `/api/createCheckoutSession/?userId=${userId}&priceId=${priceId}`;
    const res = await fetch(endpoint);
    const { url } = await res.json();

    return url as string;
  };

  useEffect(() => {
    fetchCheckoutSessionUrl().then((url) => {
      window.location.href = url;
    });
  });

  return <div>画面遷移しています...</div>;
};

export default CreateCheckout;
