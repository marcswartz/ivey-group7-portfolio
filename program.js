window.rehearsalProgram = {
  "segments": [
    {
      "slide": 1,
      "title": "What’s inside a private credit fund?",
      "speaker": "Louis Hu",
      "start": "0:00",
      "end": "1:10",
      "parts": [
        {
          "type": "say",
          "text": "Imagine you’re sitting with an adviser. You already have a lot of money tied up in healthcare. They bring you a private credit fund and say it lends across a range of industries. Before you invest, what would you want to know?"
        },
        {
          "type": "cue",
          "text": "Give the room five seconds to think. Parum has slide 1 on screen."
        },
        {
          "type": "say",
          "text": "I’d want to know how much more healthcare exposure I’d be taking on. And if the answer is a percentage, I’d still want to know what sits behind it. Does the fund lend to hospitals? Equipment companies? Is a lot of the money riding on one borrower? We picked Blue Owl Credit Income Corp., or OCIC, because its public filing lets us follow those questions all the way down to individual loans. Today we’ll make that decision with you, using the holdings reported on September 30, 2026."
        },
        {
          "type": "handoff",
          "text": "Charles, what did we learn from the two people I interviewed?"
        }
      ]
    },
    {
      "slide": 2,
      "title": "What we heard in two interviews",
      "speaker": "Charles Lee",
      "start": "1:10",
      "end": "2:30",
      "parts": [
        {
          "type": "cue",
          "text": "Parum advances to slide 2. Speak from the two interviews in the interim report."
        },
        {
          "type": "say",
          "text": "They look at credit from different sides. One is an institutional credit investor. She described having limited time to review agreements and then having to explain the risks to an investment committee. Think about what that takes. A committee wants to hear the conclusion, but somebody also has to be ready for the follow-up question."
        },
        {
          "type": "say",
          "text": "The second person is a corporate banking analyst. He talked about how the language changes from one borrower to another, and why he goes back to the original agreement to check a summary. Those conversations shaped two design choices. Give someone an answer they can explain out loud. Then let them show where the number came from. We used those interviews to guide the design. We still need to see how people use the actual prototype."
        },
        {
          "type": "handoff",
          "text": "Jason, how did we choose which investor question to take into the prototype?"
        }
      ]
    },
    {
      "slide": 3,
      "title": "Choosing what to prototype",
      "speaker": "Jason Kang",
      "start": "2:30",
      "end": "3:45",
      "parts": [
        {
          "type": "cue",
          "text": "Parum advances to slide 3."
        },
        {
          "type": "say",
          "text": "Our interim looked at how investors understand the protections in pools of corporate loans. For this prototype, we wanted to put someone at a specific moment. Imagine you’re an adviser and a client asks what they’d actually own through this fund. You could pull up the industry table in the quarterly filing. It shows the percentage in each sector. But if your client asks which companies make up one of those percentages, you have to go looking elsewhere in the filing."
        },
        {
          "type": "say",
          "text": "We also explored showing investors what happens when they try to withdraw money. That question comes later. We wanted to help with the decision someone makes before investing. So we chose one publicly reporting Blue Owl fund, a business development company. We used its own holdings to let someone go straight from an industry percentage to a borrower and then to the terms of a loan."
        },
        {
          "type": "handoff",
          "text": "Parum, take us into the fund as someone who already has healthcare exposure."
        }
      ]
    },
    {
      "slide": 4,
      "title": "How much of the fund is in healthcare?",
      "speaker": "Parum Patel",
      "start": "3:45",
      "end": "5:15",
      "parts": [
        {
          "type": "cue",
          "text": "You are the only driver for the entire presentation. Switch from slide 4 to the open explorer. Stay in the browser until Qail starts slide 7."
        },
        {
          "type": "say",
          "text": "I’m going to start with the industry I already own. The date matters here. These are the investments the fund reported at the end of September. I’ll type healthcare so we can see how the fund divides it up."
        },
        {
          "type": "cue",
          "text": "Industry exposure → Find an industry → type healthcare. Point at providers. Click + beside providers, then equipment, then technology. Pause on the combined total."
        },
        {
          "type": "say",
          "text": "Providers and services is the biggest of these lines, at 14.2%. If I stopped there, I’d leave out two things I also care about. Equipment and services adds 6.6%, and healthcare technology adds another 5.6%. Together that’s 26.4% of the whole fund’s investment fair value. You can see exactly what went into my definition of healthcare. Pharmaceuticals, for example, is a separate line that I haven’t selected. This still leaves me with a question. Who actually borrowed the money, and on what terms?"
        },
        {
          "type": "handoff",
          "text": "Peter, take us inside one borrower. I’ll keep driving."
        }
      ]
    },
    {
      "slide": 5,
      "title": "One borrower, two different loans",
      "speaker": "Peter Hu",
      "start": "5:15",
      "end": "6:55",
      "parts": [
        {
          "type": "cue",
          "text": "Parum clicks the Healthcare providers and services row itself → Explore positions in this industry → types Covetrus in Company or instrument. Leave the larger, second-lien loan selected."
        },
        {
          "type": "say",
          "text": "Here’s Covetrus. There are two entries because the fund lent to the same borrower on different terms. Together those positions were worth about 194 million US dollars, or 0.55% of the fund’s investment fair value. The larger position, 160 million dollars, is the one selected. It matures in October 2030. It’s a second-lien loan, which means first-lien claims on the pledged collateral get paid before this loan."
        },
        {
          "type": "cue",
          "text": "On “select the smaller loan,” Parum clicks the $33.623m first-lien row. Point to the maturity, time remaining and source link."
        },
        {
          "type": "say",
          "text": "Now let’s select the smaller loan. This one was worth about 34 million dollars, ranks first on the collateral, and matures in October 2029. That’s a year earlier. So if I’m explaining this exposure to a committee, the important detail is that most of what the fund has in Covetrus sits in the later, lower-priority loan. You can also check the filing entry right here. That’s how I’d support the answer if someone challenged it."
        },
        {
          "type": "handoff",
          "text": "Ken, does that timing matter beyond this one company?"
        }
      ]
    },
    {
      "slide": 6,
      "title": "When does the provider debt come due?",
      "speaker": "Ken Chen",
      "start": "6:55",
      "end": "8:15",
      "parts": [
        {
          "type": "cue",
          "text": "Parum clicks Debt maturities → selects Healthcare providers and services in the Industry dropdown. Pause on Oct 2029–Sep 2031."
        },
        {
          "type": "say",
          "text": "It does. Let’s zoom out from Covetrus to all the debt in healthcare providers and services. Loans worth about 2.1 billion dollars at quarter end are scheduled to mature between October 2029 and September 2031. That’s roughly 43% of the fund’s healthcare-provider debt by fair value. Earlier, the 26.4% referred to the whole fund. This percentage answers a different question about the timing inside one industry."
        },
        {
          "type": "cue",
          "text": "Parum clicks Oct 2029–Sep 2031 to reveal the 21 positions. Hold the screen for five seconds."
        },
        {
          "type": "say",
          "text": "There are 21 positions behind that number. Here’s what I’d ask the fund manager. How are you preparing for this much provider debt to come due in the same period? These are the borrowers’ scheduled maturities. If a borrower refinances or repays early, the actual cash flows change."
        },
        {
          "type": "handoff",
          "text": "Qail, how would we find out whether someone can do that on their own?"
        }
      ]
    },
    {
      "slide": 7,
      "title": "Can an investor explain the exposure?",
      "speaker": "Qail Andani",
      "start": "8:15",
      "end": "9:15",
      "parts": [
        {
          "type": "cue",
          "text": "Parum switches back to slide 7. The live demo ends here."
        },
        {
          "type": "say",
          "text": "We just guided you through healthcare, so repeating the same clicks would be a pretty easy test. I’d give the next person a different industry, like insurance. Ask them how much of the fund it represents, what the fund holds in one borrower, and where they found the evidence. Then let them take it from there."
        },
        {
          "type": "say",
          "text": "We’d give some participants the existing disclosures and others the explorer. We’d record their first answer, whether they got there without help, and how long it took. If somebody gives a confident answer but uses the wrong denominator, that’s a design issue we’d want to fix before expanding it. That’s the proposed test."
        },
        {
          "type": "handoff",
          "text": "That brings us to what we’d recommend Blue Owl do first."
        }
      ]
    },
    {
      "slide": 8,
      "title": "Pilot the explorer with advisers",
      "speaker": "Qail Andani",
      "start": "9:15",
      "end": "10:00",
      "parts": [
        {
          "type": "cue",
          "text": "Parum advances to slide 8. Qail keeps the floor."
        },
        {
          "type": "say",
          "text": "Start with one fund, one quarterly filing and a small group of advisers who already discuss OCIC with investors. Blue Owl’s investor relations team could own the quarterly update and reconcile the numbers to the filing. The advisers could see where clients get stuck and whether the explorer helps them explain their exposure accurately."
        },
        {
          "type": "say",
          "text": "For the investor we started with, the payoff is simple. They can walk into the next conversation knowing which healthcare categories they counted, which borrower they want to ask about, and why the repayment timing matters. That’s what we’d want the pilot to prove. Thanks."
        }
      ]
    }
  ]
};
