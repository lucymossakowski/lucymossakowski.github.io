// Case study content — injected into modals on open
window.caseStudyContent = {
  'modal-3': `
        <div class="rounded-xl overflow-hidden bg-ink/5">
          <img src="images/payments-hero.png" alt="Redesigned Payments Admin catalogue table showing simplified layout with customisable columns" class="w-full">
        </div>
        <p class="text-sm text-ink-muted mt-2 mb-10">The redesigned Payments Admin catalogue view</p>

        <h3 class="text-lg font-semibold mb-3">Overview</h3>
        <p class="text-ink-light leading-relaxed mb-4">Payments Admin is an internal payments and catalogue management platform used across operations, customer support, and release teams to manage product catalogues, process transactions, and publish to external storefronts. Phase 1 addressed the catalogue and localisation pages. Since then, work continues on migrating the remaining features from the legacy tool to the new admin tool.</p>
        <p class="text-ink-light leading-relaxed mb-10">I led design on this project as the primary designer, working alongside a UI artist, a front-end engineer, and a PM. The focus of this project was to simplify complex workflows and to reduce reliance on manual processes.</p>

        <h3 class="text-lg font-semibold mb-3">Problem</h3>
        <p class="text-ink-light leading-relaxed mb-10">The tool had grown haphazardly over time: it was difficult to use, suffered from poor performance, and created a heavy reliance on external teams for tasks users should have been able to complete independently. An additional challenge was the lack of design presence and having to introduce proper procedures to a hesitant team.</p>

        <h3 class="text-lg font-semibold mb-3">Process</h3>
        <div class="space-y-5 mb-10">
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">1. Research</p><p class="text-ink-light leading-relaxed mt-1">I conducted 20+ user interviews across operations, release, customer support, and engineering teams. I translated the qualitative user feedback into user needs to establish user journeys and understand performance pain points.</p>
          <div class="rounded-xl bg-ink/[0.03] p-6 pt-4 mt-4">
            <div class="space-y-4">
              <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;The publish modal is difficult to understand due to existing design choices - bullet points look like checkboxes.&rdquo;</blockquote>
              <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;The overall process is confusing. There is no set process, so new members have no official learning material to rely on.&rdquo;</blockquote>
              <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;Exporting to external platforms fails frequently when more than five catalogue items are selected. The only workaround is to keep attempting the export - usually within five tries it works.&rdquo;</blockquote>
              <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;Free transactions cluttering the list makes finding actual purchases difficult. There is no filtering on the main tab - no filtering by store, vendor, status, amount, or date range.&rdquo;</blockquote>
            </div>
            <p class="text-sm text-ink-muted mt-4">From 20+ interviews across operations, release, customer support, and engineering teams</p>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 mt-4">
            <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-IA.png" alt="Information architecture mapping the content structure of the Payments Admin catalogue" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">Information architecture: mapping the content structure of the catalogue</figcaption></figure>
            <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-flow.png" alt="User flow tracing the existing catalogue journey to identify friction points" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">User flow: tracing the existing journey to identify friction points</figcaption></figure>
          </div></div>
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">2. Design Iteration</p><p class="text-ink-light leading-relaxed mt-1">Rather than a full redesign at once, we decided together to tackle the tool tab by tab, prioritising catalogue and localisation first based on the highest user pain and it being a primary feature. Since user journeys and information architecture had been established previously, I started by sketching wireframes and eventually moved into higher fidelity Figma mocks. These early mocks were focused on addressing key issues: they had simplified table layouts, stacked search/sort/filter, auto-filled input fields, clearer publish flows, and improved export functionality. Together with PM and engineering, I iterated on the designs to find a solution that addressed both technical constraints and business needs. One direction I explored early on, that was ultimately cut, was bulk actions, i.e. the ability to select and act on multiple catalogue items at once. It was a real user need, but the implementation complexity outweighed the benefit at that stage, so I pulled it from scope rather than ship something half-baked. Luckily, the exploration ultimately wasn't wasted: when bulk actions became a necessity in a later feature, the earlier design groundwork made implementation significantly faster.</p></div>
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">3. Handover and Continuation</p><p class="text-ink-light leading-relaxed mt-1">Since the work is very iterative, I hand over smaller &ldquo;bites&rdquo; to UI and engineering continuously that we then review and polish. Especially since we have been tackling more features, we have gone back to ensure consistency with earlier asks like the catalogue. Each phase is kicked off with the same research-first approach, be that checking back in with users on published updates or asking about features we have not tackled yet.</p></div>
        </div>

        <h3 class="text-lg font-semibold mb-3">Solution</h3>
        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-before.png" alt="Old Payments Admin catalogue UI showing cluttered table with too many visible columns and confusing publish status" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">Before: cluttered catalogue table</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/payments-after.png" alt="Redesigned Payments Admin catalogue UI with simplified table layout, stacked search and filter, and clearer status indicators" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">After: simplified layout with customisable columns</figcaption></figure>
        </div>
        <p class="text-ink-light leading-relaxed mb-4">The redesigned Payments Admin catalogue simplifies complex workflows that previously required external support. Key improvements include a cleaner table with customisable columns, auto-filled product fields to reduce manual input, a more intuitive publish flow that reduces user anxiety, and streamlined export functionality. A direct link to the Slack support channel in the portal header helps prevent reliance on the release operations team for routine tasks.</p>
        <figure class="rounded-xl overflow-hidden bg-ink/5 mb-10">
          <img src="images/payments-detail.png" alt="Product detail view showing auto-filled fields and streamlined input layout" class="w-full case-img" onclick="openLightbox(this,event)">
          <figcaption class="text-sm text-ink-muted p-2">Product detail view with auto-filled fields</figcaption>
        </figure>

        <h3 class="text-lg font-semibold mb-3">Outcome</h3>
        <div class="space-y-5 mb-10">
          <div><p class="font-semibold uppercase tracking-widest text-ink-muted">Reduced Dependency</p><p class="text-ink-light leading-relaxed mt-1">Routine task requests to the release operations team decreased as operational teams gained the ability to complete workflows independently.</p>
          <div class="rounded-xl bg-ink/[0.03] px-6 pt-4 pb-4 mt-4">
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;I really enjoy using the new tool due to its cleaner UI, easier to read, and publishing is more straightforward. The new purchase rule descriptions are pretty clear and allow users to know what the fields are actually doing.&rdquo;</blockquote>
            <p class="text-sm text-ink-muted mt-3 pl-4">Product Manager</p>
          </div></div>
          <div><p class="font-semibold uppercase tracking-widest text-ink-muted">Design-led Process</p><p class="text-ink-light leading-relaxed mt-1">Product now holds new features for design review before development, where previously features were added without designer involvement.</p></div>
        </div>

        <h3 class="text-lg font-semibold mb-3">Reflection</h3>
        <p class="text-ink-light leading-relaxed mb-4">This project reinforced how important it is to let research lead the design direction rather than assumptions. The user base turned out to be far more diverse than expected, from VIP account managers checking a single transaction, to release operations exporting hundreds of products at a time, and each group interacts with the tool in fundamentally different ways. If I were starting again, I'd push earlier for user customisation, role-based access and tailored views rather than a one-size-fits-all interface.</p>
        <p class="text-ink-light leading-relaxed">One thing I am actively pursuing is measuring KPIs. For a tool focused on operational efficiency, I'd want to track task completion time across key workflows, error rates on exports and publish flows, and the volume of support requests to the release operations team. These would give a clearer picture of whether the redesign delivered the efficiency gains users described qualitatively.</p>`,

  'modal-2': `
        <div class="rounded-xl overflow-hidden bg-ink/5">
          <img src="images/locmanager-hero.png" alt="LocManager interface showing the group configuration view with sidebar navigation and scheduler" class="w-full">
        </div>
        <p class="text-sm text-ink-muted mt-2 mb-10">The LocManager group configuration view</p>

        <h3 class="text-lg font-semibold mb-3">Overview</h3>
        <p class="text-ink-light leading-relaxed mb-4">I inherited a localisation management platform used across operations teams to coordinate translation workflows and to push approved content back into production systems.</p>
        <p class="text-ink-light leading-relaxed mb-10">I led design on this project as the primary designer, working alongside two front-end developers and a PM. The focus of this project was to improve workflows and to consolidate multiple tools into one.</p>

        <h3 class="text-lg font-semibold mb-3">The Problem</h3>
        <p class="text-ink-light leading-relaxed mb-10">I joined the project just before general access release without a handover, inheriting a tool with several UX issues: flows that didn't behave as expected (e.g. schedules updating before save was pressed), misplaced buttons, an overly complex status dropdown, excessive visual nesting, and a notification settings feature with high cognitive load.</p>

        <h3 class="text-lg font-semibold mb-3">Process</h3>
        <div class="space-y-5 mb-10">
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">1. Audit</p><p class="text-ink-light leading-relaxed mt-1">I conducted a core review of the existing interface, identifying awkward flows, misplaced actions, confusing status options, and areas of unnecessary complexity. I also analysed the legacy platform being replaced by LocManager to understand feature parity requirements.</p>
          <figure class="rounded-xl overflow-hidden bg-ink/5 mt-4">
            <img src="images/locmanager-analysis.png" alt="Design review notes annotated on Figma wireframes comparing Lockit and LocManager features" class="w-full case-img" onclick="openLightbox(this,event)">
            <figcaption class="text-sm text-ink-muted p-2">Design review notes on Figma wireframes</figcaption>
          </figure></div>
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">2. Iterate</p><p class="text-ink-light leading-relaxed mt-1">Rather than producing static mockups, I chose to prototype directly in the codebase, which enabled me to share working examples with engineering instead of abstract specifications. While this ultimately reduced our back-and-forth significantly, it didn't go smoothly in the beginning, as getting the AI tooling set up took longer than expected. To combat this, I tackled simple tasks in Figma while I found my footing. However, my first attempts in code used the wrong structures entirely and did not follow best practices. This was an issue for engineering, as I hadn't made it clear enough that what I was sharing were working prototypes, not final code proposals. This created unnecessary friction and confusion between design and engineering. I addressed this issue by setting up alignment sessions between the design team and engineering teams across projects to agree on how we'd work together going forward. It turned an awkward miscommunication into something very useful.</p></div>
          <div class="pb-4"><p class="font-semibold uppercase tracking-widest text-ink-muted">3. Extend</p><p class="text-ink-light leading-relaxed mt-1">While I am currently working on post-general-access features, like exploring CMS solutions and AI integrations in the context of content management, I continue to review the latest builds and raise any UX/UI issues. This is done either by setting up review tables in Google Docs with detailed feedback, or via Jira tickets. To improve the efficiency of this, I have also aligned with the QA team to ensure they are aware of design intent when they do their review so that anything that may have been missed by engineering can be raised by QA and reduce back-and-forth between teams.</p></div>
        </div>

        <h3 class="text-lg font-semibold mb-3">Solution</h3>
        <p class="text-ink-light leading-relaxed mb-10">I successfully addressed the core usability issues: I corrected the save behaviour so changes only apply when explicitly confirmed, repositioned the save button to sit where users expect it, simplified the status dropdown to reduce confusion, reduced visual nesting (boxes inside boxes), and redesigned the notification settings to lower cognitive load.</p>

        <h4 class="font-semibold uppercase tracking-widest text-ink-muted mb-3">Status dropdown</h4>
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-status-before.png" alt="Status dropdown before redesign showing too many options with unclear labels" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">Before: too many confusing options</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-status-after.png" alt="Status dropdown after redesign with simplified options and clearer labels" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">After: simplified and clearer</figcaption></figure>
        </div>

        <h4 class="font-semibold uppercase tracking-widest text-ink-muted mb-3">Notification settings</h4>
        <div class="grid sm:grid-cols-2 gap-4 mb-10">
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-notifications-before.png" alt="Notification settings before redesign with high cognitive load and dense layout" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">Before: high cognitive load</figcaption></figure>
          <figure class="rounded-xl overflow-hidden bg-ink/5"><img src="images/locmanager-notifications-after.png" alt="Notification settings after redesign with clearer grouping and reduced complexity" class="w-full case-img" onclick="openLightbox(this,event)"><figcaption class="text-sm text-ink-muted p-2">After: redesigned for clarity</figcaption></figure>
        </div>

        <h3 class="text-lg font-semibold mb-3">Outcome</h3>
        <div class="space-y-5 mb-10">
          <div><p class="font-semibold uppercase tracking-widest text-ink-muted">Wider Adoption</p><p class="text-ink-light leading-relaxed mt-1">4 additional product teams adopted the tool following the redesign, driven by consolidation with the legacy platform.</p>
          <div class="rounded-xl bg-ink/[0.03] px-6 pt-4 pb-4 mt-4">
            <blockquote class="text-ink-light text-sm leading-relaxed border-l-2 border-brand pl-4">&ldquo;LocManager is quite intuitive and user friendly. The fact that notifications can be set per group run instead of per project as a whole is going to make my life much better.&rdquo;</blockquote>
            <p class="text-sm text-ink-muted mt-3 pl-4">Localisation Producer</p>
          </div></div>
          <div><p class="font-semibold uppercase tracking-widest text-ink-muted">Earlier Design Involvement</p><p class="text-ink-light leading-relaxed mt-1">Engineering now requests design input earlier in the process, reflecting increased trust in the design function.</p></div>
        </div>

        <h3 class="text-lg font-semibold mb-3">Reflection</h3>
        <p class="text-ink-light leading-relaxed mb-4">Coming into a project late without handover means I inherited decisions I didn't make and was lacking context for. I tackled this through intensive catch ups with the team to build up my understanding of the tool and user needs from scratch. The main challenge was not starting from scratch, but identifying what matters most and making targeted improvements without disrupting what's already working. Prototyping directly in code (with AI assistance) also proved far more effective for this project than static mockups, because it let me share working examples with engineering rather than abstract specifications.</p>
        <p class="text-ink-light leading-relaxed">Going forward, I'd want to establish baseline metrics for this project on top of our regular user check ins. For a workflow coordination tool like this, task completion time across a full localisation run and the volume of manual handoff requests would be the most meaningful indicators of whether the design changes translated into real efficiency gains.</p>`
};
