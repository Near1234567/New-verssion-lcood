import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tymrvpxcokvbebhsmafq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5bXJ2cHhjb2t2YmViaHNtYWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTc4NTAsImV4cCI6MjA3ODM5Mzg1MH0.VvhH2P-akjfnkBHuxGEHsIQYvLTTSH6Z8Nw5almfUbw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
