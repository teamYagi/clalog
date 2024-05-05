// utils/supabase.ts

import { createClient } from "@supabase/supabase-js";

// SupabaseのURLとAPIキーを環境変数から取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// Supabaseクライアントを作成
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
