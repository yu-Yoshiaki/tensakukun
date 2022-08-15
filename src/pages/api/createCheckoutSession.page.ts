import type { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY as string);

const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userId, priceid } = req.query;
  if (req.method === "GET") {
    try {
      const { data: customers } = await stripe.customers.search({
        query: `metadata['userId']:'${userId}'`,
      });

      const { url } = await stripe.checkout.sessions.create({
        customer: customers[0].id,
        line_items: [
          {
            price: priceid,
            quantity: 1,
          },
        ],
        shipping_address_collection: {
          allowed_countries: ["JP"],
        },
        mode: "subscription",
        payment_method_types: ["card"],
        success_url: process.env.LINE_FRIEND_URL as string,
        cancel_url: process.env.LINE_FRIEND_URL as string,
      });

      res.status(200).json({ url });
      // res.redirect(303, url as string);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
};

export default createCheckoutSession;
