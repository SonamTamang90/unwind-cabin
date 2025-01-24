import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rlxuthrcdpvjjbehsfxb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJseHV0aHJjZHB2ampiZWhzZnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDg5MzYsImV4cCI6MjA1MzEyNDkzNn0.FYtm8MRoybOBtZTHcoz3wFR2P-7La7Xgzbxfyh-TPXs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
