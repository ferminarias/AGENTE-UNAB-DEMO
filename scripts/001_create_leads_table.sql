-- Create leads table to store form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest_program TEXT NOT NULL,
  message TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer TEXT,
  path TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'enrolled', 'lost')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  assigned_to TEXT,
  notes TEXT,
  last_contact_date TIMESTAMP WITH TIME ZONE,
  next_follow_up TIMESTAMP WITH TIME ZONE,
  meeting_link TEXT,
  meeting_datetime TIMESTAMP WITH TIME ZONE,
  meeting_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is for a CRM system)
-- In production, you'd want proper authentication and user-based policies
CREATE POLICY "Allow all operations on leads" ON public.leads
  FOR ALL USING (true) WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON public.leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
