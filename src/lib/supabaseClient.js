import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hggrtmezbsprccyfhsgo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnZ3J0bWV6YnNwcmNjeWZoc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4Mzk4NjcsImV4cCI6MjA3OTQxNTg2N30.NVJ2HTkaMVZcGtCGdkoOch5Ua4VnKe99zygVyRVGORo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
