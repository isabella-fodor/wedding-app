import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Export flag to check if properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Create client only if configured, otherwise create a dummy client for build time
export let supabase: any;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Dummy client for build time - will not be used in practice
  supabase = {
    from: () => ({
      insert: () => ({ select: () => ({}) }),
      select: () => ({
        eq: () => ({ order: () => ({}) }),
        order: () => ({}),
      }),
    }),
  };
}
