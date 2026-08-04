export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      seo_ad_campaigns: {
        Row: {
          budget: number
          channel: string
          clicks: number
          conversions: number
          cpa: number
          created_at: string
          ends_on: string | null
          id: string
          impressions: number
          name: string
          roas: number
          spend: number
          starts_on: string | null
          status: string
          updated_at: string
        }
        Insert: {
          budget?: number
          channel?: string
          clicks?: number
          conversions?: number
          cpa?: number
          created_at?: string
          ends_on?: string | null
          id?: string
          impressions?: number
          name: string
          roas?: number
          spend?: number
          starts_on?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          budget?: number
          channel?: string
          clicks?: number
          conversions?: number
          cpa?: number
          created_at?: string
          ends_on?: string | null
          id?: string
          impressions?: number
          name?: string
          roas?: number
          spend?: number
          starts_on?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_ai_suggestions: {
        Row: {
          confidence: number
          created_at: string
          id: string
          impact: string
          model: string | null
          status: string
          suggestion: string
          target_ref: string | null
          target_type: string
          title: string
          updated_at: string
        }
        Insert: {
          confidence?: number
          created_at?: string
          id?: string
          impact?: string
          model?: string | null
          status?: string
          suggestion: string
          target_ref?: string | null
          target_type?: string
          title: string
          updated_at?: string
        }
        Update: {
          confidence?: number
          created_at?: string
          id?: string
          impact?: string
          model?: string | null
          status?: string
          suggestion?: string
          target_ref?: string | null
          target_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_alerts: {
        Row: {
          acknowledged: boolean
          category: string
          created_at: string
          id: string
          message: string
          severity: string
          title: string
        }
        Insert: {
          acknowledged?: boolean
          category?: string
          created_at?: string
          id?: string
          message: string
          severity?: string
          title: string
        }
        Update: {
          acknowledged?: boolean
          category?: string
          created_at?: string
          id?: string
          message?: string
          severity?: string
          title?: string
        }
        Relationships: []
      }
      seo_audits: {
        Row: {
          breakdown: Json
          completed_at: string | null
          created_at: string
          id: string
          issues_found: number
          name: string
          pages_crawled: number
          score: number
          started_at: string
          status: string
        }
        Insert: {
          breakdown?: Json
          completed_at?: string | null
          created_at?: string
          id?: string
          issues_found?: number
          name: string
          pages_crawled?: number
          score?: number
          started_at?: string
          status?: string
        }
        Update: {
          breakdown?: Json
          completed_at?: string | null
          created_at?: string
          id?: string
          issues_found?: number
          name?: string
          pages_crawled?: number
          score?: number
          started_at?: string
          status?: string
        }
        Relationships: []
      }
      seo_automation_flows: {
        Row: {
          conversion_rate: number
          created_at: string
          executions: number
          id: string
          name: string
          status: string
          steps: Json
          trigger_event: string
          updated_at: string
        }
        Insert: {
          conversion_rate?: number
          created_at?: string
          executions?: number
          id?: string
          name: string
          status?: string
          steps?: Json
          trigger_event: string
          updated_at?: string
        }
        Update: {
          conversion_rate?: number
          created_at?: string
          executions?: number
          id?: string
          name?: string
          status?: string
          steps?: Json
          trigger_event?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_automation_runs: {
        Row: {
          automation_id: string
          finished_at: string | null
          id: string
          items_processed: number
          message: string | null
          started_at: string
          status: string
        }
        Insert: {
          automation_id: string
          finished_at?: string | null
          id?: string
          items_processed?: number
          message?: string | null
          started_at?: string
          status?: string
        }
        Update: {
          automation_id?: string
          finished_at?: string | null
          id?: string
          items_processed?: number
          message?: string | null
          started_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "seo_automation_runs_automation_id_fkey"
            columns: ["automation_id"]
            isOneToOne: false
            referencedRelation: "seo_automations"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_automations: {
        Row: {
          automation_type: string
          created_at: string
          description: string | null
          id: string
          last_run_at: string | null
          name: string
          next_run_at: string | null
          runs_count: number
          schedule: string
          status: string
          success_rate: number
          updated_at: string
        }
        Insert: {
          automation_type: string
          created_at?: string
          description?: string | null
          id?: string
          last_run_at?: string | null
          name: string
          next_run_at?: string | null
          runs_count?: number
          schedule?: string
          status?: string
          success_rate?: number
          updated_at?: string
        }
        Update: {
          automation_type?: string
          created_at?: string
          description?: string | null
          id?: string
          last_run_at?: string | null
          name?: string
          next_run_at?: string | null
          runs_count?: number
          schedule?: string
          status?: string
          success_rate?: number
          updated_at?: string
        }
        Relationships: []
      }
      seo_backlinks: {
        Row: {
          anchor_text: string | null
          created_at: string
          domain_authority: number
          first_seen_at: string
          id: string
          last_checked_at: string | null
          link_type: string
          source_domain: string
          source_url: string
          spam_score: number
          status: string
          target_url: string
        }
        Insert: {
          anchor_text?: string | null
          created_at?: string
          domain_authority?: number
          first_seen_at?: string
          id?: string
          last_checked_at?: string | null
          link_type?: string
          source_domain: string
          source_url: string
          spam_score?: number
          status?: string
          target_url: string
        }
        Update: {
          anchor_text?: string | null
          created_at?: string
          domain_authority?: number
          first_seen_at?: string
          id?: string
          last_checked_at?: string | null
          link_type?: string
          source_domain?: string
          source_url?: string
          spam_score?: number
          status?: string
          target_url?: string
        }
        Relationships: []
      }
      seo_benchmark_runs: {
        Row: {
          created_at: string
          id: string
          label: string
          notes: string | null
          pagination_ms: number
          query_ms: number
          report_ms: number
          rows_scanned: number
          status: string
          target: string
          ttfb_ms: number
        }
        Insert: {
          created_at?: string
          id?: string
          label: string
          notes?: string | null
          pagination_ms?: number
          query_ms?: number
          report_ms?: number
          rows_scanned?: number
          status?: string
          target: string
          ttfb_ms?: number
        }
        Update: {
          created_at?: string
          id?: string
          label?: string
          notes?: string | null
          pagination_ms?: number
          query_ms?: number
          report_ms?: number
          rows_scanned?: number
          status?: string
          target?: string
          ttfb_ms?: number
        }
        Relationships: []
      }
      seo_competitor_gaps: {
        Row: {
          competitor_id: string
          created_at: string
          id: string
          keyword: string
          opportunity: string
          our_position: number | null
          search_volume: number
          their_position: number | null
        }
        Insert: {
          competitor_id: string
          created_at?: string
          id?: string
          keyword: string
          opportunity?: string
          our_position?: number | null
          search_volume?: number
          their_position?: number | null
        }
        Update: {
          competitor_id?: string
          created_at?: string
          id?: string
          keyword?: string
          opportunity?: string
          our_position?: number | null
          search_volume?: number
          their_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "seo_competitor_gaps_competitor_id_fkey"
            columns: ["competitor_id"]
            isOneToOne: false
            referencedRelation: "seo_competitors"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_competitors: {
        Row: {
          backlinks_count: number
          created_at: string
          domain: string
          domain_authority: number
          id: string
          keywords_count: number
          name: string
          region: string
          traffic_estimate: number
          updated_at: string
          visibility_score: number
        }
        Insert: {
          backlinks_count?: number
          created_at?: string
          domain: string
          domain_authority?: number
          id?: string
          keywords_count?: number
          name: string
          region?: string
          traffic_estimate?: number
          updated_at?: string
          visibility_score?: number
        }
        Update: {
          backlinks_count?: number
          created_at?: string
          domain?: string
          domain_authority?: number
          id?: string
          keywords_count?: number
          name?: string
          region?: string
          traffic_estimate?: number
          updated_at?: string
          visibility_score?: number
        }
        Relationships: []
      }
      seo_content_items: {
        Row: {
          body: string | null
          content_type: string
          created_at: string
          id: string
          model: string | null
          published_at: string | null
          seo_score: number
          status: string
          target_keyword: string | null
          title: string
          updated_at: string
          url: string | null
          word_count: number
        }
        Insert: {
          body?: string | null
          content_type?: string
          created_at?: string
          id?: string
          model?: string | null
          published_at?: string | null
          seo_score?: number
          status?: string
          target_keyword?: string | null
          title: string
          updated_at?: string
          url?: string | null
          word_count?: number
        }
        Update: {
          body?: string | null
          content_type?: string
          created_at?: string
          id?: string
          model?: string | null
          published_at?: string | null
          seo_score?: number
          status?: string
          target_keyword?: string | null
          title?: string
          updated_at?: string
          url?: string | null
          word_count?: number
        }
        Relationships: []
      }
      seo_email_campaigns: {
        Row: {
          clicked_count: number
          created_at: string
          id: string
          name: string
          opened_count: number
          replied_count: number
          scheduled_at: string | null
          segment: string
          sent_count: number
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          clicked_count?: number
          created_at?: string
          id?: string
          name: string
          opened_count?: number
          replied_count?: number
          scheduled_at?: string | null
          segment?: string
          sent_count?: number
          status?: string
          subject: string
          updated_at?: string
        }
        Update: {
          clicked_count?: number
          created_at?: string
          id?: string
          name?: string
          opened_count?: number
          replied_count?: number
          scheduled_at?: string | null
          segment?: string
          sent_count?: number
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_error_events: {
        Row: {
          context: Json
          created_at: string
          first_seen_at: string
          fn_name: string | null
          id: string
          last_seen_at: string
          message: string
          name: string
          occurrences: number
          resolved: boolean
          route: string | null
          severity: string
          source: string
          stack: string | null
        }
        Insert: {
          context?: Json
          created_at?: string
          first_seen_at?: string
          fn_name?: string | null
          id?: string
          last_seen_at?: string
          message: string
          name: string
          occurrences?: number
          resolved?: boolean
          route?: string | null
          severity?: string
          source: string
          stack?: string | null
        }
        Update: {
          context?: Json
          created_at?: string
          first_seen_at?: string
          fn_name?: string | null
          id?: string
          last_seen_at?: string
          message?: string
          name?: string
          occurrences?: number
          resolved?: boolean
          route?: string | null
          severity?: string
          source?: string
          stack?: string | null
        }
        Relationships: []
      }
      seo_inbox_messages: {
        Row: {
          auto_reply: string | null
          channel: string
          contact_handle: string | null
          contact_name: string
          created_at: string
          id: string
          message: string
          replied_at: string | null
          status: string
        }
        Insert: {
          auto_reply?: string | null
          channel?: string
          contact_handle?: string | null
          contact_name: string
          created_at?: string
          id?: string
          message: string
          replied_at?: string | null
          status?: string
        }
        Update: {
          auto_reply?: string | null
          channel?: string
          contact_handle?: string | null
          contact_name?: string
          created_at?: string
          id?: string
          message?: string
          replied_at?: string | null
          status?: string
        }
        Relationships: []
      }
      seo_indexing_records: {
        Row: {
          crawl_status: string
          created_at: string
          discovered_at: string
          http_status: number
          id: string
          index_state: string
          indexed_at: string | null
          last_crawled_at: string | null
          notes: string | null
          source: string
          url: string
        }
        Insert: {
          crawl_status?: string
          created_at?: string
          discovered_at?: string
          http_status?: number
          id?: string
          index_state?: string
          indexed_at?: string | null
          last_crawled_at?: string | null
          notes?: string | null
          source?: string
          url: string
        }
        Update: {
          crawl_status?: string
          created_at?: string
          discovered_at?: string
          http_status?: number
          id?: string
          index_state?: string
          indexed_at?: string | null
          last_crawled_at?: string | null
          notes?: string | null
          source?: string
          url?: string
        }
        Relationships: []
      }
      seo_integrations: {
        Row: {
          category: string
          config: Json
          created_at: string
          display_name: string
          id: string
          last_sync_at: string | null
          provider: string
          status: string
          updated_at: string
        }
        Insert: {
          category?: string
          config?: Json
          created_at?: string
          display_name: string
          id?: string
          last_sync_at?: string | null
          provider: string
          status?: string
          updated_at?: string
        }
        Update: {
          category?: string
          config?: Json
          created_at?: string
          display_name?: string
          id?: string
          last_sync_at?: string | null
          provider?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_issues: {
        Row: {
          category: string
          created_at: string
          description: string
          detected_at: string
          fix_suggestion: string | null
          id: string
          issue_type: string
          page_url: string
          resolved_at: string | null
          severity: string
          status: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description: string
          detected_at?: string
          fix_suggestion?: string | null
          id?: string
          issue_type: string
          page_url: string
          resolved_at?: string | null
          severity?: string
          status?: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          detected_at?: string
          fix_suggestion?: string | null
          id?: string
          issue_type?: string
          page_url?: string
          resolved_at?: string | null
          severity?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_keyword_rankings: {
        Row: {
          clicks: number
          created_at: string
          id: string
          impressions: number
          keyword_id: string
          position: number
          recorded_on: string
        }
        Insert: {
          clicks?: number
          created_at?: string
          id?: string
          impressions?: number
          keyword_id: string
          position: number
          recorded_on: string
        }
        Update: {
          clicks?: number
          created_at?: string
          id?: string
          impressions?: number
          keyword_id?: string
          position?: number
          recorded_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "seo_keyword_rankings_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "seo_keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_keywords: {
        Row: {
          country: string | null
          cpc: number
          created_at: string
          difficulty: number
          id: string
          industry: string | null
          intent: string
          keyword: string
          position: number | null
          previous_position: number | null
          region: string
          search_volume: number
          status: string
          target_url: string | null
          updated_at: string
        }
        Insert: {
          country?: string | null
          cpc?: number
          created_at?: string
          difficulty?: number
          id?: string
          industry?: string | null
          intent?: string
          keyword: string
          position?: number | null
          previous_position?: number | null
          region?: string
          search_volume?: number
          status?: string
          target_url?: string | null
          updated_at?: string
        }
        Update: {
          country?: string | null
          cpc?: number
          created_at?: string
          difficulty?: number
          id?: string
          industry?: string | null
          intent?: string
          keyword?: string
          position?: number | null
          previous_position?: number | null
          region?: string
          search_volume?: number
          status?: string
          target_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      seo_leads: {
        Row: {
          company: string | null
          country: string | null
          created_at: string
          email: string
          estimated_value: number
          full_name: string
          id: string
          landing_url: string | null
          phone: string | null
          score: number
          source_channel: string
          source_keyword: string | null
          stage: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          country?: string | null
          created_at?: string
          email: string
          estimated_value?: number
          full_name: string
          id?: string
          landing_url?: string | null
          phone?: string | null
          score?: number
          source_channel?: string
          source_keyword?: string | null
          stage?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          country?: string | null
          created_at?: string
          email?: string
          estimated_value?: number
          full_name?: string
          id?: string
          landing_url?: string | null
          phone?: string | null
          score?: number
          source_channel?: string
          source_keyword?: string | null
          stage?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_meta_rules: {
        Row: {
          applies_to: number
          created_at: string
          description_template: string
          id: string
          name: string
          og_image_template: string | null
          priority: number
          status: string
          title_template: string
          updated_at: string
          url_pattern: string
        }
        Insert: {
          applies_to?: number
          created_at?: string
          description_template: string
          id?: string
          name: string
          og_image_template?: string | null
          priority?: number
          status?: string
          title_template: string
          updated_at?: string
          url_pattern: string
        }
        Update: {
          applies_to?: number
          created_at?: string
          description_template?: string
          id?: string
          name?: string
          og_image_template?: string | null
          priority?: number
          status?: string
          title_template?: string
          updated_at?: string
          url_pattern?: string
        }
        Relationships: []
      }
      seo_page_behavior: {
        Row: {
          avg_time_seconds: number
          bounce_rate: number
          clicks: number
          created_at: string
          id: string
          page_url: string
          rage_clicks: number
          recorded_on: string
          scroll_depth_pct: number
          sessions: number
        }
        Insert: {
          avg_time_seconds?: number
          bounce_rate?: number
          clicks?: number
          created_at?: string
          id?: string
          page_url: string
          rage_clicks?: number
          recorded_on: string
          scroll_depth_pct?: number
          sessions?: number
        }
        Update: {
          avg_time_seconds?: number
          bounce_rate?: number
          clicks?: number
          created_at?: string
          id?: string
          page_url?: string
          rage_clicks?: number
          recorded_on?: string
          scroll_depth_pct?: number
          sessions?: number
        }
        Relationships: []
      }
      seo_pages: {
        Row: {
          canonical_url: string | null
          created_at: string
          h1: string | null
          id: string
          index_status: string
          issues_count: number
          last_crawled_at: string | null
          meta_description: string | null
          meta_title: string | null
          page_type: string
          seo_score: number
          title: string
          updated_at: string
          url: string
          word_count: number
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          h1?: string | null
          id?: string
          index_status?: string
          issues_count?: number
          last_crawled_at?: string | null
          meta_description?: string | null
          meta_title?: string | null
          page_type?: string
          seo_score?: number
          title: string
          updated_at?: string
          url: string
          word_count?: number
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          h1?: string | null
          id?: string
          index_status?: string
          issues_count?: number
          last_crawled_at?: string | null
          meta_description?: string | null
          meta_title?: string | null
          page_type?: string
          seo_score?: number
          title?: string
          updated_at?: string
          url?: string
          word_count?: number
        }
        Relationships: []
      }
      seo_performance_metrics: {
        Row: {
          avg_position: number
          clicks: number
          cls: number
          conversions: number
          created_at: string
          ctr: number
          id: string
          impressions: number
          inp_ms: number
          lcp_ms: number
          organic_sessions: number
          recorded_on: string
        }
        Insert: {
          avg_position?: number
          clicks?: number
          cls?: number
          conversions?: number
          created_at?: string
          ctr?: number
          id?: string
          impressions?: number
          inp_ms?: number
          lcp_ms?: number
          organic_sessions?: number
          recorded_on: string
        }
        Update: {
          avg_position?: number
          clicks?: number
          cls?: number
          conversions?: number
          created_at?: string
          ctr?: number
          id?: string
          impressions?: number
          inp_ms?: number
          lcp_ms?: number
          organic_sessions?: number
          recorded_on?: string
        }
        Relationships: []
      }
      seo_product_entries: {
        Row: {
          category: string
          created_at: string
          id: string
          meta_description: string | null
          meta_title: string | null
          product_name: string
          status: string
          structured_data: Json
          target_keywords: string[]
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          product_name: string
          status?: string
          structured_data?: Json
          target_keywords?: string[]
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          product_name?: string
          status?: string
          structured_data?: Json
          target_keywords?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      seo_reels: {
        Row: {
          created_at: string
          duration_seconds: number
          id: string
          model: string | null
          platform: string
          prompt: string
          script: string | null
          status: string
          title: string
          updated_at: string
          views: number
        }
        Insert: {
          created_at?: string
          duration_seconds?: number
          id?: string
          model?: string | null
          platform?: string
          prompt: string
          script?: string | null
          status?: string
          title: string
          updated_at?: string
          views?: number
        }
        Update: {
          created_at?: string
          duration_seconds?: number
          id?: string
          model?: string | null
          platform?: string
          prompt?: string
          script?: string | null
          status?: string
          title?: string
          updated_at?: string
          views?: number
        }
        Relationships: []
      }
      seo_regions: {
        Row: {
          code: string
          created_at: string
          flag: string | null
          growth_pct: number
          id: string
          keywords_count: number
          name: string
          region_group: string
          traffic_share: number
        }
        Insert: {
          code: string
          created_at?: string
          flag?: string | null
          growth_pct?: number
          id?: string
          keywords_count?: number
          name: string
          region_group?: string
          traffic_share?: number
        }
        Update: {
          code?: string
          created_at?: string
          flag?: string | null
          growth_pct?: number
          id?: string
          keywords_count?: number
          name?: string
          region_group?: string
          traffic_share?: number
        }
        Relationships: []
      }
      seo_reports: {
        Row: {
          created_at: string
          generated_at: string | null
          id: string
          name: string
          period_end: string
          period_start: string
          report_type: string
          status: string
          summary: Json
        }
        Insert: {
          created_at?: string
          generated_at?: string | null
          id?: string
          name: string
          period_end: string
          period_start: string
          report_type?: string
          status?: string
          summary?: Json
        }
        Update: {
          created_at?: string
          generated_at?: string | null
          id?: string
          name?: string
          period_end?: string
          period_start?: string
          report_type?: string
          status?: string
          summary?: Json
        }
        Relationships: []
      }
      seo_social_comments: {
        Row: {
          author: string
          auto_reply: string | null
          comment: string
          created_at: string
          id: string
          platform: string
          replied_at: string | null
          sentiment: string
          status: string
        }
        Insert: {
          author: string
          auto_reply?: string | null
          comment: string
          created_at?: string
          id?: string
          platform: string
          replied_at?: string | null
          sentiment?: string
          status?: string
        }
        Update: {
          author?: string
          auto_reply?: string | null
          comment?: string
          created_at?: string
          id?: string
          platform?: string
          replied_at?: string | null
          sentiment?: string
          status?: string
        }
        Relationships: []
      }
      seo_social_posts: {
        Row: {
          content: string
          created_at: string
          engagements: number
          id: string
          impressions: number
          link_url: string | null
          platform: string
          published_at: string | null
          scheduled_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          engagements?: number
          id?: string
          impressions?: number
          link_url?: string | null
          platform: string
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          engagements?: number
          id?: string
          impressions?: number
          link_url?: string | null
          platform?: string
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_spam_events: {
        Row: {
          blocked: boolean
          country: string | null
          created_at: string
          detail: string | null
          event_type: string
          id: string
          source_ip: string
        }
        Insert: {
          blocked?: boolean
          country?: string | null
          created_at?: string
          detail?: string | null
          event_type: string
          id?: string
          source_ip: string
        }
        Update: {
          blocked?: boolean
          country?: string | null
          created_at?: string
          detail?: string | null
          event_type?: string
          id?: string
          source_ip?: string
        }
        Relationships: []
      }
      seo_technical_checks: {
        Row: {
          affected_urls: number
          category: string
          created_at: string
          detail: string | null
          id: string
          last_checked_at: string
          name: string
          status: string
        }
        Insert: {
          affected_urls?: number
          category?: string
          created_at?: string
          detail?: string | null
          id?: string
          last_checked_at?: string
          name: string
          status?: string
        }
        Update: {
          affected_urls?: number
          category?: string
          created_at?: string
          detail?: string | null
          id?: string
          last_checked_at?: string
          name?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
