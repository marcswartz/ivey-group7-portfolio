# Group 7 · Private credit portfolio explorer

Our 10-minute Ivey Design-Driven Innovation presentation follows an investor from an industry’s share of Blue Owl Credit Income Corp. to the individual loans and their scheduled maturities.

[Rehearsal page](https://ivey-group7-portfolio.vercel.app/) · [Interactive mockup](https://ivey-group7-portfolio.vercel.app/explorer.html) · [PowerPoint with speaker notes](https://ivey-group7-portfolio.vercel.app/presentation.pptx) · [Printable script](https://ivey-group7-portfolio.vercel.app/script.pdf)

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

The production site was first published through Vercel Drop. For a manual update, the Vercel project owner can deploy the revised site files to the existing `ivey-group7-portfolio` project. If the repository is connected to Vercel, merges to its configured production branch can publish updates automatically.
