# Group 7 · Private credit portfolio explorer

Our 13-slide, 10-minute Ivey Design-Driven Innovation presentation follows an investor from an industry’s share of Blue Owl Credit Income Corp. to the individual loans and their scheduled maturities.

[Rehearsal page](https://ivey-group7-portfolio.vercel.app/) · [Interactive mockup](https://ivey-group7-portfolio.vercel.app/explorer.html) · [PowerPoint with speaker notes](https://ivey-group7-portfolio.vercel.app/presentation.pptx) · [Printable script](https://ivey-group7-portfolio.vercel.app/script.pdf)

Louis opens and Parum drives the three live demo steps. The rehearsal page also links directly to each result.

| Slide | Demo view |
| --- | --- |
| 7 | [Combine the three healthcare industries](https://ivey-group7-portfolio.vercel.app/explorer.html#healthcare) |
| 8 | [Compare the two Covetrus loans](https://ivey-group7-portfolio.vercel.app/explorer.html#covetrus) |
| 10 | [Inspect the healthcare-provider maturity schedule](https://ivey-group7-portfolio.vercel.app/explorer.html#provider-maturities) |

## Make an edit

| To change | Edit |
| --- | --- |
| Slide content or presenter notes | Open `presentation.pptx` in PowerPoint. Export each visually changed slide as a 16:9 PNG and replace its matching `slides/slide-N.png` for the web viewer. |
| Speaker order, timing, handoffs or demo cues | Edit the matching slide in `program.js`. The running order and web script use this file. Update the PowerPoint notes and the printable `script.pdf` when the spoken wording changes. |
| The interactive prototype | Edit `explorer.html`. It contains the interface, interactions and filing data used in the demo. |
| The review page | Edit `index.html` for the page structure, `styles.css` for styling and `review.js` for the slide viewer and speaker filter. |

## Preview and share a change

1. Fork this repository, or create a branch if you have write access. Download or clone your copy.
2. Open `index.html` in your browser to try your changes. You can also run `python3 -m http.server 8000` in the repository folder and visit `http://localhost:8000`.
3. Check the affected slide and its script. For a demo change, follow the corresponding speaker cues in the explorer.
4. Commit the changed files and open a pull request against the original repository so the group can review them.

Vercel watches `main` in this repository. When the group merges a change, Vercel deploys it to the same rehearsal link. Check the deployment on the merged commit before sharing the update.

## Slide-by-slide review

November 20 group rehearsal. Group 7’s classroom presentation uses navy and sky blue, real views from the working prototype, and figures from the fund’s September 2026 filing. The Blue Owl wordmark identifies the company the project examines. The proposed adviser test is on slide 12. [Blue Owl](https://www.blueowl.com/)

| Slide | Title | Evidence or speaking cue |
| --- | --- | --- |
| 1 | A Blue Owl investor has to piece together healthcare exposure. | Louis poses the opening question aloud. The slide names the fund. |
| 2 | We traced 493 positions in one Blue Owl filing. | 493 is the count of investment positions as of September 30, 2026. One borrower can have more than one position. |
| 3 | Two credit professionals described how they check and explain risk. | The two role descriptions paraphrase Group 7’s structured-credit interviews. Neither interviewee tested this explorer. |
| 4 | We put the source beside each loan. | The larger Covetrus loan illustrates the link to the filing. Both Covetrus loans appear on page 16. |
| 5 | We chose to help investors before they buy. | The comparison names the existing industry table, the withdrawal walkthrough and the holdings explorer. The choice turns on what investors can check before buying. |
| 6 | Our first version left out loan sizes and due dates. | The added loan detail came from the team’s review. The example uses the $160 million second-lien loan due in October 2030. |
| 7 | Three healthcare industries account for 26.4% of the fund. | The three selected filing categories add to 26.4% of fund investment fair value. Pharmaceuticals is a separate category. |
| 8 | Blue Owl held two Covetrus loans worth $194 million together. | The two positions have fair values of $160 million and $33.623 million. Their $193.623 million total rounds to $194 million. |
| 9 | The larger Covetrus loan comes due a year later and ranks second. | The first lien matures in October 2029. The larger, second-lien loan matures in October 2030. Priority refers to claims on pledged collateral. |
| 10 | About 43% of provider debt comes due from October 2029 to September 2031. | 21 positions across the two-year window account for 42.56% of healthcare providers and services debt by fair value. That rounds to 43%. |
| 11 | Investors can ask which borrowers may need to refinance. | Ken asks a question a fund manager could answer. The schedule gives contractual maturities. It cannot predict which borrowers will refinance. |
| 12 | We still need to see whether advisers can verify exposure on their own. | The insurance task is a proposed comparison with the filing alone. It scores whether advisers can give a correct answer and show the source without help. |
| 13 | Blue Owl should pilot the explorer with advisers using one filing. | Qail asks Blue Owl to run a one-filing pilot. Expansion depends on advisers giving more accurate, traceable answers. |
