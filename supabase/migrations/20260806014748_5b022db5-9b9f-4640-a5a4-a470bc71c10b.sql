CREATE TABLE public.seo_activity_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name text NOT NULL,
  record_id uuid,
  action text NOT NULL CHECK (action IN ('INSERT','UPDATE','DELETE')),
  actor text NOT NULL DEFAULT 'seo_manager_backend',
  approval_ref text,
  context jsonb NOT NULL DEFAULT '{}'::jsonb,
  occurred_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.seo_activity_log TO anon, authenticated;
GRANT ALL ON public.seo_activity_log TO service_role;

ALTER TABLE public.seo_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "SEO activity is readable"
ON public.seo_activity_log
FOR SELECT
TO anon, authenticated
USING (true);

CREATE OR REPLACE FUNCTION public.log_seo_activity()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  changed_id uuid;
  change_context jsonb;
BEGIN
  changed_id := CASE WHEN TG_OP = 'DELETE' THEN OLD.id ELSE NEW.id END;
  change_context := jsonb_build_object(
    'operation', TG_OP,
    'table', TG_TABLE_NAME
  );

  INSERT INTO public.seo_activity_log (table_name, record_id, action, context)
  VALUES (TG_TABLE_NAME, changed_id, TG_OP, change_context);

  RETURN CASE WHEN TG_OP = 'DELETE' THEN OLD ELSE NEW END;
END;
$$;

DO $$
DECLARE
  target_table text;
  tracked_tables text[] := ARRAY[
    'seo_pages','seo_keywords','seo_meta_rules','seo_indexing_records',
    'seo_automations','seo_issues','seo_reports','seo_audits','seo_backlinks',
    'seo_competitors','seo_ai_suggestions','seo_content_items',
    'seo_technical_checks','seo_alerts','seo_leads','seo_ad_campaigns',
    'seo_email_campaigns','seo_social_posts','seo_social_comments',
    'seo_inbox_messages','seo_automation_flows','seo_reels',
    'seo_integrations','seo_product_entries'
  ];
BEGIN
  FOREACH target_table IN ARRAY tracked_tables LOOP
    EXECUTE format(
      'CREATE TRIGGER %I AFTER INSERT OR UPDATE OR DELETE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.log_seo_activity()',
      'trg_activity_' || target_table,
      target_table
    );
  END LOOP;
END;
$$;

CREATE INDEX seo_activity_log_occurred_at_idx ON public.seo_activity_log (occurred_at DESC);
CREATE INDEX seo_activity_log_table_record_idx ON public.seo_activity_log (table_name, record_id);