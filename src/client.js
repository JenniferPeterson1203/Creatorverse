import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const supabase = createClient(URL, API_KEY);
console.log('url:', URL);

console.log('s2:', supabase);

export default supabase


// src/client.js