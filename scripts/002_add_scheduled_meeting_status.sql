-- Migration: Add 'scheduled_meeting' status to leads table
-- This script adds the new status option to the existing constraint

-- First, drop the existing check constraint
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_status_check;

-- Add the new check constraint that includes 'scheduled_meeting'
ALTER TABLE public.leads ADD CONSTRAINT leads_status_check 
CHECK (status IN ('new', 'contacted', 'qualified', 'enrolled', 'lost', 'scheduled_meeting'));

-- Add comment to document the change
COMMENT ON COLUMN public.leads.status IS 'Lead status: new, contacted, qualified, enrolled, lost, scheduled_meeting (auto-assigned when meeting is scheduled)';

-- Add index for the new status if it doesn\'t exist
CREATE INDEX IF NOT EXISTS idx_leads_scheduled_meeting ON public.leads(status) WHERE status = 'scheduled_meeting';

-- Optional: Update existing leads that have meeting info but wrong status
-- Uncomment the line below if you want to automatically update existing data
-- UPDATE public.leads SET status = 'scheduled_meeting' WHERE (meeting_link IS NOT NULL AND meeting_datetime IS NOT NULL) AND status != 'enrolled';
