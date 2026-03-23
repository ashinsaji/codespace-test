# Plan: Zelphyn Homepage Redesign with Next.js + shadcn/ui

**TL;DR**: Build a modern, mobile-first homepage for Zelphyn using **Next.js + shadcn/ui + Tailwind**. The site showcases 1:1 tutoring services (classes 6-12), includes multiple CTAs (Book Demo, Explore Courses, Sign Up), dark mode support, and 8+ core sections optimized for mobile-first responsive design.

---

## Steps

### **Phase 1: Project Setup**
1. Initialize Next.js project with TypeScript, Tailwind, App Router
2. Install shadcn/ui and configure components
3. Install next-themes for dark/light/system mode toggle
4. Install lucide-react for icons
5. Set up globals.css with dark mode CSS variables
6. Create theme-provider component

### **Phase 2: Layout & Navigation** *(depends on Phase 1)*
7. Build root layout.tsx with ThemeProvider wrapper
8. Create Navbar with responsive hamburger menu + dark mode toggle + "Get Started" CTA
9. Create Footer with links, social media, copyright

### **Phase 3: Homepage Sections** *(depends on Phase 2)*
10. **Hero Section** — headline, subheading, three CTAs, stats bar (250+ students, 19+ tutors, 1,000+ hours, 7+ countries)
11. **Why Choose Us** — 4 benefit cards (Personalized Learning, Expert Tutors, Tech-Enabled, Proven Results)
12. **How It Works** — 4-step flow (Sign Up → Match → Start Learning → Track Progress)
13. **Testimonials** — 3-5 student success stories in mobile-scrollable cards / desktop grid
14. **Courses/Subjects** — Grid of subjects by class level (6-8, 9-10, 11-12)
15. **Tutor Profiles** — 4-6 featured tutors with photos, expertise, ratings
16. **Pricing** — 2-3 tiers with feature comparison table
17. **FAQ** — 5-8 accordion items covering key questions
18. **Final CTA Section** — "Ready to transform learning?" with Demo/Sign Up buttons

### **Phase 4: Mobile Optimization & Responsive Design** *(parallel with Phase 3)*
19. Ensure all components use Tailwind responsive classes (sm:, md:, lg:)
20. Test hamburger menu and mobile interactions
21. Verify button touch targets (≥48px)
22. Test on actual mobile devices (375px+ width minimum)

### **Phase 5: Dark Mode Implementation** *(parallel with Phase 3)*
24. Apply `dark:` variants to all components
25. Test theme toggle switching and system preference detection
26. Verify WCAG AA contrast ratios (4.5:1) in both modes

### **Phase 6: Testing & Refinement** *(depends on Phase 5)*
28. Mobile + desktop browser testing (Chrome, Safari, Firefox, Edge)
29. Verify all CTAs link correctly
30. Lighthouse performance audit
31. Accessibility audit (keyboard nav, screen readers)
32. Core Web Vitals check

---

## Relevant Files

**Core Layout:**
- `app/layout.tsx` — Root wrapper with ThemeProvider, Navbar, Footer
- `app/page.tsx` — Main home page (imports all sections)
- `app/globals.css` — Tailwind + dark mode setup

**Components:**
- `components/navbar.tsx`, `components/footer.tsx`
- `components/hero.tsx`, `components/why-choose-us.tsx`
- `components/how-it-works.tsx`, `components/testimonials.tsx`
- `components/courses.tsx`, `components/tutors.tsx`
- `components/pricing.tsx`, `components/faq.tsx`
- `components/cta-section.tsx`, `components/theme-provider.tsx`

**Config:**
- `lib/utils.ts` — Tailwind utilities (cn function)
- `package.json` — Dependencies (next, shadcn/ui, next-themes, lucide-react)

---

## Verification

**Functional:**
- [ ] Hero section + all CTAs display & link correctly
- [ ] Navbar hamburger works on mobile; full menu on desktop
- [ ] Dark mode toggle switches themes properly
- [ ] All sections responsive (no horizontal scroll)

**Mobile Testing:**
- [ ] 48px+ button touch targets
- [ ] Readable fonts (≥16px) without zooming
- [ ] No content cut off on 375px width

**Performance:**
- [ ] Lighthouse ≥85 on mobile/desktop
- [ ] Core Web Vitals in "Good" range

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Contrast ≥4.5:1 (WCAG AA) light & dark
- [ ] Proper heading hierarchy & ARIA labels

---

## Key Decisions

✅ **Mobile-first responsive design** — start at 1 column, scale to 2→3+ columns  
✅ **Dark mode first-class feature** — full light/dark/system awareness  
✅ **Multiple CTAs** — Book Demo (primary), Explore Courses, Sign Up (secondary pathways)  
✅ **shadcn/ui components** — consistency + minimal custom CSS  
✅ **Hero stats display** — builds credibility (250+ students, 19+ tutors, etc.)  
✅ **No backend integrations yet** — homepage is informational; backend calls added later

---

## Further Considerations

1. **Future Pages Needed** — `/demo`, `/courses`, `/about` (Phase 7 planning)
2. **Analytics Integration** — Track CTA clicks, scroll depth, conversion funnels (Phase 7)
3. **Real Testimonials** — Currently using placeholders; populate with actual student stories post-launch

---

## Stack Details

**Dependencies:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- next-themes (dark mode)
- lucide-react (icons)

**Design System:**
- Color Scheme: Blue primary (#2563eb), Gray secondary, with dark mode variants
- Typography: System fonts (Geist on Vercel), 16px base mobile, 18px desktop
- Spacing: Tailwind scale (4px units)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## Data Requirements

Before implementation, confirm:
- [ ] Tutor profiles (names, expertise, credentials, ratings) — placeholder or real?
- [ ] Testimonials (student names, improvements, class levels) — placeholder or real?
- [ ] Pricing tiers and features — finalized?
- [ ] Course subject list — complete?
- [ ] Company stats (250+ students accurate?) — verified?

---

## Timeline Estimate

- Phase 1 (Setup): 1-2 hours
- Phase 2 (Layout): 2-3 hours
- Phase 3 (Sections): 8-12 hours
- Phase 4 (Mobile): 2-3 hours
- Phase 5 (Dark Mode): 1-2 hours
- Phase 6 (Testing): 3-5 hours

**Total: 17-27 hours** (depends on data availability and design iteration cycles)
