export type StorySection = {
  heading: string
  paragraphs: string[]
  quote?: string
  quoteAttribution?: string
  figure?: string
  figureCaption?: string
}

export type Story = {
  id: number
  slug: string
  title: string
  dek: string
  tag: string
  cover: string
  images?: string[]
  author: string
  authorHandle: string
  readTime: string
  sections: StorySection[]
}

export const stories: Story[] = [
  {
    id: 1,
    slug: "who-decides-founder-salaries",
    title: "Who Decides the Salary of Founders and Co-Founders of Nonprofits in India?",
    dek: "A quick look at transparency and governance gaps in deciding the salary of nonprofit executives.",
    tag: "Governance & Accountability",
    cover: "/stories/story-1-cover.png",
    images: ["/stories/story-1-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "6 min read",
    sections: [
      {
        heading: "On Paper, the Board Decides",
        paragraphs: [
          `Under Indian trust and society law, the Board — or a compensation committee — is meant to set and approve the salary of founders and executive directors, based on role, responsibility and market benchmarks, and record the decision in the minutes of a board meeting.`,
          `The basic principle is simple: the person whose salary is being fixed should not be in the room fixing it.`,
        ],
      },
      {
        heading: "A Familiar Scene",
        paragraphs: [
          `Picture the kind of conversation that quietly shapes many Indian nonprofit boards. A founder invites a respected figure — say, a university vice-chancellor — to join the board, promising it will take no more than one meeting a quarter. The invitation is accepted, with one condition attached: that the university's students get internships at the founder's organisation.`,
          `It's a small exchange, but it reveals something important — neither party is fully independent of the other. Mutual interests like these can quietly influence decisions and compromise the objective, unbiased governance a board is supposed to provide.`,
        ],
      },
      {
        heading: "In Reality, Founders Often Decide Their Own Pay",
        paragraphs: [
          `Many Indian NGOs have boards packed with friends, seniors or funders who sign off on what the founder, the executive director, or the organisation's chartered accountant proposes.`,
          `That turns "board approval" into rubber-stamping, not an independent decision.`,
        ],
      },
      {
        heading: "Why It Keeps Happening",
        paragraphs: [
          `Many board members are retired seniors from corporate or government careers. Post-retirement, visibility fades and validation dries up — joining a well-known nonprofit's board restores some of that lost social capital, along with titles, events and networks.`,
          `"Most board members are on boards of multiple organisations, and they don't have much time to get too 'nosy' with tough questions. They mostly approve what we propose. If they get too nosy, nonprofit leadership circles might not recommend them to other boards. Boards keep rotating as per government norms anyway." — Testimony from a co-founder of a Bhopal-based nonprofit, who asked to remain anonymous.`,
        ],
      },
      {
        heading: "The Governance Argument",
        paragraphs: [
          `Governance guides argue that truly independent board members — with no financial dependence on the NGO — are key to fair executive pay. But if everyone on the board owes their social capital to the founder, can they realistically say no to a raise?`,
          `These insights draw on a legal reference document on NGO governance, accounting and regulation, jointly published by FMSF and VANI.`,
        ],
      },
      {
        heading: "The Norm vs the Reality",
        paragraphs: [
          `Good governance practice calls for disclosing the pay of a founder or co-founder who holds an executive position, in the organisation's annual report, board minutes and filings — a basic expectation for a public-purpose institution.`,
          `We reviewed the annual reports of 22 nonprofits with annual budgets above ₹10 crore. Not one disclosed the remuneration of its founder or co-founder, even where that person held a full-time, formal role in the organisation.`,
          `To check whether this opacity is normal, we asked friends working across six different organisations what their senior executives are paid. None of them knew. Our sample is small, limited by our own research capacity — if you know of an organisation that is transparent about leadership compensation, we'd like to hear about it.`,
        ],
      },
      {
        heading: "So, Who Should Decide Founder Salaries?",
        paragraphs: [
          `An independent board or committee — excluding the founder, friends and relatives — using a written policy, market benchmarks and workload data, within legal limits on administrative expense and private benefit, and fully disclosed in reports. Anything less is a transparency problem in the organisation's governance.`,
          `Based on these questions: is your organisation transparent?`,
        ],
      },
      {
        heading: "Two Questions for Founders and Co-Founders",
        paragraphs: [
          `What practical barrier exists to reporting founder or CEO pay, when other financial disclosures are already mandatory?`,
          `If compensation is decided by the board, how are they expected to assess fairness when no organisation reports this information, and there are no transparent benchmarks across the sector?`,
        ],
      },
      {
        heading: "Questions Every Nonprofit Worker Should Ask",
        paragraphs: [
          `Who sets our founder or ED's salary, and where is that decision recorded?`,
          `What is the pay ratio between the highest-paid and lowest-paid employee, especially against frontline staff?`,
          `Is this information available in our annual report or on our website — or is transparency expected only from beneficiaries, never from executive leadership?`,
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "rss-is-not-an-ngo",
    title: "Why the Social Sector Must Reject the Labelling of RSS as an NGO",
    dek: "How a public claim that the RSS is the world's largest NGO undermines the credibility of India's 4.9 lakh registered nonprofits doing real development work.",
    tag: "Power & Politics",
    cover: "/stories/story-2-cover.png",
    images: ["/stories/story-2-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "7 min read",
    sections: [
      {
        heading: "The Claim",
        paragraphs: [
          `In August 2025, a remark describing the Rashtriya Swayamsevak Sangh (RSS) as the "world's largest NGO" put a spotlight on a basic but important question: what actually makes an organisation an NGO in India, and who gets to call themselves one?`,
        ],
      },
      {
        heading: "What India's Registered NGOs Actually Do",
        paragraphs: [
          `India has close to 4.9 lakh registered NGOs, according to the government's own NGO portal, Darpan. They're registered under the Societies Registration Act, the Trusts Act, or the Companies Act — each carrying its own compliance and reporting requirements.`,
          `Between them, this network serves an estimated 400+ million Indians directly, working across education, healthcare, livelihoods, agriculture and rights — much of it in the remotest parts of the country, where public policy often struggles to reach. That reach has been built over years of sustained work, standing on the accountability and transparency mechanisms that let these organisations answer for how they operate.`,
        ],
      },
      {
        heading: "Why Calling RSS an NGO Is Inaccurate",
        paragraphs: [
          `The RSS is around a century old, yet holds zero formal registration. It is not registered under the Societies Registration Act, the Trusts Act, or the NITI Aayog NGO registry.`,
          `Unlike registered NGOs, it does not publish annual reports, disclose its funding sources, file financial statements, or answer to any regulatory body.`,
          `When the head of government describes an unregistered, unaudited organisation as an NGO, it quietly erodes the years of legitimacy, accountability and public trust that registered NGOs have built through audits and transparency.`,
        ],
      },
      {
        heading: "A Much Larger Network Than It Appears",
        paragraphs: [
          `Investigative reporting by The Caravan magazine has mapped more than 46 affiliated organisations making up what is known as the Sangh Parivar — frontal organisations registered separately, in ways that let each appear independently legitimate. Among them: Vidya Bharati (a registered education network), Seva Bharati (a registered social welfare body), the Bharatiya Kisan Sangh (agrarian mobilisation), the ABVP (a student wing), and the BJP itself, which shares cadre with the RSS — alongside 40-plus other sectoral organisations spanning trade unions, women's wings and youth wings. In total, Caravan's reporting counts more than 2,500 organisations directly tied to the RSS.`,
          `Source: "Unveiling the RSS: Exposing the Largest Far-Right Network in History," The Caravan, December 2025.`,
        ],
      },
      {
        heading: "How the Network Stays Obscured",
        paragraphs: [
          `Researcher Felix Pal's organisational analysis draws a distinction between what he calls the "Cadre RSS" — the visible shakha system used for recruitment — and the "Managerial RSS": more than 2,500 affiliated organisations that are operational but largely hidden from public view.`,
          `This managerial layer runs on shared pracharaks (deployed organisers) moving across frontal organisations, a unified command structure running from the Sarsanghchalak down through joint general secretaries and pramukhs, and what Pal describes as "plausible deniability" achieved by registering each subsidiary individually.`,
          `Source: Felix Pal, "Similarity Heuristics in the Indian Far Right: How the RSS Obscures Its Operational Scale."`,
        ],
      },
      {
        heading: "The Accountability Vacuum",
        paragraphs: [
          `The RSS's unregistered status creates real gaps: no financial transparency, since its funding sources stay outside public scrutiny; no regulatory oversight, since the state has no authority to monitor, audit or enforce compliance on it; and no beneficiary accountability, since there's no mechanism for affected communities to demand answers.`,
          `Its leadership structure compounds this — a central Sarsanghchalak with no democratic accountability, coordinating over 2,500 organisations without any formal governance framework binding them together.`,
        ],
      },
      {
        heading: "A Constitutional Tension",
        paragraphs: [
          `The RSS openly pursues the idea of a Hindu Rashtra — a vision that sits outside, and often against, India's constitutional commitments to secularism, equality and pluralism.`,
          `Registered NGOs, by contrast, operate within that legal and ethical framework, bound by audits, transparency norms and rights-based principles. Equating the RSS with an NGO misrepresents both what an NGO legally is, and what it stands for.`,
        ],
      },
      {
        heading: "Why the Distinction Matters",
        paragraphs: [
          `Equating NGOs with an organisation whose stated mission runs counter to constitutional values misrepresents civil society, and undermines the spirit in which real NGOs serve their communities.`,
          `As people who work in and around the sector, it's worth being precise about this distinction — not as a partisan point, but because the trust communities place in NGOs was built, slowly, through exactly the kind of accountability the RSS has never had to answer to.`,
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "oxfam-halima-begum",
    title: "Is the Oxfam GB Turmoil Really About Dr Halima Begum?",
    dek: "Or is it exposing a deeper crisis in nonprofit work culture?",
    tag: "Work Culture",
    cover: "/stories/story-3-cover.png",
    images: ["/stories/story-3-support-a.png", "/stories/story-3-support-b.png", "/stories/story-3-support-c.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "6 min read",
    sections: [
      {
        heading: "A History Before She Arrived",
        paragraphs: [
          `Oxfam GB had a documented history of workplace problems before Dr Halima Begum became involved. An earlier review had already found racism, sexism and what it called "colonial behaviour" embedded in the organisation's culture.`,
          `Begum arrived in 2024 as CEO, into a budget crisis. As a woman of colour leading through that crisis, existing tensions were amplified. One staff member told the BBC that the organisation "preached racial justice publicly but couldn't practice it internally."`,
        ],
      },
      {
        heading: "A Budget Crisis, Inherited",
        paragraphs: [
          `The board asked her to fix the budget shortfall — which meant cutting 250 jobs out of 2,100 staff. Many staff felt traumatised and poorly consulted, and directed their frustration at Begum, while the board's own endorsement of the plan drew far less scrutiny.`,
          `Over 100 staff signed letters criticising senior leadership and the restructuring. The board selectively used those letters to target Begum specifically — despite the crisis, and the plan to address it, predating her arrival.`,
        ],
      },
      {
        heading: "Two Very Different Accounts",
        paragraphs: [
          `Some staff described Begum as bullying, unpredictable and prone to interfering in safeguarding investigations — an independent review of testimony from 32 colleagues backed up parts of this account.`,
          `Others saw it differently: an organisation had brought in a woman of colour, asked her to carry out the hardest restructuring in its history, and was now scapegoating her while the board itself avoided scrutiny.`,
          `Begum's own whistleblowing complaint about racism and sexism at Oxfam complicated the story further, making her both the accused and, in her account, the person raising the alarm.`,
        ],
      },
      {
        heading: "Bully or Bullied?",
        paragraphs: [
          `Begum's lawyers say she faced "hostile, victimising, discriminatory conduct," and she has filed a claim for constructive dismissal after raising concerns about racism and sexism internally.`,
          `So the question the case leaves hanging is simple to ask and hard to answer: is she the bully, or the bullied? The problem, or the symptom? By most accounts, the honest answer is that it depends who you ask — and that dependence is itself the real problem.`,
        ],
      },
      {
        heading: "A Fractured Board",
        paragraphs: [
          `The board chair and Begum reportedly clashed, and trustees disagreed publicly about how to handle the racism complaints — signs of an organisation fractured from the top down.`,
          `Rather than examining its own failures, the board's investigation focused on one person — who happened to be a woman of colour. In an organisation that has built its public identity around fighting for racial justice, that's a hard irony to sit with.`,
          `It's a pattern that shows up well beyond Oxfam: nonprofits that build their brand on equity, dignity and "decolonising" systems, while internally reproducing the same hierarchies they campaign against.`,
        ],
      },
      {
        heading: "More Than One Bad CEO, or One Bad Board",
        paragraphs: [
          `What the Oxfam case really exposes isn't a single villain. It's an organisation that struggled to hold itself accountable for systemic racism while investigating individuals, to let its leadership be diverse without making that diversity itself the issue, and to address real power imbalances without weaponising identity in the process.`,
          `Nonprofit work culture will keep failing people as long as "mission" gets used as an excuse. No cause is good enough to justify an unsafe or unfair workplace.`,
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "why-social-sector-paid-less",
    title: "Why Do You Think People in the Social Sector Are Paid Less?",
    dek: "Understanding the relationship between gender and pay in India's development sector.",
    tag: "Work Culture",
    cover: "/stories/paid-cover.png",
    images: ["/stories/paid-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "6 min read",
    sections: [
      {
        heading: "Let's Start With the Numbers",
        paragraphs: [
          `A 2015 survey by Dasra examined 328 Social Purpose Organisations across India. Women made up 53% of the workforce — making this a female-dominated sector — yet only 34% of women were in managerial positions, and just 19% of these organisations were led by women.`,
          `The pattern is troubling and familiar: women are doing the work, but not leading the organisations. (Source: Dasra, "Lost in Transition: Barriers to Women's Leadership in the Indian Social Sector," 2015.)`,
        ],
      },
      {
        heading: "What Our Instagram Community Shared",
        paragraphs: [
          `To see whether things had shifted since 2015, we ran a quick Instagram poll and got over 100 responses. 57% said women make up more than half of their team. 64% said their reporting manager is a woman. But only 27% said their co-founder or director is a woman.`,
          `So while the gender ratio looks "balanced" on paper, the decision-making roles often don't reflect that. (These results reflect individual responses and may include overlaps.)`,
        ],
      },
      {
        heading: "A Global Pattern of Gendered Devaluation",
        paragraphs: [
          `Globally, sectors where women form the majority — teaching, caregiving, nursing, social work — are systematically undervalued and underpaid. A UN Women report (2020) found that female-dominated occupations tend to be paid less even when they require similar levels of skill, experience and education as male-dominated professions.`,
          `Society has historically placed lower economic value on roles that are about nurturing, service and community-building — roles women have long been expected to perform for free or at minimal pay.`,
        ],
      },
      {
        heading: "The Real Pay Gap",
        paragraphs: [
          `In India, data from Glassdoor, PayScale and AmbitionBox shows the average monthly salary for a social worker ranges from ₹16,000 to ₹29,000. By contrast, an entry-level corporate associate in a tech or finance firm earns ₹35,000 to ₹50,000 a month, despite often having less emotionally and socially demanding roles.`,
          `Even within the development sector, male-led organisations tend to raise and control more funding, which translates into higher executive compensation and strategic visibility.`,
          `Oxfam's "Time to Care" report (2019) explains how unpaid and underpaid care work is often assigned to women, worsening economic inequalities. The WHO report "Delivered by Women, Led by Men" (2019) found women make up 67% of the global health and social care workforce but hold only 25% of senior roles.`,
        ],
      },
      {
        heading: "The Gendered Cycle of Power and Pay",
        quote: "Men hold the power. Women do the work. And the work stays undervalued.",
        paragraphs: [
          `In the social sector, leadership remains largely male while the workforce is predominantly women. Women make up the majority of those implementing the work — from community engagement to frontline services. But decisions on pay, recognition and direction are still largely made by men in leadership roles.`,
          `The power imbalance creates a cycle: men hold the power, women do the work, and the work stays undervalued. When women are overrepresented in frontline roles but underrepresented in leadership, and when care work is seen as a "natural" extension of a woman's role rather than skilled labour, it's easy to see how gender bias becomes a systemic pay issue.`,
        ],
      },
      {
        heading: "The Cost of Caring",
        paragraphs: [
          `So when we ask why the social sector is paid less, we must also ask: who is doing the work? Who is making the decisions? And whose labour do we value?`,
          `Social workers deserve fair pay for the care and commitment they bring every day.`,
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "who-is-the-annual-report-for",
    title: "Who Is a 100-Page Annual Report Really Accountable To?",
    dek: "Why most NGO annual reports read less like public accountability and more like donor-facing institutional storytelling.",
    tag: "Accountability",
    cover: "/stories/report-cover.png",
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "5 min read",
    sections: [
      {
        heading: "The Law Assumes Accountability",
        paragraphs: [
          `Under Section 12A and 80G of the Income Tax Act, and as per the FCRA 2010, NGOs in India are required to publish their annual reports on their websites for compliance. The law assumes that a publicly available annual report makes an NGO accountable to the public eye.`,
          `But are NGOs truly accountable to the public?`,
        ],
      },
      {
        heading: "Who the Report Is Really Designed For",
        paragraphs: [
          `When making NGO annual reports, you will often hear questions like: "How should it look?" Or "What will the donor think?" Or "Can we make the impact sound stronger?"`,
          `But no one ever asks: "How should this report be accountable to the community? Can they read it, understand it? Can the people we serve recognise their own reality in these pages?"`,
          `The report is almost always designed with the donor in mind. The tone, structure, proof points, visuals and financial framing are all built to reassure the funder that money was well spent. That already proves a lot.`,
        ],
      },
      {
        heading: "Not Accountable to the Community",
        quote: "They may be consulted. They may be surveyed. They may be photographed. But they rarely get the power to reject the NGO's version of success.",
        paragraphs: [
          `By design, nonprofits are not truly accountable to the communities they work with. The community cannot hold an NGO accountable for programme failures, or for data that does not reflect the reality in which they live.`,
          `They may be consulted. They may be surveyed. They may be photographed. But they rarely get the power to reject the NGO's version of success.`,
          `It proves that NGOs feel most accountable to the person or institution they receive money from. So the annual report becomes less a document for the community and more a performance of reliability for the funder.`,
        ],
      },
      {
        heading: "Evidence, Not Authors",
        paragraphs: [
          `An NGO's annual report is meant to create transparency for all parties involved. Its design should keep in mind the communities, staff, board members, donors, partners and the wider public.`,
          `But communities do not shape the narrative, approve the claims, or define what success should look like. The people most affected by the work are rarely the primary audience for an NGO's annual report. Even when communities appear in the report, they often appear as evidence, not as authors.`,
        ],
      },
      {
        heading: "Why It Reads So Boring",
        quote: "Most annual reports read less like public accountability and more like donor-facing institutional storytelling. They were never made for you.",
        paragraphs: [
          `This is part of a larger structure where upward accountability consistently dominates downward accountability. If the community cannot meaningfully challenge failed outcomes and inflated success claims, then the report is not neutral.`,
          `So who is the annual report really for? Not the community that has to live with the consequences. Not the people who should be able to say: "This did not work." It is mainly for those who fund, govern and legitimise the NGO.`,
          `If NGOs designed their most "transparent" document around community judgment rather than donor comfort, their deepest accountability would be visible in the very document meant to prove otherwise. And that is precisely why most NGO annual reports are so boring to you — they were never made for you.`,
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "fcra-amendments-foreign-funding",
    title: "20,700+ NGOs Lose Foreign Funding Since the 2020 FCRA Amendment",
    dek: "On average, 12 organisations were deregistered every day over five years. What the amendments changed, and who they hit hardest.",
    tag: "Power & Politics",
    cover: "/stories/fcra-cover.png",
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "8 min read",
    sections: [
      {
        heading: "What Is FCRA?",
        paragraphs: [
          `The Foreign Contribution (Regulation) Act, 2010 regulates how NGOs in India receive and use foreign donations. Its stated aim is to prevent the misuse of foreign funds and safeguard national interest. India has over 30 lakh registered NGOs, playing a vital role in achieving Sustainable Development Goals.`,
        ],
      },
      {
        heading: "The Key Changes Introduced in 2020",
        paragraphs: [
          `The Government of India passed the FCRA Amendment Bill, 2020 on 23 September 2020, with little prior consultation. It brought significant changes: a ban on sub-granting, meaning recipient NGOs can no longer transfer foreign funds to other, often smaller organisations; a reduced administrative expense cap, cut drastically from 50% to 20%; and a mandatory SBI account, requiring all foreign contributions to be received through a designated FCRA account at the State Bank of India's main branch in New Delhi.`,
        ],
      },
      {
        heading: "A 'Reductive' View of Rights",
        paragraphs: [
          `On 8 April 2022, the Supreme Court upheld the constitutionality of the 2020 amendments, asserting that NGOs "do not have a fundamental right to receive foreign funds," and that foreign contribution can have material impact on the socioeconomic structure and polity of the country.`,
          `Advocate-on-Record Abhishek Jebaraj notes that the Court's framing of questions related to fundamental rights is "dangerously reductive of their true scope," and that this is troubling.`,
        ],
      },
      {
        heading: "Stifling the Grassroots",
        quote: "It is smaller grassroots organisations that rely on re-granted money. They lack the wherewithal to access international donors directly.",
        quoteAttribution: "Ingrid Srinath, Director, CSIP",
        paragraphs: [
          `The ban on sub-granting severely impacts smaller, grassroots organisations. As Ingrid Srinath, Director of CSIP, explains, "It is smaller grassroots organisations that rely on re-granted money. They lack the wherewithal to access international donors directly."`,
          `Without sub-grants, NGOs serving minority communities will have to reduce the strength of their grassroots workers, potentially reversing progress on Sustainable Development Goals. The amendment makes collaboration and consortiums nearly impossible.`,
          `The reduction of the administrative expense cap to 20% is proving challenging, because FCRA's definition of administrative expense is broad. As Ms. Srinath argues, "You cannot run a field programme without layers of supervision, management, policy design and strategy. Effectively, the Amendments suggest that those organisations must fund all costs from domestic donors. This makes it near impossible for certain types of work to happen at all."`,
        ],
      },
      {
        heading: "Transparency, or Control?",
        paragraphs: [
          `The government claims the amendments enhance transparency. But critics point to contradictions: electoral bonds permitted political contributions from international entities via an "entirely opaque" instrument; the PM CARES Fund accepts international donations but "is not subject to any scrutiny."`,
          `Between 2020 and 2025, 20,700 NGOs had their FCRA licenses cancelled. Lawyer Aditya Shrivastava suggests many cancellations were due to "mere technicalities, such as failure to file annual returns on deadline," rather than genuine misuse.`,
          `The Union government argued that foreign donations doubled between 2010 and 2019, raising the risk of foreign interference and alleged use for "Naxalite and other activities." However, there is no publicly available data to show the purported magnitude of misuse, raising questions about whether the strict limitations are proportionate to the supposed threat.`,
        ],
      },
      {
        heading: "The Gaps in Domestic Giving",
        paragraphs: [
          `While domestic funding is increasing, it comes with limitations. CSR law is designed to incentivise short-term, easy-to-measure service delivery. Domestic philanthropy prioritises sectors like health and sanitation (₹6,916.66 crore), education (₹6,463.51 crore) and rural development (₹1,671.45 crore) for FY2020-21.`,
          `Neglected causes suffer: NGOs working with marginalised groups such as HIV-AIDS patients, unorganised labour, persons with disabilities, and commercial sex workers are "not popular with Indian donors." This leaves crucial social justice work vulnerable.`,
        ],
      },
      {
        heading: "A Call for Dialogue and Reform",
        paragraphs: [
          `To mitigate the negative impacts, a more balanced approach is needed: a robust grievance redressal mechanism so NGOs aren't forced into tiresome legal battles; clearer guidelines to reduce ambiguity in "category matching" that delays registration; support for a domestic philanthropy ecosystem oriented towards long-term institutional strengthening, not just short-term programmes; and genuine dialogue with civil society, given the initial bill was passed "without any prior consultation."`,
          `The shift towards domestic funding, while positive in some aspects, cannot fully compensate for the specialised funding and operational support that foreign contributions often provide — particularly for less popular causes. A critical re-evaluation is crucial to ensure that regulation does not inadvertently hinder the vital role NGOs play in India's development.`,
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "ncert-textbook-rationalisation",
    title: "How the NCERT Textbook Rationalisation Is Reshaping the Historical Narrative",
    dek: "Recent revisions to NCERT textbooks have sparked concern that curriculum changes go beyond reducing burden.",
    tag: "Power & Politics",
    cover: "/stories/ncert-cover.png",
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "7 min read",
    sections: [
      {
        heading: "Textbooks Under the Microscope",
        paragraphs: [
          `Recent revisions of NCERT textbooks have sparked concern, with critics alleging a deliberate attempt to erase certain historical facts and figures. While NCERT cites reasons like reducing curriculum load due to COVID-19 and aligning with the National Education Policy 2020's focus on conceptual learning, many argue there is a more profound agenda at play.`,
          `The NEP 2020 advocates for a "rationalised" curriculum. However, critics suggest this rationalisation has been selectively applied, leading to the removal of content that doesn't align with a particular narrative rather than simply reducing burden.`,
        ],
      },
      {
        heading: "The Systematic Removal of Mughal History",
        paragraphs: [
          `One of the most contentious changes is the significant reduction or complete removal of chapters on the Mughal Empire and other Muslim rulers from history textbooks.`,
          `Class 7 textbooks reportedly removed a table detailing the achievements of Mughal emperors. Information on Aurangzeb and the emergence of regional kingdoms after him has been excluded from Class 8 textbooks. A dedicated Class 12 history chapter on Mughal Courts was also removed.`,
        ],
      },
      {
        heading: "Riots, Democracy and Deletions",
        paragraphs: [
          `References to the 1992 Babri Masjid demolition and the 2002 post-Godhra Gujarat riots have been deleted from Class 12 sociology textbooks. This included paragraphs discussing how communal violence leads to residential segregation. Chapters on "Democracy and Diversity" and "Challenges to Democracy" were also removed from the Class 10 political science textbook, raising concerns about the dilution of secular principles.`,
        ],
      },
      {
        heading: "Science vs Ideology",
        quote: "Millions of students won't learn Darwin's theory unless they opt for biology in Class 11 or 12.",
        quoteAttribution: "Pratima Mondal, MP",
        paragraphs: [
          `The removal of Charles Darwin's theory of evolution from Class 9 and 10 science textbooks has been met with widespread condemnation from the scientific community. Initially removed from the examination syllabus, it was later reportedly purged entirely from the textbooks for these grades. TMC MP Pratima Mondal highlighted the grave concern, stating that millions of students won't learn Darwin's theory unless they opt for biology in Class 11 or 12.`,
        ],
      },
      {
        heading: "Whitewashing and Silencing Dissent",
        quote: "The government is assaulting the ethos of India by poisoning the school curriculum.",
        quoteAttribution: "S. Irfan Habib, historian",
        paragraphs: [
          `Sections detailing Hindu extremists' dislike for Gandhi's pursuit of Hindu-Muslim unity, and attempts on his life, were deleted. The Class 12 history textbook's account of Gandhi's assassination no longer details Nathuram Godse as a "Brahmin from Pune who had published Gandhiji as an appeaser of Muslims," retaining only "Nathuram Godse."`,
          `References to Maulana Abul Kalam Azad, India's first education minister and a key figure in India's independence movement, have been removed from the Class 11 political science textbook. Historian S. Irfan Habib remarked that the government is "assaulting the ethos of India by poisoning the school curriculum," highlighting concerns about academic freedom and intellectual integrity.`,
        ],
      },
      {
        heading: "Tighter Control, and a New Void to Fill",
        paragraphs: [
          `Recent CBSE guidelines mandate the use of NCERT textbooks for Classes 9-12 and strongly advise them for Classes 1-8. Schools are now held responsible for ensuring no "objectionable content" in any prescribed books, including supplementary materials. Academicians view this move as an attempt to exert tighter control over educational content.`,
          `Meanwhile, NCERT has established a committee to integrate Indian Knowledge Systems (IKS) into new textbooks. While promoting indigenous knowledge is positive, critics question whether this initiative is part of a larger plan to replace diverse historical narratives with a specific, culturally driven one.`,
        ],
      },
      {
        heading: "Will Future Generations Know Their True History?",
        paragraphs: [
          `The long-term impact on mass education is a critical concern. Critics argue that these revisions risk creating a generation with a fragmented, biased understanding of history and society. This could stifle critical thinking, promote intellectual stagnation, and potentially lead to the indoctrination of a particular ideological viewpoint rather than holistic education.`,
          `By selectively removing and altering historical and scientific content, there's a risk that future generations of Indian students will be deprived of a comprehensive and nuanced understanding of their nation's complex past. This raises serious questions about academic integrity and the foundation of knowledge.`,
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "good-ngo-bad-ngo-narratives",
    title: "How Government and Public Narratives Shape Which NGOs Are Allowed to Exist",
    dek: "An excerpt from the EU System for an Enabling Environment for Civil Society (EU SEE) report on India, 2025.",
    tag: "Power & Politics",
    cover: "/stories/narratives-cover.png",
    images: ["/stories/narratives-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "5 min read",
    sections: [
      {
        heading: "A Polarised Political Culture",
        paragraphs: [
          `The political culture surrounding civil society is increasingly polarised, with a thin and often blurred line between political activism and the legitimate role of civil society organisations. CSOs have historically contributed to social reform, development and public accountability. But in recent years, their work is often portrayed — particularly in political rhetoric and some sections of the media — as politically motivated or aligned with "anti-national" elements.`,
        ],
      },
      {
        heading: "How the Narrative Is Amplified",
        paragraphs: [
          `This narrative is amplified through certain sections of the media and digital platforms. Mainstream, pro-government media outlets frequently echo official rhetoric, portraying critical voices in civil society as enemies of the state. Terms like "urban naxal" have been used to discredit dissenters, reinforcing suspicion and hostility.`,
          `In contrast, a few independent digital media platforms continue to highlight the value of civil society and expose unlawful state actions — but they face increasing legal and digital pressure themselves.`,
        ],
      },
      {
        heading: "The 'Good NGO' vs 'Bad NGO' Divide",
        paragraphs: [
          `Not all CSOs face the same treatment. Organisations focused on service delivery — sanitation, education, disaster response — are often praised and welcomed, especially when aligned with government programmes. This creates a clear distinction between "acceptable" and "unacceptable" civil society work, determined less by legality and more by political alignment.`,
          `A "good NGO," in this framing, fills gaps where the government is absent, avoids questioning policy or structural inequality, aligns with government schemes, and is perceived as "helping," not "organising." A "bad NGO" works with Dalits, Adivasis, Muslims, LGBTQ+ communities or other socially excluded groups; focuses on rights, advocacy and dissent; challenges state actions or exposes unlawful practices; and uses the language of justice, equity and accountability — which is then framed as "political."`,
        ],
      },
      {
        heading: "Why This Matters",
        paragraphs: [
          `As a result, CSOs that engage in advocacy or work with marginalised populations frequently face barriers to funding, registration and public legitimacy.`,
          `Public attitudes are mixed. In many communities, CSOs are valued for their service where the state is absent. But broader public understanding of advocacy and rights-based work remains limited and easily influenced by dominant political narratives. Organisations supporting Dalits, Adivasis, Muslims and LGBTQ+ rights often encounter both state and societal resistance, reflecting wider patterns of exclusion and majoritarian nationalism. In this context, the role of civil society in upholding pluralism and constitutional rights becomes both more urgent and more vulnerable.`,
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "dba-led-nonprofits-funding-gap",
    title: "The Funding Gap Facing Dalit, Bahujan and Adivasi-Led Nonprofits",
    dek: "Under-funding, lack of reserves and an inability to build operating surpluses fall hardest on nonprofits led by historically marginalised groups.",
    tag: "Funding",
    cover: "/stories/dba-cover.png",
    images: ["/stories/dba-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "4 min read",
    sections: [
      {
        heading: "Who Bears the Weakness",
        paragraphs: [
          `Under-funding, lack of reserves, and an inability to create operating surpluses are more frequently encountered by nonprofits led by Dalit, Bahujan or Adivasi (DBA) leaders — as well as those not located in major cities.`,
          `70% of DBA-led nonprofits reported no reserve funds, a sign of particularly acute financial weakness for these historically marginalised groups.`,
        ],
      },
      {
        heading: "What Funders Track — and Don't",
        figure: "/stories/dba-support.png",
        figureCaption: "Funders vary widely on whether they track the diversity of their grantee portfolios. Source: Bridgespan Group.",
        paragraphs: [
          `Just 17% of the 77 funders surveyed in India by the Bridgespan Group (2022) — roughly 13 in number — reported tracking the proportion of their funding that goes to nonprofits serving Dalit, Bahujan and Adivasi populations.`,
          `Only 5% of the 77 funders surveyed — roughly 4 — reported that they track the leadership composition of their grantee NGOs with respect to DBA representation. (Source: The Bridgespan Group, survey of 77 funders in India, October 2021–February 2022.)`,
        ],
      },
      {
        heading: "Addressing Systemic Inequities",
        paragraphs: [
          `India has a long history of systemic inequities based on factors such as caste, gender, tribal origin and religion. Nonprofits benefit greatly from having leaders and staff with lived experience of the individuals and communities they serve. This enables them to take into account the distinctive strengths and needs of diverse, historically marginalised communities, helping design more effective programmes that address the root causes of social problems.`,
          `It is crucial for funders to understand the unique contexts of nonprofit partners who may have faced systemic marginalisation — and to go the extra mile in supporting their organisational development and financial resilience.`,
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "academic-publishing-exploitation",
    title: "The Exploitation of Academic Labour in Academia",
    dek: "Academic publishing generates roughly $18 billion a year at profit margins higher than tobacco companies — while researchers work for free.",
    tag: "Power & Knowledge",
    cover: "/stories/academic-cover.png",
    images: ["/stories/academic-support.png"],
    author: "Social Sector Majdoor Union",
    authorHandle: "wokeonpaper",
    readTime: "5 min read",
    sections: [
      {
        heading: "One of the Most Profitable Industries in the World",
        paragraphs: [
          `Academic publishing represents one of the most exploitative industries globally, generating approximately $18 billion in annual revenue with profit margins of 30–40% — higher than tobacco companies — while systematically exploiting researchers' free labour.`,
          `The system operates on a parasitic model: universities pay researchers to conduct research, write papers and perform peer reviews, then pay again to access their own work. Publishers charge authors Article Processing Charges (APCs), while simultaneously charging institutions subscription fees for access.`,
        ],
      },
      {
        heading: "The Numbers Behind the APC Boom",
        paragraphs: [
          `Global spending on APCs reached $8.349 billion between 2019 and 2023, with annual costs tripling from $910.3 million in 2019 to $2.538 billion in 2023. Major publishers collectively earn billions from APCs annually: MDPI ($681.6 million), Elsevier ($582.8 million) and Springer Nature ($546.6 million) in 2023 alone.`,
          `Publishers like Elsevier achieve profit margins of nearly 40%, surpassing tech giants like Google (21.2%) and Apple (24.5%), by creating a system where academics provide content, peer review and editorial work without compensation.`,
        ],
      },
      {
        heading: "A Captive Market",
        quote: "They are organisms that take something without giving anything back.",
        quoteAttribution: "Alexander Thomas, co-author of 'Against Parasite Publishers'",
        paragraphs: [
          `Academics tolerate this exploitation because career advancement depends on publishing in prestigious journals, creating a captive market. Publishers exploit the "publish or perish" culture, knowing researchers cannot refuse to participate without damaging their careers.`,
          `The exploitation extends beyond publishing to widespread unpaid work throughout academia, disproportionately affecting early-career researchers.`,
        ],
      },
      {
        heading: "Who Gets Locked Out",
        figure: "/stories/academic-journals.png",
        figureCaption: "The prestige journals at the centre of a multi-billion-dollar publishing economy.",
        paragraphs: [
          `Those with privilege — access to funding, mentorship, networks and institutional backing — find it easier to navigate the costly and time-consuming process of research and publication. Meanwhile, marginalised scholars, especially from under-resourced institutions or first-generation backgrounds, struggle to break through these barriers.`,
          `As mathematician Alexander Thomas, co-author of "Against Parasite Publishers," puts it: publishers "are organisms that take something without giving anything back."`,
        ],
      },
    ],
  },
]
