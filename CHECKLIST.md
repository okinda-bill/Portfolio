# Before going live

The redesign lives on the `redesign-wip` branch. It goes to `main` (the live site) only once the items marked **Blocking** are done.

## Blocking

- [ ] **BTM Photography originals.** The gallery still shows placeholders. The only copies found online are 600 × 315 px previews (too small). Need 15 to 30 full-size photos (weddings, events, portraits, documentary, including the UNFPA competition entry), each with place and month/year.
- [ ] **Partner names.** No clearance from Generation Kenya yet, so no employer is named anywhere on the site. Keep it that way until cleared.

## Where the content came from

| Content | Source |
|---|---|
| Roles, dates, achievements, education, certifications | Bill Okinda Master Resume (Google Drive, 30 Sep 2026) |
| 109 graduates placed by the employer team, 12 cohorts, 70+ employers | BDO_Tools.xlsx SUMMARY and Placements tabs (14 Oct 2026). Team figures, worded as "our employer team" |
| 20+ employers onboarded, 300+ leads, 200+ coached, $50k+, 97% CSAT | CV (Bill's own figures) |
| UNFPA 3 Zeros Photo Competition, 3rd place, Zero GBV and Harmful Practices | Photo of the award (Pictures/Screenshots) |
| Headshots and event photos | Bill's Downloads folder (resized copies in `Downloads/Portfolio site photos`) |

## Worth a second look

- The CV says 300+ leads with "40% conversion to active hiring partners" (about 120), but also 20+ employers onboarded. The site uses 20+ and 300+ and leaves out the 40% until it's reconciled.
- The CV lists the photojournalism certificate under "Africa School of Aviation". Check that's the right institution.
- The downloadable CV (`cv/Bill-Okinda-CV.pdf`) includes a personal phone number. It will be public once live.
- Photo captions assume Bill is the person in the suit at the graduation and at the networking event. Confirm.
- Event photos were taken by event photographers. Credit them if required.
- No testimonials yet. Section left out rather than invented.

## Set-up

- [ ] Web3Forms access key in `assets/js/site.js` (until then the forms open the visitor's email app)
- [ ] GitHub Pages on: repo Settings → Pages → Deploy from branch → `main` / root
