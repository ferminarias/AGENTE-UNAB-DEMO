-- Create contact_messages table for storing form submissions
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  interest_program text,
  message text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  path text,
  user_agent text,
  ip inet,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.contact_messages enable row level security;

-- Create policy to allow inserts from anyone (for contact form)
create policy "insert_contact_messages"
  on public.contact_messages
  for insert with check (true);

-- Create policy to allow admins to read all messages (optional)
create policy "read_contact_messages"
  on public.contact_messages
  for select using (false); -- Disable for now, enable when admin auth is added
