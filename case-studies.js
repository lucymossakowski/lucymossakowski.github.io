// Case study content — only injected into the DOM after authentication
window.caseStudyContent = {
  'modal-3': `
        <div class="rounded-xl overflow-hidden bg-ink/5">
          <img src="images/payments-hero.png" alt="Redesigned Payments Admin catalogue table showing simplified layout with customisable columns" class="w-full">
        </div>
        <p class="text-xs text-ink-muted mt-2 mb-10">The redesigned Payments Admin catalogue view</p>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">The Problem</h3>
        <p class="text-ink-light leading-relaxed mb-4">Zynga's Payments Admin tool is used by game teams, release operations and customer support, including the player VIP team to manage in-game catalogue products, export to storefronts, track player transactions, and manage blocked players. The existing tool had grown haphazardly over time: it was difficult to use, suffered from poor performance, and created a heavy reliance on external teams for tasks users should have been able to complete independently.</p>
        <p class="text-ink-light leading-relaxed mb-10">Phase 1 addressed the catalogue and localisation pages. The ongoing work continues migrating the remaining pages to a redesigned UI.</p>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Process</h3>
        <div class="space-y-3 mb-10">
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">1. Research</p><p class="text-sm text-ink-light mt-1">Conducted 20+ user interviews across game teams, release operations, customer support, and the payments engineering team. Captured qualitative feedback to establish core user journeys, understand performance pain points, and determine user needs.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">2. Design</p><p class="text-sm text-ink-light mt-1">Translated research findings into design requirements. Set up wireframes addressing key issues: simplified table layouts, stacked search/sort/filter, auto-fill input fields, clearer publish flows, and improved export functionality. Iterated continuously with engineering.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">3. Iterate</p><p class="text-sm text-ink-light mt-1">Working through the tool tab by tab with catalogue and localisation complete, transactions in progress, with regional pricing templates, grant retry, and blocked players to follow. Each phase follows the same research-first approach.</p></div>
        </div>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">What users said</h3>
        <div class="rounded-xl bg-ink/[0.03] p-6 pt-4 mb-10">
          <div class="space-y-4">
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;The publish modal is difficult to understand due to existing design choices - bullet points look like checkboxes.&rdquo;</blockquote>
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;The overall process is confusing. There is no set process, so new members have no official learning material to rely on.&rdquo;</blockquote>
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;Exporting for Apple fails frequently when more than five catalogue items are selected. The only workaround is to keep attempting the export - usually within five tries it works.&rdquo;</blockquote>
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;Free transactions cluttering the list makes finding actual purchases difficult. There is no filtering on the main tab - no filtering by store, vendor, status, amount, or date range.&rdquo;</blockquote>
          </div>
          <p class="text-xs text-ink-muted mt-4">From 20+ interviews across game teams, release operations, customer support, and the payments engineering team</p>
        </div>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Solution</h3>
        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-before.png" alt="Old Payments Admin catalogue UI showing cluttered table with too many visible columns and confusing publish status" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">Before: cluttered catalogue table</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-after.png" alt="Redesigned Payments Admin catalogue UI with simplified table layout, stacked search and filter, and clearer status indicators" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">After: simplified layout with customisable columns</figcaption></figure>
        </div>
        <p class="text-ink-light leading-relaxed mb-4">The redesigned Payments Admin simplifies complex workflows that previously required external support. Key improvements include a cleaner catalogue table with customisable columns, auto-filled product fields to reduce manual input, a more intuitive publish flow that reduces user anxiety, and streamlines the export functionality. A direct link to the Slack support channel in the portal header helps prevent reliance on the release operations team for routine tasks.</p>
        <figure class="rounded-xl overflow-hidden bg-ink/5 mb-10">
          <img src="images/payments-detail.png" alt="Product detail view showing auto-filled fields and streamlined input layout" class="w-full case-img" onclick="openLightbox(this,event)">
          <figcaption class="text-xs text-ink-muted p-2">Product detail view with auto-filled fields</figcaption>
        </figure>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Outcome</h3>
        <div class="rounded-xl bg-ink/[0.03] px-6 pt-4 pb-4 mb-3">
          <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;I really enjoy using the new tool due to its cleaner UI, easier to read, and publishing is more straightforward. The new purchase rule descriptions are pretty clear and allow users to know what the fields are actually doing.&rdquo;</blockquote>
          <p class="text-xs text-ink-muted mt-3 pl-4">Game Team PM</p>
        </div>
        <div class="space-y-3 mb-10">
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">Reduced dependency</p><p class="text-sm text-ink-light mt-1">Routine task requests to the release operations team decreased as game teams gained the ability to complete workflows independently.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">Design-led process</p><p class="text-sm text-ink-light mt-1">Product now holds new features for design review before development, where previously features were added without designer involvement.</p></div>
        </div>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Reflection</h3>
        <p class="text-ink-light leading-relaxed">This project reinforced how important it is to let research lead the design direction rather than assumptions. The user base turned out to be far more diverse than expected, from VIP account managers checking a single transaction, to release operations exporting hundreds of products at a time, and each group interacts with the tool in fundamentally different ways. If I were starting again, I'd push earlier for role-based access and tailored views rather than a one-size-fits-all interface.</p>`,

  'modal-2': `
        <div class="rounded-xl overflow-hidden bg-ink/5">
          <img src="images/locmanager-hero.png" alt="LocManager interface showing the group configuration view with sidebar navigation and scheduler" class="w-full">
        </div>
        <p class="text-xs text-ink-muted mt-2 mb-10">The LocManager group configuration view</p>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">The Problem</h3>
        <p class="text-ink-light leading-relaxed mb-10">LocManager is Zynga's internal localisation tool that enables producers to manage the process of sending translation requests from game teams to external translation vendors, then push translated content back. I joined the project just before general access release, inheriting a tool with several UX issues: flows that didn't behave as expected (e.g. schedules updating before save was pressed), misplaced buttons, an overly complex status dropdown, excessive visual nesting, and a notification settings feature with high cognitive load.</p>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Process</h3>
        <div class="space-y-3 mb-10">
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">1. Audit</p><p class="text-sm text-ink-light mt-1">Conducted a core review of the existing interface, identifying awkward flows, misplaced actions, confusing status options, and areas of unnecessary complexity. Also analysed the Lockit tool, which is SocialPoint's legacy tool and being replaced by LocManager, to understand feature parity requirements.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">2. Iterate</p><p class="text-sm text-ink-light mt-1">Downloaded the codebase from the GitHub repository and worked through issues via prototyping, using AI to accelerate exploration. Shared results continuously with engineering to address the identified problems.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">3. Extend</p><p class="text-sm text-ink-light mt-1">Currently working on post-general-access features focused on feature parity with Lockit, consolidating all teams onto a single platform. We are exploring how AI can be integrated, particularly in the context of content management.</p></div>
        </div>
        <figure class="rounded-xl overflow-hidden bg-ink/5 mb-10">
          <img src="images/locmanager-analysis.png" alt="Design review notes annotated on Figma wireframes comparing Lockit and LocManager features" class="w-full case-img" onclick="openLightbox(this,event)">
          <figcaption class="text-xs text-ink-muted p-2">Design review notes on Figma wireframes</figcaption>
        </figure>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Solution</h3>
        <p class="text-ink-light leading-relaxed mb-10">Addressed the core usability issues: corrected save behaviour so changes only apply when explicitly confirmed, repositioned the save button to sit where users expect it, simplified the status dropdown to reduce confusion, reduced visual nesting (boxes inside boxes), and redesigned the notification settings to lower cognitive load.</p>

        <p class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Status dropdown</p>
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-status-before.png" alt="Status dropdown before redesign showing too many options with unclear labels" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">Before: too many confusing options</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-status-after.png" alt="Status dropdown after redesign with simplified options and clearer labels" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">After: simplified and clearer</figcaption></figure>
        </div>

        <p class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Notification settings</p>
        <div class="grid sm:grid-cols-2 gap-4 mb-10">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-notifications-before.png" alt="Notification settings before redesign with high cognitive load and dense layout" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">Before: high cognitive load</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-notifications-after.png" alt="Notification settings after redesign with clearer grouping and reduced complexity" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-xs text-ink-muted p-2">After: redesigned for clarity</figcaption></figure>
        </div>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Outcome</h3>
        <div class="rounded-xl bg-ink/[0.03] px-6 pt-4 pb-4 mb-3">
          <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;LocManager is quite intuitive and user friendly. The fact that notifications can be set per group run instead of per project as a whole is going to make my life much better.&rdquo;</blockquote>
          <p class="text-xs text-ink-muted mt-3 pl-4">Localisation Producer</p>
        </div>
        <div class="space-y-3 mb-10">
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">Wider adoption</p><p class="text-sm text-ink-light mt-1">4 additional game teams adopted the tool following the redesign, driven by consolidation with the legacy Lockit platform.</p></div>
          <div class="pt-0 pb-4 px-4 rounded-xl bg-ink/[0.03]"><p class="font-semibold text-sm">Earlier design involvement</p><p class="text-sm text-ink-light mt-1">Engineering now requests design input earlier in the process, reflecting increased trust in the design function.</p></div>
        </div>

        <h3 class="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Reflection</h3>
        <p class="text-ink-light leading-relaxed">Coming into a project late without handover means I inherited decisions I didn't make and was lacking context for. I tackled this through intensive catch ups with the team to build up my understanding of the tool and user needs from scratch. The challenge was not starting from scratch however, but identifying what matters most and making targeted improvements without disrupting what's already working. Prototyping directly in code (with AI assistance) also proved far more effective for this project than static mockups, because it let me share working examples with engineering rather than abstract specifications.</p>`
};
