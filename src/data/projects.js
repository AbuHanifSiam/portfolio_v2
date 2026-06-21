export const projects = [
  {
    id: 'case-easygig',
    name: 'EasyGig',
    icon: '🛒',
    logo: '/images/projects/logo-easygig.png',
    gradient: 'linear-gradient(135deg, #3389f2 0%, #7b61ff 100%)',
    description:
      'Comprehensive gig management ecosystem streamlining freelancer and client interactions through automated workflows.',
    metrics: ['Rescued Stalled Product', '3 Apps Shipped', 'Agile from Scratch'],
    role: 'Lead Agile Project Manager',
    duration: '12 Months (Contract / Rescue)',
    client: 'US_based',
    teamSize: '2 Software Engineers, 1 UX Designer, 1 QA Engineer, 1 Product Owner',
    websiteImages: [
      '/images/projects/case-easygig-desktop-landing.png',
      '/images/projects/case-easygig-desktop-services.png',
      '/images/projects/case-easygig-desktop-haul-details.png',
      '/images/projects/case-easygig-desktop-haul-items.png',
      '/images/projects/case-easygig-desktop-scheduled.png'
    ],
    mobileImages: [
      '/images/projects/case-easygig-mobile-overdue-alert.png',
      '/images/projects/case-easygig-mobile-active-hauls.png',
      '/images/projects/case-easygig-mobile-notifications.png',
      '/images/projects/case-easygig-mobile-haul-details.png',
      '/images/projects/case-easygig-mobile-incomplete-hauls.png'
    ],
    deliverables: [
      'Prioritized product backlog in Jira',
      'Sprint cadence (planning, daily standups, retrospectives)',
      'GraphQL-based microservices architecture layer',
      'Mobile-first responsive storefront interface',
      'Automated CI/CD integration pipeline'
    ],
    challenge: `EasyGig was struggling with high customer bounce rates due to critical live bugs. The platform was handed over mid-flight from a previous team that had initiated multiple features but completed none.
                The immediate priority was stopping the loss of live customers, conducting a full codebase audit, and establishing predictable delivery cadences to replace unstructured Kanban workflows.`,
    strategy: `Upon inheriting the project, I instituted a strict project rescue protocol:
                1. **Technical Audit & Triage**: Executed a comprehensive audit of all in-progress features. Shifted engineering focus to isolating and resolving critical live bugs to stabilize the customer experience.
                2. **Agile Scrum Implementation**: Migrated the infrastructure from Kanban to Scrum. Restructured the Jira backlog, established strict two-week sprints, and instituted daily standups to regain timeline control.
                3. **Design-to-Dev Pipeline**: Implemented a strict gateway where logic changes (driven by live feedback) had to be finalized in design before entering a sprint, eliminating scope creep.
                4. **Technical Logic Facilitation**: Mapped out complex logical flows and edge cases with the engineering team, ensuring robust testing protocols were established before deployment.`,
    results: `Post-stabilization, the platform began delivering measurable business outcomes:
                - **7–10 Weekly Hauls Booked**: Consistent booking volume restored after resolving critical scheduling bugs that were causing customer drop-off.
                - **$150+ Min Per Haul Value**: Established a sustainable per-haul revenue floor through improved service packaging and pricing logic.
                - **100% Automated Payroll**: Fully automated the weekly hauler payroll rollout, eliminating manual payment processing and reducing payout errors to zero.
                - **85% Bug Backlog Cleared**: Resolved 85% of critical and high-severity bugs within the first 3 sprints, stabilizing the core customer experience.
                - **Sprint Velocity**: Increased sprint completion rate from ~40% to 90%+ by sprint 4 through Scrum adoption and WIP limits.
                - **Customer Churn Reduced**: Reduced weekly customer churn by 60% after deploying the stabilized platform with real-time notifications and haul tracking.`
  },
  {
    id: 'case-ops4team',
    name: 'Ops4Team',
    icon: '📊',
    logo: '/images/projects/logo-ops4.png',
    gradient: 'linear-gradient(135deg, #ff5f29 0%, #ff8f6b 100%)',
    description:
      'Internal operations tool designed to maximize team productivity through visual project mapping and resource allocation.',
    metrics: ['Internal Ops Digitized', 'Team Efficiency Tool', 'PO-Led Delivery'],
    role: 'Senior Technical Project Manager',
    duration: '1 Year (Initiation to Launch)',
    client: '6sense',
    teamSize: '(2 Frontend, 2 Backend, 2 QA, 2 UX Designer, 2 Project Coordinator, 1 Product Owner)',
    websiteImages: [
      '/images/projects/case-ops4team-desktop-1.png',
      '/images/projects/case-ops4team-desktop-2.png',
      '/images/projects/case-ops4team-desktop-3.png',
      '/images/projects/case-ops4team-desktop-4.png',
      '/images/projects/case-ops4team-desktop-5.png'
    ],
    mobileImages: [],
    deliverables: [
      'Software Requirements Specification (SRS) document',
      'Unified executive dashboard (React + NestJS)',
      'Desktop activity tracker integration layer',
      'Jira performance metrics aggregation engine',
      'HR leave management and payroll module',
      'Role-based access control (RBAC) system'
    ],
    challenge: `Management lacked a single source of truth, relying on a fragmented and expensive suite of third-party tools to handle employee time-tracking, project statuses, and HR leave management.
                The objective was to architect a proprietary internal platform from scratch, securely handling complex data from micro-level developer idle-time to macro-level portfolio health for the executive team.`,
    strategy: `I led the full lifecycle from discovery to deployment, executing the following management framework:
                1. **Executive Discovery & SRS**: Spearheaded requirements gathering with the CTO and HR leadership. Translated business needs into a developer-ready Software Requirements Specification (SRS).
                2. **Complex Logic Facilitation**: Facilitated architectural planning sessions with senior engineers to define complex algorithms for merging desktop tracker data with Jira performance metrics.
                3. **Agile Build Orchestration**: Managed the end-to-end execution. Configured Jira workspaces and maintained strict two-week Scrum sprints to keep React and NestJS teams aligned.
                4. **Feature Consolidation**: Successfully coordinated the integration of disparate modules, client project dashboards, time-tracking APIs, and HR systems, into a single unified UI.`,
    results: `The platform launched successfully and delivered immediate operational value:
                - **40+ Active Daily Users**: Achieved consistent daily adoption across engineering, HR, and executive teams within the first month.
                - **100% SaaS Cost Consolidation**: Eliminated reliance on 4+ fragmented third-party tools, consolidating all operational workflows into a single proprietary platform.
                - **Unified Visibility**: Delivered a cross-department executive dashboard providing real-time portfolio health, team utilization, and project status at a glance.
                - **3x Faster Reporting**: Reduced weekly status report generation from ~3 hours of manual aggregation to instant automated summaries.
                - **On-Time Delivery**: Shipped all 6 core modules within the planned 8-month timeline with zero scope overruns.
                - **Data Accuracy**: Achieved 99%+ accuracy in automated time-tracking reconciliation against manual payroll records.`
  },
  {
    id: 'case-6sense',
    name: '6sense Website',
    icon: '🏥',
    logo: '/images/projects/logo-6sense.png',
    gradient: 'linear-gradient(135deg, #00c9a7 0%, #3389f2 100%)',
    description:
      'Maintained and optimized the flagship digital presence for a leading technical services firm.',
    metrics: ['Brand Presence Built', 'SEO Optimized', 'Zero-Dev Handover'],
    role: 'Project Manager & Product Owner',
    duration: '11 Months',
    client: '6sense',
    teamSize: '(1 Remote BA, 1 Backend, 1 Frontend, 1 QA, 1 UI/UX Designer, 1 SEO, 1 Product Owner)',
    websiteImages: [
      '/images/projects/case-6sense-desktop-hero.png',
      '/images/projects/case-6sense-desktop-menu.png',
      '/images/projects/case-6sense-desktop-blog.png',
      '/images/projects/case-6sense-desktop-contact.png'
    ],
    mobileImages: [],
    deliverables: [
      'Fully responsive corporate website (Next.js + CMS)',
      'SEO strategy and implementation (on-page + technical)',
      'Service portfolio pages with case study showcases',
      'Lead capture forms with CRM integration',
      'Blog and thought leadership content hub',
      'Analytics dashboard (Google Analytics + Hotjar)'
    ],
    challenge: `6sense had no online presence — no company website, no digital portfolio, and no structured way to showcase expertise to prospective clients in the US and European markets.
                Without a professional digital footprint, the sales team had no collateral for outbound campaigns, inbound leads were nonexistent, and the company was losing competitive bids to firms with stronger brand visibility. The goal was to build a high-impact website from scratch that could serve as both a marketing engine and a credibility anchor for enterprise client acquisition.`,
    strategy: `I owned the end-to-end delivery of the website, from discovery to launch:
                1. **Stakeholder Discovery & Content Strategy**: Conducted workshops with leadership to define the brand narrative, target audience personas (US & Europe), and key service differentiators to shape the site's messaging architecture.
                2. **Information Architecture & UX**: Collaborated with the UI/UX designer to map user journeys optimized for lead conversion — structuring service pages, case studies, and CTAs for maximum engagement.
                3. **Agile Build Management**: Ran two-week sprints with the dev team (React/Next.js frontend, headless CMS backend), maintaining a prioritized backlog and weekly stakeholder demos to ensure alignment.
                4. **SEO & Launch Optimization**: Partnered with the SEO specialist to implement technical SEO (schema markup, Core Web Vitals, sitemap), keyword-targeted content, and analytics instrumentation before go-live.`,
    results: `The website launched on schedule and immediately began driving business development:
                - **Brand Presence Established**: Launched a professional, SEO-optimized website — giving 6sense its first-ever digital storefront in the US and European markets.
                - **Inbound Lead Generation**: Generated qualified inbound inquiries within the first 6 weeks of launch, directly attributed to organic search traffic.
                - **SEO Performance**: Achieved first-page Google rankings for 5+ target service keywords within 3 months of launch.
                - **Sales Enablement**: Armed the sales team with a shareable portfolio of case studies and service pages, reducing pitch preparation time by 50%.
                - **Zero-Dev Handover**: Delivered a fully CMS-managed site, enabling the marketing team to publish content independently without developer involvement.
                - **Page Performance**: Achieved 90+ Lighthouse scores across Performance, Accessibility, and SEO on all core pages.`
  }
];
