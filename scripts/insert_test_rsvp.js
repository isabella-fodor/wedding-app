#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith("\"") && val.endsWith("\"")) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[key] = process.env[key] || val;
  });
}

// Load .env.local if present
loadEnvFile(path.resolve(process.cwd(), '.env.local'));
loadEnvFile(path.resolve(process.cwd(), '.env'));

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment or .env.local');
  process.exit(1);
}

const supabase = createClient(url, key);

(async () => {
  try {
    const testRow = {
      full_name: 'Test Guest',
      email: 'test+automation@example.com',
      phone: '+40 700 000 000',
      status: 'YES',
      people_count: 2,
      menu_option: 'Normal',
      comment: 'Inserted by automation test script',
    };

    console.log('Inserting test RSVP into Supabase (table `rsvps`)...');
    const { data, error } = await supabase.from('rsvps').insert([testRow]).select();
    if (error) {
      console.error('Supabase error:', error.message || error);
      process.exit(1);
    }
    console.log('Insert successful. Inserted row:', data && data[0] ? data[0] : data);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
})();
