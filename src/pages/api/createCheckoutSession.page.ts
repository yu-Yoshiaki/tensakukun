import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY as string);

const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userId, priceId } = req.query;

  if (req.method === "GET") {
    try {
      const { data: customers } = await stripe.customers.search({
        query: `metadata['userId']:'${userId}'`,
      });

      const { url } = await stripe.checkout.sessions.create({
        customer: customers[0].id,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        shipping_address_collection: {
          allowed_countries: ["JP"],
        },
        mode: "subscription",
        payment_method_types: ["card"],
        success_url:
          (process.env.LINE_FRIEND_URL as string) || "http://localhost:3001",
        cancel_url:
          (process.env.LINE_FRIEND_URL as string) || "http://localhost:3001",
      });

      res.status(200).json({ url });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
};

export default createCheckoutSession;
