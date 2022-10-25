import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vpxyovqhreblordyqpdo.supabase.co";
const supabaseKey = process.env.SUPABASE_SECRET_KEY as string;

export const supabaseServer = createClient(supabaseUrl, supabaseKey);
