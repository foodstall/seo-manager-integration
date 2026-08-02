
INSERT INTO public.seo_pages (url,title,meta_title,meta_description,h1,canonical_url,word_count,seo_score,index_status,page_type,issues_count,last_crawled_at) VALUES
('/','Software Vala — Business Software Suite','Software Vala | POS, ERP & School Management Software','Software Vala builds POS, ERP, hospital and school management software for growing businesses across Africa, Asia and the Middle East.','Business software built for growth','/',1180,94,'indexed','landing',0,now()-interval '6 hours'),
('/products/pos','POS Software','Cloud POS Software for Retail & Restaurants | Software Vala','Run retail and restaurant operations with offline-first cloud POS, inventory sync and real-time reporting.','Cloud POS built for busy counters','/products/pos',1640,91,'indexed','product',1,now()-interval '8 hours'),
('/products/erp','ERP Suite','ERP Software for Mid-Market Companies | Software Vala','Finance, inventory, HR and procurement in one modular ERP designed for mid-market teams.','One ERP, every department','/products/erp',2100,88,'indexed','product',2,now()-interval '9 hours'),
('/products/school','School Management System','School Management Software | Fees, Attendance, Exams','Manage admissions, fees, attendance, exams and parent communication in a single school ERP.','School management without the paperwork','/products/school',1875,90,'indexed','product',1,now()-interval '11 hours'),
('/products/hospital','Hospital Management Software','Hospital Management Software | HMS by Software Vala','OPD, IPD, pharmacy, lab and billing modules for clinics and multi-speciality hospitals.','Hospital operations, fully connected','/products/hospital',1720,86,'indexed','product',2,now()-interval '13 hours'),
('/products/crm','CRM for Sales Teams','CRM Software for Sales Teams | Software Vala','Pipeline, follow-ups and quotations for field-heavy sales teams.','Close more with a CRM your reps use','/products/crm',1320,83,'indexed','product',3,now()-interval '15 hours'),
('/solutions/retail','Retail Solutions','Retail Software Solutions | Software Vala','End-to-end retail stack: POS, inventory, loyalty and analytics.','Retail software that scales with you','/solutions/retail',980,79,'indexed','page',3,now()-interval '20 hours'),
('/solutions/real-estate','Real Estate CRM','Real Estate CRM Software | Leads, Sites, Bookings','Track leads, site visits, bookings and payment plans for property developers.','Real estate CRM for developers','/solutions/real-estate',1120,81,'indexed','page',2,now()-interval '22 hours'),
('/pricing','Pricing','Pricing Plans | Software Vala','Transparent per-branch pricing for POS, ERP, school and hospital modules.','Simple pricing, no surprises','/pricing',640,76,'indexed','page',2,now()-interval '5 hours'),
('/blog/pos-software-guide','POS Software Buying Guide','How to Choose POS Software in 2026 | Software Vala','A practical buying guide covering offline mode, tax compliance, hardware and total cost of ownership.','How to choose POS software in 2026','/blog/pos-software-guide',2480,92,'indexed','blog',0,now()-interval '2 days'),
('/blog/erp-implementation-checklist','ERP Implementation Checklist','ERP Implementation Checklist (Free Template)','A 42-point ERP rollout checklist covering data migration, training and go-live.','ERP implementation checklist','/blog/erp-implementation-checklist',2210,89,'indexed','blog',1,now()-interval '3 days'),
('/blog/school-erp-fees-automation','Automating School Fees','Automate School Fee Collection | Software Vala Blog','How schools cut fee-collection time by 60% with automated invoicing and reminders.','Automating school fee collection','/blog/school-erp-fees-automation',1760,84,'indexed','blog',2,now()-interval '4 days'),
('/about','About Software Vala','About Us | Software Vala','Who we are, where we build and the customers we serve across 14 countries.','About Software Vala','/about',720,72,'indexed','page',2,now()-interval '7 days'),
('/contact','Contact','Contact Software Vala | Talk to Sales','Book a demo or reach support across Nigeria, Kenya, UAE and India.','Talk to our team','/contact',420,68,'crawled_not_indexed','page',3,now()-interval '2 days');

INSERT INTO public.seo_keywords (keyword,target_url,position,previous_position,search_volume,difficulty,cpc,intent,industry,country,region,status) VALUES
('best pos software africa','/products/pos',4,6,12400,34,3.40,'commercial','pos','Nigeria','africa','tracking'),
('cloud pos system nigeria','/products/pos',2,3,5400,29,2.90,'transactional','pos','Nigeria','africa','tracking'),
('restaurant pos software kenya','/products/pos',7,7,3300,31,2.10,'commercial','pos','Kenya','africa','tracking'),
('school management system kenya','/products/school',3,5,8900,28,1.80,'commercial','school','Kenya','africa','tracking'),
('school erp software india','/products/school',9,12,14200,47,1.20,'commercial','school','India','asia','tracking'),
('hospital software dubai','/products/hospital',6,8,6700,45,5.60,'commercial','hospital','UAE','middleeast','tracking'),
('hospital management system uae','/products/hospital',11,10,4100,49,6.10,'commercial','hospital','UAE','middleeast','tracking'),
('erp solutions india','/products/erp',14,17,15600,52,4.30,'informational','erp','India','asia','tracking'),
('erp software for manufacturing','/products/erp',19,22,9400,58,7.20,'commercial','erp','India','asia','tracking'),
('real estate crm nigeria','/solutions/real-estate',5,9,4300,22,3.10,'transactional','realestate','Nigeria','africa','tracking'),
('property management software kenya','/solutions/real-estate',12,13,2600,26,2.40,'commercial','realestate','Kenya','africa','tracking'),
('inventory management software','/products/pos',24,27,28000,67,6.80,'informational','pos','India','asia','tracking'),
('crm software for small business','/products/crm',16,15,33000,64,8.90,'commercial','crm','India','asia','tracking'),
('sales crm dubai','/products/crm',8,11,2900,38,7.40,'transactional','crm','UAE','middleeast','tracking'),
('retail billing software','/solutions/retail',10,14,11800,41,3.20,'commercial','pos','India','asia','tracking'),
('gst billing software','/solutions/retail',21,20,49000,71,5.10,'commercial','pos','India','asia','tracking'),
('pos software price','/pricing',13,16,7200,36,4.00,'transactional','pos','Nigeria','africa','tracking'),
('school fees management software','/blog/school-erp-fees-automation',6,6,5100,33,1.60,'commercial','school','Kenya','africa','tracking'),
('erp implementation checklist','/blog/erp-implementation-checklist',2,4,3400,24,2.20,'informational','erp','India','asia','tracking'),
('how to choose pos software','/blog/pos-software-guide',1,2,4800,21,2.60,'informational','pos','Nigeria','africa','tracking'),
('clinic management software saudi','/products/hospital',27,31,2200,44,5.90,'commercial','hospital','Saudi Arabia','middleeast','tracking'),
('business software south africa','/',18,21,6400,55,4.60,'informational','erp','South Africa','africa','paused'),
('accounting software kenya','/products/erp',23,23,8800,53,3.80,'commercial','erp','Kenya','africa','paused'),
('warehouse management software uae','/products/erp',15,19,3700,48,6.30,'commercial','erp','UAE','middleeast','tracking');

INSERT INTO public.seo_keyword_rankings (keyword_id, recorded_on, position, clicks, impressions)
SELECT k.id, d::date,
  GREATEST(1, k.position + ((random()*6)::int - 3) + ((90 - (now()::date - d::date)) / 30)::int),
  GREATEST(0, (k.search_volume * 0.004 * random())::int),
  GREATEST(0, (k.search_volume * 0.06 * (0.6 + random()))::int)
FROM public.seo_keywords k
CROSS JOIN generate_series(now()::date - interval '89 days', now()::date, interval '1 day') d;

INSERT INTO public.seo_performance_metrics (recorded_on,clicks,impressions,ctr,avg_position,organic_sessions,conversions,lcp_ms,inp_ms,cls)
SELECT d::date,
  (1400 + (90 - (now()::date - d::date)) * 9 + (random()*260)::int),
  (46000 + (90 - (now()::date - d::date)) * 180 + (random()*7000)::int),
  round((2.6 + random()*1.4)::numeric,3),
  round((14.8 - (90 - (now()::date - d::date))*0.035 + random())::numeric,2),
  (1900 + (90 - (now()::date - d::date)) * 11 + (random()*340)::int),
  (22 + (random()*18)::int),
  (1900 + (random()*700)::int),
  (140 + (random()*90)::int),
  round((0.03 + random()*0.06)::numeric,3)
FROM generate_series(now()::date - interval '89 days', now()::date, interval '1 day') d;

INSERT INTO public.seo_meta_rules (name,url_pattern,title_template,description_template,priority,applies_to,status) VALUES
('Product pages','/products/*','{{page_name}} Software for {{industry}} | Software Vala','Discover {{page_name}} by Software Vala — built for {{industry}} teams in {{country}}. Book a live demo today.',10,5,'active'),
('Blog posts','/blog/*','{{title}} | Software Vala Blog','{{excerpt}} Read the full guide from the Software Vala product team.',20,3,'active'),
('Solution pages','/solutions/*','{{page_name}} Solutions | Software Vala','End-to-end {{page_name}} software: implementation, training and local support.',30,2,'active'),
('Country landing pages','/{{country}}/*','Business Software in {{country}} | Software Vala','POS, ERP and school software with local tax compliance and on-ground support in {{country}}.',40,0,'draft'),
('Pricing & legal','/pricing','{{page_name}} | Software Vala','{{excerpt}}',50,1,'active');

INSERT INTO public.seo_indexing_records (url,source,crawl_status,index_state,http_status,last_crawled_at,indexed_at,notes) VALUES
('/','sitemap','crawled','indexed',200,now()-interval '6 hours',now()-interval '40 days','Priority 1.0'),
('/products/pos','sitemap','crawled','indexed',200,now()-interval '8 hours',now()-interval '38 days',NULL),
('/products/erp','sitemap','crawled','indexed',200,now()-interval '9 hours',now()-interval '38 days',NULL),
('/products/school','sitemap','crawled','indexed',200,now()-interval '11 hours',now()-interval '31 days',NULL),
('/products/hospital','sitemap','crawled','indexed',200,now()-interval '13 hours',now()-interval '27 days',NULL),
('/contact','sitemap','crawled','crawled_not_indexed',200,now()-interval '2 days',NULL,'Thin content — 420 words'),
('/blog/pos-software-guide','sitemap','crawled','indexed',200,now()-interval '2 days',now()-interval '19 days',NULL),
('/blog/erp-implementation-checklist','sitemap','crawled','indexed',200,now()-interval '3 days',now()-interval '12 days',NULL),
('/legacy/pos-v1','discovered','crawled','excluded_redirect',301,now()-interval '5 days',NULL,'Redirects to /products/pos'),
('/careers/openings','discovered','pending','discovered_not_indexed',200,NULL,NULL,'Queued for crawl'),
('/products/crm?ref=ads','discovered','crawled','excluded_canonical',200,now()-interval '4 days',NULL,'Canonical points to /products/crm');

INSERT INTO public.seo_automations (name,automation_type,description,schedule,status,last_run_at,next_run_at,runs_count,success_rate) VALUES
('Nightly sitemap submission','indexing','Regenerates sitemap.xml and pings Search Console.','daily','active',now()-interval '9 hours',now()+interval '15 hours',214,99.50),
('Broken link sweep','technical','Crawls all indexed URLs and flags 4xx/5xx responses.','daily','active',now()-interval '11 hours',now()+interval '13 hours',198,97.90),
('Meta description backfill','on-page','Applies meta rules to pages missing descriptions.','weekly','active',now()-interval '3 days',now()+interval '4 days',31,100.00),
('Keyword rank refresh','rank-tracking','Pulls fresh positions for all tracked keywords.','daily','active',now()-interval '7 hours',now()+interval '17 hours',221,98.60),
('Competitor visibility scan','competitive','Recalculates competitor visibility and keyword gaps.','weekly','active',now()-interval '2 days',now()+interval '5 days',28,96.40),
('AI content brief generator','content','Drafts briefs for keywords ranking 11-25.','weekly','paused',now()-interval '12 days',NULL,17,94.10),
('Core Web Vitals monitor','performance','Samples field data and raises alerts on regressions.','daily','active',now()-interval '4 hours',now()+interval '20 hours',207,99.00);

INSERT INTO public.seo_automation_runs (automation_id,started_at,finished_at,status,items_processed,message)
SELECT a.id, now() - (n || ' days')::interval, now() - (n || ' days')::interval + interval '4 minutes',
  CASE WHEN random() < 0.94 THEN 'success' ELSE 'failed' END,
  (20 + random()*180)::int,
  'Completed run for ' || a.name
FROM public.seo_automations a CROSS JOIN generate_series(1,8) n;

INSERT INTO public.seo_issues (page_url,issue_type,category,severity,description,fix_suggestion,status,detected_at) VALUES
('/contact','thin_content','on-page','high','Page has 420 words and is not indexed by Google.','Expand to 800+ words with office locations, support SLAs and an FAQ block.','open',now()-interval '2 days'),
('/products/crm','missing_meta_description','on-page','medium','Meta description is missing; Google is generating its own snippet.','Apply the Product pages meta rule template.','open',now()-interval '5 days'),
('/products/crm','duplicate_title','on-page','medium','Title duplicates /solutions/retail.','Rewrite as "CRM Software for Field Sales Teams | Software Vala".','open',now()-interval '5 days'),
('/products/erp','slow_lcp','performance','high','LCP is 3.4s on mobile (hero image not preloaded).','Preload the hero image and serve AVIF at 1280px.','open',now()-interval '1 day'),
('/products/hospital','missing_alt_text','accessibility','low','7 images are missing alt attributes.','Add descriptive alt text referencing the module shown.','open',now()-interval '6 days'),
('/solutions/retail','orphan_page','technical','medium','No internal links point to this page.','Link from /products/pos and the main navigation.','open',now()-interval '8 days'),
('/pricing','schema_missing','technical','medium','No Product or Offer structured data present.','Add Offer schema with per-branch price ranges.','open',now()-interval '3 days'),
('/blog/school-erp-fees-automation','broken_internal_link','technical','high','Link to /products/fees returns 404.','Repoint the link to /products/school#fees.','open',now()-interval '1 day'),
('/about','low_word_count','on-page','low','720 words with no target keyword.','Target "about software vala" and add customer proof.','in_progress',now()-interval '10 days'),
('/products/pos','image_oversize','performance','medium','Hero image is 1.8MB.','Compress to under 200KB and serve WebP.','resolved',now()-interval '20 days');
UPDATE public.seo_issues SET resolved_at = now()-interval '4 days' WHERE status='resolved';

INSERT INTO public.seo_reports (name,report_type,period_start,period_end,status,summary,generated_at) VALUES
('Organic performance — last 30 days','monthly',(now()-interval '30 days')::date,now()::date,'ready','{"clicks":68420,"impressions":1840000,"ctr":3.7,"avg_position":11.4,"new_keywords":18}',now()-interval '6 hours'),
('Technical health — Q report','technical',(now()-interval '90 days')::date,now()::date,'ready','{"pages_crawled":142,"issues_found":23,"issues_resolved":19,"score":86}',now()-interval '2 days'),
('Keyword movement report','weekly',(now()-interval '7 days')::date,now()::date,'ready','{"improved":31,"declined":9,"unchanged":14,"top_gain":"real estate crm nigeria"}',now()-interval '20 hours'),
('Backlink acquisition report','monthly',(now()-interval '30 days')::date,now()::date,'ready','{"new_backlinks":47,"lost":6,"avg_da":41}',now()-interval '3 days'),
('Content performance report','monthly',(now()-interval '30 days')::date,now()::date,'generating','{}',NULL);

INSERT INTO public.seo_audits (name,status,score,pages_crawled,issues_found,breakdown,started_at,completed_at) VALUES
('Full site audit — current','completed',86,142,23,'{"on_page":88,"technical":84,"performance":79,"content":90,"backlinks":83}',now()-interval '1 day',now()-interval '1 day'+interval '22 minutes'),
('Full site audit — previous month','completed',81,138,34,'{"on_page":82,"technical":80,"performance":74,"content":86,"backlinks":80}',now()-interval '31 days',now()-interval '31 days'+interval '26 minutes'),
('Product section deep audit','completed',89,38,7,'{"on_page":92,"technical":88,"performance":81,"content":93,"backlinks":85}',now()-interval '9 days',now()-interval '9 days'+interval '8 minutes'),
('Blog content audit','completed',90,44,5,'{"on_page":93,"technical":89,"performance":86,"content":95,"backlinks":81}',now()-interval '16 days',now()-interval '16 days'+interval '11 minutes');

INSERT INTO public.seo_backlinks (source_domain,source_url,target_url,anchor_text,domain_authority,link_type,status,spam_score,first_seen_at,last_checked_at) VALUES
('techcabal.com','https://techcabal.com/pos-startups-africa','/products/pos','cloud POS platforms',72,'dofollow','active',2,now()-interval '120 days',now()-interval '2 days'),
('businessdailyafrica.com','https://businessdailyafrica.com/school-erp','/products/school','school management software',68,'dofollow','active',1,now()-interval '95 days',now()-interval '2 days'),
('gulfbusiness.com','https://gulfbusiness.com/hms-vendors','/products/hospital','hospital management vendors',65,'dofollow','active',3,now()-interval '74 days',now()-interval '3 days'),
('yourstory.com','https://yourstory.com/erp-smb-india','/products/erp','ERP suites for SMBs',74,'dofollow','active',2,now()-interval '61 days',now()-interval '1 day'),
('medium.com','https://medium.com/@retailops/pos-guide','/blog/pos-software-guide','POS buying guide',95,'nofollow','active',4,now()-interval '48 days',now()-interval '1 day'),
('nairametrics.com','https://nairametrics.com/retail-tech','/solutions/retail','retail billing tools',61,'dofollow','active',3,now()-interval '40 days',now()-interval '4 days'),
('linkfarm-seo.biz','https://linkfarm-seo.biz/dir/1204','/','best software company',9,'dofollow','toxic',87,now()-interval '22 days',now()-interval '1 day'),
('capterra.com','https://capterra.com/p/softwarevala','/pricing','Software Vala pricing',90,'nofollow','active',1,now()-interval '150 days',now()-interval '2 days'),
('itwebafrica.com','https://itwebafrica.com/erp-rollouts','/blog/erp-implementation-checklist','ERP rollout checklist',58,'dofollow','active',2,now()-interval '18 days',now()-interval '1 day'),
('startupsa.co.za','https://startupsa.co.za/tools','/','Software Vala',44,'dofollow','lost',5,now()-interval '210 days',now()-interval '5 days');

INSERT INTO public.seo_competitors (name,domain,region,visibility_score,keywords_count,backlinks_count,traffic_estimate,domain_authority) VALUES
('Vend Africa','vendafrica.com','africa',38.40,2140,8600,74000,54),
('EduSuite','edusuite.co.ke','africa',26.10,1180,3900,31000,42),
('GulfMed Systems','gulfmedsystems.ae','middleeast',31.70,1460,5200,42000,49),
('ZohoOne India','zoho-erp-india.com','asia',61.20,7400,42000,310000,71),
('RetailPro MEA','retailpro-mea.com','middleeast',22.80,940,2700,19500,38);

INSERT INTO public.seo_competitor_gaps (competitor_id,keyword,their_position,our_position,search_volume,opportunity)
SELECT c.id, g.kw, g.tp, g.op, g.vol, g.opp FROM public.seo_competitors c JOIN (VALUES
 ('vendafrica.com','pos software lagos',2,NULL,3900,'high'),
 ('vendafrica.com','best pos software africa',3,4,12400,'medium'),
 ('vendafrica.com','offline pos system',1,NULL,5200,'high'),
 ('edusuite.co.ke','school fees software kenya',1,6,5100,'medium'),
 ('edusuite.co.ke','online exam management system',4,NULL,2800,'high'),
 ('gulfmedsystems.ae','hospital software dubai',2,6,6700,'high'),
 ('gulfmedsystems.ae','clinic billing software uae',3,NULL,1900,'medium'),
 ('zoho-erp-india.com','erp solutions india',1,14,15600,'high'),
 ('zoho-erp-india.com','gst billing software',2,21,49000,'high'),
 ('retailpro-mea.com','retail pos dubai',5,NULL,2400,'medium')
) AS g(dom,kw,tp,op,vol,opp) ON g.dom = c.domain;

INSERT INTO public.seo_ai_suggestions (target_type,target_ref,title,suggestion,impact,confidence,status,model) VALUES
('page','/products/crm','Rewrite duplicate title tag','Use "CRM Software for Field Sales Teams | Software Vala" to remove overlap with /solutions/retail and capture "field sales crm" volume.','high',92,'pending','google/gemini-3.5-flash'),
('keyword','erp solutions india','Build a comparison cluster','You rank 14 for a 15.6k-volume term. Publish "Top 10 ERP Solutions in India (2026)" and internally link from /products/erp.','high',88,'pending','google/gemini-3.5-flash'),
('page','/contact','Fix thin content blocking indexing','Add office addresses, support SLAs, regional phone numbers and 6 FAQs to push past 800 words.','high',95,'pending','google/gemini-3.5-flash'),
('page','/pricing','Add Offer structured data','Mark up each plan with Offer schema to qualify for price-rich results.','medium',84,'accepted','google/gemini-3.5-flash'),
('keyword','gst billing software','Target long-tail first','Difficulty 71 is out of reach directly. Win "gst billing software for retail shop" first, then consolidate.','medium',79,'pending','google/gemini-3.5-flash'),
('page','/products/erp','Preload hero image','LCP 3.4s on mobile. Preload hero and drop the render-blocking font import.','high',90,'accepted','google/gemini-3.5-flash'),
('page','/solutions/retail','Resolve orphan page','Add contextual links from /products/pos and the primary nav to pass internal PageRank.','medium',81,'pending','google/gemini-3.5-flash'),
('keyword','real estate crm nigeria','Double down on a winner','Moved 9 to 5 in 30 days. Add a case study and FAQ schema to reach the top 3.','medium',86,'rejected','google/gemini-3.5-flash');

INSERT INTO public.seo_content_items (title,content_type,target_keyword,word_count,seo_score,status,url,published_at,model) VALUES
('How to Choose POS Software in 2026','blog','how to choose pos software',2480,92,'published','/blog/pos-software-guide',now()-interval '19 days','google/gemini-3.5-flash'),
('ERP Implementation Checklist','blog','erp implementation checklist',2210,89,'published','/blog/erp-implementation-checklist',now()-interval '12 days','google/gemini-3.5-flash'),
('Automating School Fee Collection','blog','school fees management software',1760,84,'published','/blog/school-erp-fees-automation',now()-interval '7 days','google/gemini-3.5-flash'),
('Top 10 ERP Solutions in India (2026)','blog','erp solutions india',0,0,'draft',NULL,NULL,'google/gemini-3.5-flash'),
('Hospital Billing Compliance in the UAE','blog','hospital management system uae',1420,77,'review',NULL,NULL,'google/gemini-3.5-flash'),
('Offline-First POS: Why It Matters in Africa','blog','offline pos system',1180,81,'review',NULL,NULL,'google/gemini-3.5-flash'),
('Real Estate CRM Buyer Guide','landing','real estate crm nigeria',0,0,'draft',NULL,NULL,'google/gemini-3.5-flash');

INSERT INTO public.seo_technical_checks (name,category,status,detail,affected_urls) VALUES
('robots.txt reachable','crawlability','pass','robots.txt returns 200 and allows all primary sections.',0),
('XML sitemap valid','crawlability','pass','142 URLs, last generated 9 hours ago.',0),
('HTTPS everywhere','security','pass','All URLs served over HTTPS with HSTS enabled.',0),
('Canonical tags','indexation','warn','3 URLs use cross-domain or parameter canonicals.',3),
('Mobile friendliness','usability','pass','All sampled pages pass the mobile viewport check.',0),
('Core Web Vitals — LCP','performance','fail','2 templates exceed 2.5s LCP on mobile.',2),
('Core Web Vitals — CLS','performance','pass','CLS averages 0.05 across sampled pages.',0),
('Structured data errors','structured-data','warn','Pricing page missing Offer markup; 2 Article items missing author.',3),
('Broken internal links','crawlability','fail','1 internal link returns 404.',1),
('Duplicate titles','indexation','warn','2 pages share the same title tag.',2),
('Hreflang setup','internationalization','warn','Country pages drafted but hreflang not yet emitted.',0),
('Image optimisation','performance','warn','7 images over 500KB and 7 missing alt text.',9);

INSERT INTO public.seo_alerts (title,message,category,severity,acknowledged) VALUES
('LCP regression on /products/erp','Mobile LCP rose from 2.3s to 3.4s after the latest hero image change.','performance','critical',false),
('Broken internal link detected','/blog/school-erp-fees-automation links to /products/fees (404).','technical','high',false),
('/contact dropped out of the index','Google reports "Crawled — currently not indexed" for /contact.','indexing','high',false),
('Toxic backlink detected','linkfarm-seo.biz added a dofollow link with spam score 87.','backlinks','medium',false),
('Ranking gain','"real estate crm nigeria" moved from position 9 to 5 this week.','rankings','info',true),
('Competitor overtook you','gulfmedsystems.ae now ranks 2 for "hospital software dubai".','competitive','medium',false);

INSERT INTO public.seo_leads (full_name,company,email,phone,country,source_channel,source_keyword,landing_url,score,stage,estimated_value) VALUES
('Adaeze Okonkwo','BrightMart Stores','adaeze@brightmart.ng','+234 803 555 0142','Nigeria','organic','best pos software africa','/products/pos',88,'qualified',14500),
('Samuel Kiprono','Rift Valley Academy','s.kiprono@rva.co.ke','+254 722 555 019','Kenya','organic','school management system kenya','/products/school',81,'demo_booked',9800),
('Fatima Al Mansoori','Gulf Care Clinics','fatima@gulfcare.ae','+971 50 555 3321','UAE','organic','hospital software dubai','/products/hospital',92,'proposal',42000),
('Rahul Mehta','Mehta Textiles','rahul@mehtatex.in','+91 98200 55512','India','organic','erp software for manufacturing','/products/erp',74,'new',26000),
('Chidi Nwosu','Lagos Prime Realty','chidi@lagosprime.ng','+234 701 555 0088','Nigeria','organic','real estate crm nigeria','/solutions/real-estate',69,'new',7200),
('Grace Wanjiru','Nairobi Fresh Foods','grace@nairobifresh.co.ke','+254 733 555 214','Kenya','organic','restaurant pos software kenya','/products/pos',63,'contacted',5400),
('Omar Al Zahrani','Zahrani Medical Group','omar@zahranimed.sa','+966 55 555 7712','Saudi Arabia','organic','clinic management software saudi','/products/hospital',77,'contacted',31000),
('Priya Sharma','Sharma Retail Chain','priya@sharmaretail.in','+91 98110 55598','India','organic','gst billing software','/solutions/retail',58,'new',11800);

INSERT INTO public.seo_ad_campaigns (name,channel,status,budget,spend,impressions,clicks,conversions,cpa,roas,starts_on,ends_on) VALUES
('POS — Nigeria search','google','active',4000,3120.50,412000,9840,186,16.78,4.20,now()::date-45,now()::date+15),
('School ERP — Kenya search','google','active',2500,1980.00,268000,6120,131,15.11,3.80,now()::date-38,now()::date+22),
('HMS — UAE search','google','active',6000,5240.75,198000,4310,74,70.82,5.10,now()::date-52,now()::date+8),
('ERP retargeting — India','meta','active',1800,1410.20,880000,14200,96,14.69,2.90,now()::date-30,now()::date+30),
('Retail POS — LinkedIn ABM','linkedin','paused',3000,1120.00,64000,890,12,93.33,1.60,now()::date-60,now()::date-5),
('Brand defence','google','active',1200,940.10,102000,5600,48,19.59,6.40,now()::date-90,now()::date+90);

INSERT INTO public.seo_email_campaigns (name,segment,subject,status,sent_count,opened_count,clicked_count,replied_count,scheduled_at) VALUES
('POS buying guide nurture','pos_leads','Choosing POS software? Start with these 7 questions','sent',4120,1854,612,78,now()-interval '9 days'),
('ERP checklist follow-up','erp_leads','Your ERP implementation checklist (42 points)','sent',2860,1316,489,54,now()-interval '5 days'),
('School fee automation case study','school_leads','How Rift Valley cut fee collection time by 60%','sent',1940,912,301,41,now()-interval '3 days'),
('Hospital compliance webinar','hospital_leads','UAE billing compliance: live walkthrough','scheduled',0,0,0,0,now()+interval '4 days'),
('Q re-engagement','cold_leads','Still evaluating business software?','draft',0,0,0,0,NULL);

INSERT INTO public.seo_social_posts (platform,content,link_url,status,scheduled_at,published_at,impressions,engagements) VALUES
('linkedin','Offline-first POS is not a nice-to-have in markets with unstable connectivity. Here is how we handle sync conflicts.','/products/pos','published',now()-interval '6 days',now()-interval '6 days',18400,742),
('x','42-point ERP implementation checklist — free, no gate.','/blog/erp-implementation-checklist','published',now()-interval '4 days',now()-interval '4 days',9100,318),
('facebook','Schools using automated fee reminders collect 60% faster. Case study inside.','/blog/school-erp-fees-automation','published',now()-interval '2 days',now()-interval '2 days',12600,486),
('instagram','Five signs your retail business has outgrown spreadsheets.','/solutions/retail','scheduled',now()+interval '1 day',NULL,0,0),
('linkedin','Hospital billing compliance in the UAE: what changed this year.','/products/hospital','scheduled',now()+interval '3 days',NULL,0,0);

INSERT INTO public.seo_social_comments (platform,author,comment,sentiment,auto_reply,status,replied_at) VALUES
('linkedin','Tunde A.','Does the POS work fully offline for 24h+?','question','Yes — our POS queues transactions locally and syncs automatically once connectivity returns. Happy to show you a live demo.','replied',now()-interval '5 days'),
('facebook','Mary K.','How much for a 3-branch school?','question','Pricing is per-branch and starts at $79/month. Full breakdown: /pricing','replied',now()-interval '2 days'),
('x','@retailops_ae','Finally a vendor that documents sync conflicts properly.','positive','Appreciate that! More engineering write-ups coming.','replied',now()-interval '4 days'),
('instagram','Ahmed S.','Is there Arabic language support?','question','Arabic UI and RTL layouts are supported across all modules.','pending',NULL),
('linkedin','Anonymous','Support was slow last quarter.','negative',NULL,'escalated',NULL);

INSERT INTO public.seo_inbox_messages (channel,contact_name,contact_handle,message,auto_reply,status,replied_at) VALUES
('website','Adaeze Okonkwo','adaeze@brightmart.ng','Can I get a demo for 4 retail branches this week?','Absolutely — booking link sent for Thursday 10:00 WAT.','replied',now()-interval '1 day'),
('whatsapp','Samuel Kiprono','+254 722 555 019','Does the school module handle CBC report cards?','Yes, CBC-compliant report cards are built in. Sharing a sample now.','replied',now()-interval '2 days'),
('website','Rahul Mehta','rahul@mehtatex.in','Need ERP with GST e-invoicing.','GST e-invoicing (IRN + QR) is included in the India ERP package.','unread',NULL),
('messenger','Grace Wanjiru','grace.wanjiru','What hardware do I need for the POS?','Any Android tablet or Windows PC plus a thermal printer works.','replied',now()-interval '3 days'),
('whatsapp','Omar Al Zahrani','+966 55 555 7712','Do you support Saudi ZATCA phase 2?','ZATCA phase 2 e-invoicing is certified in our hospital and retail modules.','unread',NULL);

INSERT INTO public.seo_automation_flows (name,trigger_event,steps,status,executions,conversion_rate) VALUES
('Organic demo request','form_submit:/contact','[{"step":"score_lead"},{"step":"notify_sales"},{"step":"send_email","template":"demo_confirm"},{"step":"create_task"}]','active',412,31.20),
('Blog reader nurture','content_download','[{"step":"tag_lead"},{"step":"wait","days":2},{"step":"send_email","template":"case_study"},{"step":"wait","days":4},{"step":"send_email","template":"demo_invite"}]','active',1860,12.40),
('Ranking drop response','rank_drop>5','[{"step":"create_issue"},{"step":"assign","to":"seo_manager"},{"step":"generate_ai_brief"}]','active',37,68.90),
('Toxic backlink triage','backlink_spam_score>70','[{"step":"flag_backlink"},{"step":"add_to_disavow"},{"step":"alert"}]','active',9,100.00),
('Abandoned pricing visit','page_exit:/pricing','[{"step":"retarget_ad"},{"step":"wait","days":1},{"step":"send_email","template":"pricing_help"}]','paused',248,7.80);

INSERT INTO public.seo_reels (title,prompt,script,platform,duration_seconds,status,views,model) VALUES
('POS offline mode in 30s','Show a cashier completing a sale with no internet, then syncing','Hook: "Internet down? Keep selling." — 3 shots, on-screen captions, CTA to /products/pos','instagram',30,'published',48200,'google/gemini-3.5-flash'),
('ERP rollout in 5 steps','Explain the 42-point checklist visually','Step-by-step kinetic text over dashboard footage, CTA to the checklist','linkedin',45,'published',21400,'google/gemini-3.5-flash'),
('School fees, automated','Parent gets reminder, pays, receipt issued','Split-screen parent/admin view, 4 captions, CTA to case study','instagram',28,'rendering',0,'google/gemini-3.5-flash'),
('Hospital billing in the UAE','Compliance explainer','Talking-head style captions over HMS billing screen','x',35,'draft',0,'google/gemini-3.5-flash');

INSERT INTO public.seo_integrations (provider,display_name,category,status,config,last_sync_at) VALUES
('google_search_console','Google Search Console','search','disconnected','{"scopes":["webmasters.readonly"],"property":""}',NULL),
('semrush','Semrush','research','disconnected','{"database":"us"}',NULL),
('google_analytics_4','Google Analytics 4','analytics','disconnected','{"property_id":""}',NULL),
('google_ads','Google Ads','advertising','disconnected','{}',NULL),
('lovable_ai','Lovable AI Gateway','ai','connected','{"default_model":"google/gemini-3.5-flash"}',now()-interval '1 hour'),
('linkedin','LinkedIn Pages','social','disconnected','{}',NULL),
('x','X (Twitter)','social','disconnected','{}',NULL),
('mailgun','Mailgun','email','disconnected','{}',NULL);

INSERT INTO public.seo_regions (code,name,region_group,flag,keywords_count,traffic_share,growth_pct) VALUES
('NG','Nigeria','africa','🇳🇬',245,21.40,18.20),
('KE','Kenya','africa','🇰🇪',189,14.10,24.60),
('ZA','South Africa','africa','🇿🇦',156,9.80,12.30),
('AE','UAE','middleeast','🇦🇪',312,19.70,15.40),
('SA','Saudi Arabia','middleeast','🇸🇦',198,10.20,28.10),
('IN','India','asia','🇮🇳',567,24.80,22.70);

INSERT INTO public.seo_page_behavior (page_url,recorded_on,sessions,avg_time_seconds,scroll_depth_pct,clicks,rage_clicks,bounce_rate)
SELECT p.url, d::date,
  (120 + random()*680)::int, (45 + random()*180)::int, (38 + random()*55)::int,
  (60 + random()*400)::int, (random()*9)::int, round((28 + random()*38)::numeric,2)
FROM public.seo_pages p CROSS JOIN generate_series(now()::date - interval '29 days', now()::date, interval '1 day') d;

INSERT INTO public.seo_spam_events (source_ip,event_type,detail,country,blocked) VALUES
('45.132.88.14','form_spam','12 contact-form submissions in 60 seconds','Russia',true),
('103.21.244.9','referrer_spam','Fake referrer traffic from seo-boost-traffic.xyz','India',true),
('192.42.116.201','scraper','Full-site crawl at 40 req/s ignoring robots.txt','Netherlands',true),
('185.220.101.7','comment_spam','Backlink-stuffed blog comments','Germany',true),
('41.203.77.52','click_fraud','38 ad clicks from one device fingerprint','Nigeria',true),
('172.104.55.19','negative_seo','Burst of 220 toxic backlinks in 48h','Singapore',false);

INSERT INTO public.seo_product_entries (product_name,category,target_keywords,meta_title,meta_description,structured_data,status) VALUES
('Vala POS','pos','{"cloud pos system nigeria","best pos software africa","restaurant pos software kenya"}','Cloud POS Software for Retail & Restaurants | Software Vala','Offline-first cloud POS with inventory sync, tax compliance and real-time reporting.','{"@type":"SoftwareApplication","applicationCategory":"BusinessApplication","offers":{"@type":"Offer","price":"49","priceCurrency":"USD"}}','published'),
('Vala ERP','erp','{"erp solutions india","erp software for manufacturing","accounting software kenya"}','ERP Software for Mid-Market Companies | Software Vala','Finance, inventory, HR and procurement in one modular ERP.','{"@type":"SoftwareApplication","applicationCategory":"BusinessApplication","offers":{"@type":"Offer","price":"129","priceCurrency":"USD"}}','published'),
('Vala School','school','{"school management system kenya","school erp software india","school fees management software"}','School Management Software | Fees, Attendance, Exams','Admissions, fees, attendance, exams and parent communication in one platform.','{"@type":"SoftwareApplication","applicationCategory":"EducationalApplication","offers":{"@type":"Offer","price":"79","priceCurrency":"USD"}}','published'),
('Vala HMS','hospital','{"hospital software dubai","hospital management system uae","clinic management software saudi"}','Hospital Management Software | HMS by Software Vala','OPD, IPD, pharmacy, lab and billing for clinics and hospitals.','{"@type":"SoftwareApplication","applicationCategory":"HealthApplication","offers":{"@type":"Offer","price":"199","priceCurrency":"USD"}}','published'),
('Vala CRM','crm','{"crm software for small business","sales crm dubai","real estate crm nigeria"}','CRM Software for Field Sales Teams | Software Vala','Pipeline, follow-ups and quotations for field-heavy sales teams.','{"@type":"SoftwareApplication","applicationCategory":"BusinessApplication","offers":{"@type":"Offer","price":"39","priceCurrency":"USD"}}','review');
