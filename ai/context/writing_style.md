# Writing Style Guide

## Voice
- First person, professional but approachable
- Direct and confident — no hedging ("I think", "maybe", "sort of")
- Shows genuine passion for problem-solving
- Mentions challenges honestly, frames them as growth moments

## Language rules
- Portfolio supports ES and EN — maintain both locales in sync
- ES is default locale; EN is secondary
- Technical terms stay in English in both locales (Laravel, API, DTO, etc.)
- Company names, proper nouns: always exact casing (Netcommerce, CUCEI, UDG, SAP, MercadoPago)

## Description structure (for projects)
1. What the system does (business context, not just tech)
2. Technical complexity or interesting challenge
3. Personal contribution (specific, not vague)
4. Impact or outcome

## Tone per section
- `description`: concise, business-value-first (recruiter reads this first)
- `long_description`: detailed, technical, tells the full story
- `contribution`: first-person, specific actions, patterns used, what was hard
- experience descriptions: warm, human, acknowledges team and learning

## Avoid
- Passive voice for contributions ("it was implemented" → "I implemented")
- Generic claims without evidence ("strong team player", "passionate developer")
- Listing technologies without context of how they were used
- Overly long sentences — use line breaks in i18n values with `\n`

## Formatting in i18n JSON
- Paragraph breaks: `\n\n`
- Single line break within paragraph: `\n`
- No HTML tags in i18n values
- Keys snake_case, values sentence-case

## Consistency checklist
- [ ] Both `es.json` and `en.json` updated for any new content
- [ ] Project `id` in `data/projects.ts` matches keys in i18n files
- [ ] Thumbnail image exists at `/public/images/projects/{id}_thumb.webp`
- [ ] Full image exists at `/public/images/projects/{id}.webp`
- [ ] New image variants added to `nitro.prerender.routes` if needed
