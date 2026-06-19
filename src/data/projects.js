export const projects = [
  {
    id: 'case-ecommerce',
    name: 'EasyGig',
    icon: '🛒',
    gradient: 'linear-gradient(135deg, #3389f2 0%, #7b61ff 100%)',
    description:
      'Inherited a stalled e-commerce rebuild. Restructured the backlog, introduced sprint ceremonies, and shipped MVP in 90 days.',
    metrics: ['90-Day Delivery', '40% Cost Reduction', '8 Engineers'],
    role: 'Lead Agile Project Manager',
    duration: '4 Months (Contract / Rescue)',
    client: 'National Retail Apparel Chain',
    teamSize: '8 Software Engineers, 1 UX Designer, 2 QA Engineers',
    websiteImages: [
      '/images/projects/case-ecommerce-desktop-landing.png',
      '/images/projects/case-ecommerce-desktop-services.png',
      '/images/projects/case-ecommerce-desktop-haul-details.png',
      '/images/projects/case-ecommerce-desktop-haul-items.png',
      '/images/projects/case-ecommerce-desktop-scheduled.png'
    ],
    mobileImages: [
      '/images/projects/case-ecommerce-mobile.png',
      '/images/projects/case-ecommerce-mobile-2.png',
      '/images/projects/case-ecommerce-mobile-active-hauls.png',
      '/images/projects/case-ecommerce-mobile-notifications.png',
      '/images/projects/case-ecommerce-mobile-haul-details.png',
      '/images/projects/case-ecommerce-mobile-incomplete-hauls.png',
      '/images/projects/case-ecommerce-mobile-overdue-alert.png'
    ],
    deliverables: [
      'Prioritized product backlog in Jira',
      'Sprint cadence (planning, daily standups, retrospectives)',
      'GraphQL-based microservices architecture layer',
      'Mobile-first responsive storefront interface',
      'Automated CI/CD integration pipeline'
    ],
    challenge: `The client had spent 9 months and over $200K on a legacy storefront overhaul that had completely stalled due to scope creep and architectural debt. The codebase was unstable, requirements were unclear, and team morale was at an all-time low. With a critical holiday shopping season approaching, the client needed a functioning Minimum Viable Product (MVP) shipped within 90 days or risk losing key market share.`,
    strategy: `Upon inheriting the project, I instituted a strict project rescue protocol:
1. **Backlog Pruning & Mapping**: I audited the entire backlog, eliminating 60% of non-essential features and establishing a high-value MVP roadmap.
2. **Ceremony Restructuring**: I introduced standard Scrum ceremonies—replacing endless status meetings with quick daily standups, structured sprint planning, and bi-weekly retrospectives to rebuild developer trust and velocity.
3. **Risk Management Matrix**: I mapped key architectural dependencies, specifically decoupling frontend presentation from legacy checkout systems via an intermediate GraphQL API layer, bypassing legacy backend roadblocks.
4. **WIP Limits**: I established Work-In-Progress (WIP) limits in Jira to focus the team on finishing existing tasks rather than starting new ones.`,
    results: `By focusing the team and streamlining the roadmap, the project shipped exactly 88 days after project takeover:
- **On-Time Delivery**: Shipped MVP before the Black Friday freeze, generating $1.2M in sales in the first 2 weeks.
- **Efficiency Gains**: Reduced server infrastructure overhead cost by 40% through serverless integration.
- **Team Velocity**: Increased sprint completion rate from 45% to 92% by sprint 4.
- **Compliance**: Shipped with full PCI-DSS Level 1 payment compliance.`
  },
  {
    id: 'case-fintech',
    name: 'Ops4Team',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #ff5f29 0%, #ff8f6b 100%)',
    description:
      'Led development of a real-time financial analytics dashboard serving 10K+ daily active users with 99.9% uptime.',
    metrics: ['10K+ DAU', '99.9% Uptime', '12-Person Team'],
    role: 'Senior Technical Project Manager',
    duration: '8 Months (Initiation to Launch)',
    client: 'FinFlow Global Corp',
    teamSize: '12 Cross-functional (6 Frontend, 3 Backend, 2 Devops, 1 QA)',
    websiteImages: [
      '/images/projects/case-fintech-desktop.png',
      '/images/projects/case-fintech-desktop-2.png'
    ],
    mobileImages: [
      '/images/projects/case-fintech-mobile.png',
      '/images/projects/case-fintech-mobile-2.png'
    ],
    deliverables: [
      'Real-time WebSockets streaming charts',
      'Multi-currency transactions ledger',
      'Custom KPI reporting widgets engine',
      'SOC2 Type II compliance framework setup',
      'High-availability Kubernetes deployment'
    ],
    challenge: `FinFlow needed to launch a premium analytics dashboard for enterprise traders. The core challenge was engineering a system capable of handling 50,000 active WebSocket connections streaming tick data without degradation, while displaying real-time compliance audits. The project had a hard regulatory deadline and required strict security audits (SOC2 Type II) prior to public release.`,
    strategy: `I managed the project utilizing a hybrid Agile-Waterfall approach, ensuring high-velocity development sprints while maintaining rigid timeline controls for security audits:
1. **Critical Path Management**: Defined critical path dependencies for SOC2 documentation, running it in parallel with UX design sprints.
2. **Spike Sprints**: Directed technical spikes in sprints 2 and 3 to load-test WebSockets, leading to a shift from REST polling to a managed Redis adapter.
3. **Automated Auditing**: Implemented automated static security scans (SAST) in the pull-request pipeline to identify vulnerability risks early.
4. **Agile Release Train**: Shipped features behind feature flags, enabling continuous user testing by internal stakeholders prior to the official security audit.`,
    results: `The platform launched 2 weeks ahead of the compliance deadline:
- **Scaling Milestone**: Successfully supported 10,000+ daily active users on launch day.
- **Service Level Agreement**: Maintained a 99.95% API uptime through load-balanced container groups.
- **Security Certification**: Obtained SOC2 Type II certification with zero critical findings.
- **Trader Engagement**: Average session length increased by 35% compared to legacy tools.`
  },
  {
    id: 'case-healthcare',
    name: '6sense Website',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #00c9a7 0%, #3389f2 100%)',
    description:
      'Managed cloud migration of legacy healthcare system. Zero downtime deployment with full HIPAA compliance maintained.',
    metrics: ['Zero Downtime', 'HIPAA Compliant', '3 Time Zones'],
    role: 'Lead Healthcare PM & Scrum Master',
    duration: '11 Months',
    client: 'HealthSync Networks LLC',
    teamSize: '10 Professionals (4 Remote Developers, 3 Clinicians, 3 IT Operations)',
    websiteImages: [
      '/images/projects/case-healthcare-desktop.png',
      '/images/projects/case-healthcare-desktop-2.png'
    ],
    mobileImages: [
      '/images/projects/case-healthcare-mobile.png',
      '/images/projects/case-healthcare-mobile-2.png'
    ],
    deliverables: [
      'AWS cloud infrastructure architecture diagram',
      'HIPAA Business Associate Agreement (BAA) documentation',
      'Encrypted HL7 EHR interface connector',
      'Automated disaster recovery database backup script',
      'Zero-downtime Blue/Green deployment playbook'
    ],
    challenge: `Migrating patient electronic health records (EHR) from on-premise hardware to the cloud. Healthcare operations are 24/7; any downtime could disrupt clinical operations. The migration had to occur with zero system outages, migrate 2 million historical patient records securely, and meet the stringent regulatory requirements of HIPAA and HITECH.`,
    strategy: `I built a zero-downtime migration strategy using a phased Agile approach:
1. **Clinician-Developer Alignment**: Facilitated workshops between the medical staff and IT teams to establish clinical risk thresholds.
2. **Phased Blue/Green Deployment**: Structured the rollout using AWS Blue/Green architecture. The legacy on-prem database (Blue) synched data in real-time to the cloud DB (Green) using custom database CDC (Change Data Capture) pipelines.
3. **Disaster Recovery Drills**: Led 3 simulated "rollback" drills, proving the team could fall back to local hardware in under 60 seconds if data integrity checks failed.
4. **Cross-Timezone Scrum**: Synchronized handoffs between the US ops team and the offshore engineering team using asynchronous sprint boards and short, daily summary updates.`,
    results: `The migration finished within the planned budget and schedule:
- **System Availability**: Achieved 100% system availability (zero minutes of downtime) throughout the entire migration.
- **Migration Accuracy**: Migrated 2.1M records with 100% data validation match.
- **Compliance Audit**: Passed external security audits with full HIPAA and ISO 27001 validation.
- **System Speed**: Patient chart load times decreased by 52% on the new cloud infrastructure.`
  }
];
