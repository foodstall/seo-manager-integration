REVOKE ALL ON FUNCTION public.log_seo_activity() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.log_seo_activity() FROM anon;
REVOKE ALL ON FUNCTION public.log_seo_activity() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.log_seo_activity() TO service_role;