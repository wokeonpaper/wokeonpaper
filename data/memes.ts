export type Meme = {
  id: number
  title: string
  subheading: string
  body: string[]
  category: string
  tags: string[]
  image: string
}

export const memes: Meme[] = [
  {
    id: 1,
    title: "The Primary Health Centre Test",
    subheading: "A training module is not the same thing as knowing the place where the work happens.",
    body: [
      "Social sector work often begins with a neat deck, a training module and a carefully designed framework. All of these can be useful. But they cannot replace knowing the setting.",
      "A frontline health worker does not experience the system through a PowerPoint. They experience it through staff shortages, queues, paperwork, supplies and the everyday realities of a public health centre.",
      "The joke lands because the question is simple: have we actually been there? Good development work starts with listening, observing and understanding before prescribing solutions."
    ],
    category: "Work Culture",
    tags: ["consulting", "groundwork", "health", "development"],
    image: "/memes/1.png"
  },
  {
    id: 2,
    title: "The Fellowship That Doesn't Count",
    subheading: "Apparently, working in a fellowship is not always considered work experience.",
    body: [
      "Fellowships can involve months of fieldwork, research, community engagement, travel, reporting and learning. Yet many organisations still treat them as something separate from actual work experience.",
      "This creates a strange contradiction in the social sector. We tell young people that fellowships are valuable pathways into development work, then ask them to prove that the work they did somehow counts.",
      "Experience should be judged by what someone actually did and learned, not simply by the label attached to the programme. If the work was real, the experience is real too."
    ],
    category: "Work Culture",
    tags: ["fellowships", "careers", "jobs", "social sector"],
    image: "/memes/2.png"
  },
  {
    id: 3,
    title: "The Theory of Change vs The Change",
    subheading: "One lives beautifully inside the deck. The other has to survive outside it.",
    body: [
      "The theory of change is supposed to help organisations explain how their work leads to change. It can bring clarity to a complex programme and make assumptions visible.",
      "The problem begins when the diagram becomes more convincing than reality. Neat arrows, boxes and outcomes can create the feeling that change is predictable when life rarely behaves that way.",
      "The best theory of change should remain connected to what people experience. If the field keeps telling us something different from the deck, perhaps the deck needs changing."
    ],
    category: "Impact & Evaluation",
    tags: ["theory of change", "impact", "evaluation", "frameworks"],
    image: "/memes/3.png"
  },
  {
    id: 4,
    title: "Policy for Everyone Except Us",
    subheading: "It is easier to recommend good policy than to practise it.",
    body: [
      "Nonprofits often ask governments to improve systems, strengthen institutions and create better conditions for people. Those demands matter. But organisations also create systems for their own employees.",
      "That is where the contradiction appears. An organisation can write thoughtful policy recommendations while offering staff unclear contracts, poor work hours or limited protection.",
      "Good values should travel in both directions. If employee welfare matters when discussing public policy, it should matter inside the organisation too. Accountability cannot stop at the office door."
    ],
    category: "Work Culture",
    tags: ["employee welfare", "workplace", "policy", "nonprofits"],
    image: "/memes/4.png"
  },
  {
    id: 5,
    title: "Gender Equality, But Make It Comfortable",
    subheading: "Some causes receive applause. Others require taking a real position.",
    body: [
      "Gender equality has become familiar language across the development sector. It appears in proposals, programmes, reports and organisational values. But solidarity becomes more complicated when the issue challenges social comfort.",
      "Trans rights expose that gap. Supporting equality in theory is easy when everyone agrees on what equality should look like. Supporting people whose rights remain contested requires more courage.",
      "If inclusion is a real value, it cannot depend on whether a funder is comfortable with the issue. Rights should not become negotiable just because the funding landscape changes."
    ],
    category: "Rights & Justice",
    tags: ["gender", "trans rights", "inclusion", "equality"],
    image: "/memes/5.png"
  },
  {
    id: 6,
    title: "Watching NGO Workers Work",
    subheading: "Half the salary. No job security. Somehow still called a sector of changemakers.",
    body: [
      "The social sector talks constantly about dignity, livelihoods and decent work. Yet many people doing this work face salaries that lag behind other sectors, temporary contracts and uncertain futures.",
      "The irony is particularly sharp when public officials are imagined watching NGO workers operate under those conditions. The work may be socially valuable, but that does not automatically make poor working conditions acceptable.",
      "People should not have to choose between meaningful work and economic security. If we care about decent work for communities, we should also ask what decent work looks like for the people delivering it."
    ],
    category: "Work Culture",
    tags: ["wages", "job security", "labour", "nonprofits"],
    image: "/memes/6.png"
  },
  {
    id: 7,
    title: "The Funding Fashion Cycle",
    subheading: "Some problems become fundable. Others quietly disappear from the menu.",
    body: [
      "Funding priorities shape what organisations can work on. When a theme becomes popular, suddenly many organisations are encouraged to build programmes around it, measure it and demonstrate results.",
      "Meanwhile, deeper problems can struggle for attention because they are harder to explain, slower to change and more difficult to measure. Caste, migration, child labour and exclusion rarely fit into a neat skills programme.",
      "The question is not whether twenty-first-century skills matter. It is whether funding choices allow organisations to address the structural conditions that determine who gets access to those opportunities."
    ],
    category: "Funding",
    tags: ["funding", "donors", "inequality", "education"],
    image: "/memes/7.png"
  },
  {
    id: 8,
    title: "Groundwork Needs a Branding Budget",
    subheading: "Sometimes the money meant for doing the work becomes money for showing the work.",
    body: [
      "Groundwork is rarely glamorous. It means meetings, travel, follow-up, training, relationship building and the slow work of making systems function. None of it necessarily produces a dramatic film.",
      "Branding and communication are useful too. Organisations need to explain their work and companies want to show where their CSR money goes. But the balance matters.",
      "When the communication budget becomes easier to approve than the groundwork budget, the incentive quietly changes. We begin rewarding what looks impressive rather than what makes a lasting difference."
    ],
    category: "CSR & Philanthropy",
    tags: ["CSR", "branding", "impact", "groundwork"],
    image: "/memes/8.png"
  },
  {
    id: 9,
    title: "The 200-Slide Solution",
    subheading: "Some problems are easier to solve from a conference room.",
    body: [
      "A long presentation can contain impressive analysis, elegant frameworks and hundreds of recommendations. What it cannot automatically contain is experience of the place being discussed.",
      "Government schools are complex spaces. Teachers, children, parents, officials and communities experience them differently. A solution designed without spending time there can easily miss what matters.",
      "Expertise has value. So does humility. Before telling people how to fix a system, perhaps spend enough time inside that system to understand why it works the way it does."
    ],
    category: "Consulting",
    tags: ["consulting", "government schools", "expertise", "fieldwork"],
    image: "/memes/9.png"
  },
  {
    id: 10,
    title: "The CSR Tap",
    subheading: "Install a tap. Add a logo. Call it impact.",
    body: [
      "A school water tap can be useful. But a useful intervention depends on what happens after installation. Who maintains it? What breaks? Who pays? Does water actually remain available?",
      "The meme points to a familiar CSR problem: treating the visible object as the impact. A tap is easy to photograph. Maintenance systems are harder to explain in an impact film.",
      "The branding makes the contradiction sharper. When public spaces become advertising surfaces, the intervention can start looking less like a public good and more like a reminder of corporate generosity."
    ],
    category: "CSR & Philanthropy",
    tags: ["CSR", "schools", "water", "impact washing"],
    image: "/memes/10.png"
  },
  {
    id: 11,
    title: "The Unpaid Internship Economy",
    subheading: "Free labour, plus an experience letter. What a deal.",
    body: [
      "Internships can be valuable when they create genuine learning. They become problematic when organisations rely on unpaid academic labour to get work done while offering little supervision, support or learning.",
      "An experience letter does not pay rent. Nor does a line on a CV erase the value of someone's time. Young people entering the sector are especially vulnerable because they are told experience is the price of admission.",
      "If organisations care about equity, they should think about who can afford to work for free. An unpaid opportunity is not equally accessible to everyone."
    ],
    category: "Work Culture",
    tags: ["internships", "unpaid work", "careers", "labour"],
    image: "/memes/11.png"
  },
  {
    id: 12,
    title: "Before Grant Proposals",
    subheading: "Imagine fighting systemic problems without first writing a twelve-page concept note.",
    body: [
      "The meme imagines a simpler time, when social movements could focus on organising, mobilising and doing the work rather than constantly translating their work into funding language.",
      "Today, a good idea often needs a theory of change, indicators, budgets, milestones, outcomes and a convincing narrative before it can receive support. Documentation has become part of the work itself.",
      "Proposal writing is not inherently bad. The problem is when the ability to describe the work becomes more important than the ability to do it. Systems change should not depend on writing skills alone."
    ],
    category: "Funding",
    tags: ["grants", "proposal writing", "funding", "systems change"],
    image: "/memes/12.png"
  },
  {
    id: 13,
    title: "When One Corporate Name Is Everywhere",
    subheading: "Power, healthcare, mining and schools can sit under the same corporate umbrella.",
    body: [
      "The meme brings together different corporate interests and asks us to notice how wide corporate influence can become. The same name can appear across industries that shape public life in very different ways.",
      "That matters for the social sector because corporations are increasingly important funders, partners and actors in development. Their role can create resources, but it can also create questions about power and accountability.",
      "The point is not that every corporate intervention is harmful. It is that scale creates responsibility. When influence expands across sectors, scrutiny should expand with it."
    ],
    category: "Power & Politics",
    tags: ["corporates", "power", "CSR", "accountability"],
    image: "/memes/13.png"
  },
  {
    id: 14,
    title: "Impact vs Instagram",
    subheading: "What happened on the ground and what happened on social media are often two different stories.",
    body: [
      "Organisations need communication. They need to explain what they do, share learning and acknowledge supporters. But social media rewards simplicity, emotion and polished stories.",
      "Real impact is usually messier. Programmes change direction. People disagree. Outcomes take time. Some things fail. A single post rarely has room for all of that complexity.",
      "The danger comes when communication stops documenting the work and starts replacing it. If the social media version looks nothing like the experience of the people involved, the question is worth asking: who is the story really for?"
    ],
    category: "Communications",
    tags: ["comms", "social media", "impact", "storytelling"],
    image: "/memes/14.png"
  },
  {
    id: 15,
    title: "The Fellowship Naming Committee",
    subheading: "Emerging leaders. Young innovators. Social leadership. Pick your favourite.",
    body: [
      "The social sector has developed a special talent for naming fellowship programmes. Add leadership, innovation, change or emerging to almost any noun and you have something that sounds ready for a brochure.",
      "The language reflects a genuine desire to develop young people. But when every programme uses the same vocabulary, the names begin to lose meaning.",
      "Perhaps the more interesting question is what the fellowship actually offers. Who gets access? What work do fellows do? What support do they receive? A simple name can be perfectly good when the experience behind it is strong."
    ],
    category: "Work Culture",
    tags: ["fellowships", "leadership", "branding", "nonprofits"],
    image: "/memes/15.png"
  },
  {
    id: 16,
    title: "The Change Word",
    subheading: "Change is everywhere. Apparently, it needs several more synonyms.",
    body: [
      "Changemaker. Change leader. Driving change. Stories of change. Catalyst for change. Systemic change. The word appears so often that it can start to mean almost anything.",
      "This is a wider problem with development language. Words that once helped describe real ideas can become branding shorthand. Once everyone uses them, organisations need even more elaborate versions to stand out.",
      "Language matters because it shapes how we understand work. Sometimes the clearest description is also the least fashionable one. Instead of asking whether something drives change, perhaps say what actually changes and for whom."
    ],
    category: "Sector Language",
    tags: ["jargon", "change", "branding", "nonprofit language"],
    image: "/memes/16.png"
  },
  {
    id: 17,
    title: "The Community Vocabulary",
    subheading: "Community-led. Community-based. Community-centred. Community everything.",
    body: [
      "The word community carries enormous weight in development work. It can describe a place, a group, a network, an identity or simply the people an organisation wants to reach.",
      "The problem begins when the word becomes a substitute for saying who actually participated and how. A programme can be called community-led while decisions remain elsewhere.",
      "Good participation needs more than a label. It requires power, voice and meaningful influence. Instead of asking whether a project is community-centric, we should ask a simpler question: what decisions did the community actually make?"
    ],
    category: "Sector Language",
    tags: ["community", "participation", "power", "jargon"],
    image: "/memes/17.png"
  },
  {
    id: 18,
    title: "Whose Story Becomes Knowledge?",
    subheading: "When research leaves the community but the community never gets the finished paper.",
    body: [
      "Researchers can bring valuable attention to issues that deserve it. But research involving marginalised communities also raises questions about who benefits from the knowledge being produced.",
      "Stories can travel far. They can become dissertations, papers, conferences and careers. Meanwhile, the people whose lives made the research possible may struggle to access the final work.",
      "Ethical research should ask what communities receive in return, how stories are represented and who controls the knowledge. Participation should not end when the interview ends."
    ],
    category: "Power & Knowledge",
    tags: ["research", "knowledge", "communities", "Global South"],
    image: "/memes/18.png"
  },
  {
    id: 19,
    title: "The NGO Government Corporate Triangle",
    subheading: "Explain the relationship between public money, private power and nonprofit work in one diagram.",
    body: [
      "Corporations generate profits and receive policy support. Some of that wealth then flows into CSR and philanthropy. NGOs use those funds to deliver programmes that can overlap with public responsibilities.",
      "The arrangement can create useful partnerships. It can also blur accountability. If an NGO delivers a service using private money, who is ultimately responsible for ensuring that the service exists?",
      "The triangle becomes especially interesting when nonprofit action reduces pressure on governments to provide public goods directly. Partnerships matter, but so does the question of who should be accountable to citizens."
    ],
    category: "Power & Politics",
    tags: ["government", "corporates", "NGOs", "CSR"],
    image: "/memes/19.png"
  },
  {
    id: 20,
    title: "The Job Description Mystery",
    subheading: "If the JD does not mention the salary, what exactly are we applying for?",
    body: [
      "A job description usually tells candidates what an organisation expects from them. It should also help candidates decide whether the opportunity works for them. Salary is a basic part of that decision.",
      "Leaving compensation out can shift the burden onto applicants. They may spend hours applying, interviewing and completing tasks without knowing whether the role is financially viable.",
      "Transparency is not an unreasonable demand. If organisations want professional candidates, they should treat compensation as part of professional communication. Purpose matters, but people still have bills to pay."
    ],
    category: "Work Culture",
    tags: ["jobs", "salary", "transparency", "workplace"],
    image: "/memes/20.png"
  },
  {
    id: 21,
    title: "Change Has a Price Tag",
    subheading: "The crowd wants change. The money wants something else.",
    body: [
      "The cartoon places people demanding change on one side and money on the other. It captures a tension that has followed philanthropy and nonprofit work for a long time.",
      "People often want organisations to tackle difficult problems, while funding can come with preferences about what is measurable, visible or strategically attractive. The two goals do not always line up.",
      "Money is necessary for most organisations to operate. But funding should not quietly redefine the problem being addressed. The question is not whether philanthropy funds change. It is what kind of change it is willing to fund."
    ],
    category: "Funding",
    tags: ["philanthropy", "funding", "power", "change"],
    image: "/memes/21.png"
  },
  {
    id: 22,
    title: "Who Is the Nonprofit Accountable To?",
    subheading: "If the money comes from one place and the work serves another, where does accountability sit?",
    body: [
      "Nonprofits often have several stakeholders: funders, boards, governments, employees, partners and the communities they work with. These groups can have very different expectations.",
      "Funding relationships can make accountability especially complicated. The organisation may have to report carefully to the people who provide the money while also claiming to centre the people who experience the programme.",
      "Being critical of nonprofits is not the same as dismissing their work. It is a way of asking whether resources, decisions and outcomes remain connected to the people the organisation says it serves."
    ],
    category: "Accountability",
    tags: ["accountability", "funders", "communities", "nonprofits"],
    image: "/memes/22.png"
  },
  {
    id: 23,
    title: "Make It Flashy",
    subheading: "Deep-rooted problems are difficult. Photo-worthy projects are much easier.",
    body: [
      "Some social problems take years to address. They involve institutions, behaviour, inequality, infrastructure and politics. Their progress is rarely visible in a single photograph.",
      "CSR programmes can face pressure to produce something tangible and easy to communicate. A new structure, event or campaign can make for a much cleaner story than long-term systems work.",
      "The result is an incentive towards visibility. But a project being easy to photograph does not make it more valuable. Sometimes the most important work is precisely the work that produces no dramatic before-and-after picture."
    ],
    category: "CSR & Philanthropy",
    tags: ["CSR", "visibility", "impact", "philanthropy"],
    image: "/memes/23.png"
  },
  {
    id: 24,
    title: "The NGO Hospital",
    subheading: "When the nonprofit sector becomes the emergency room for public problems.",
    body: [
      "The meme imagines a world where a person needing healthcare is directed towards an NGO and a crowdfunding campaign. It is funny because the underlying question is serious.",
      "Nonprofits can fill gaps, mobilise resources and help people navigate difficult systems. But their presence does not remove the need for functioning public institutions.",
      "When NGOs become the default response to basic needs, responsibility can quietly shift away from the state. Crowdfunding can solve an immediate crisis. It cannot replace a public health system designed to prevent that crisis from becoming a personal fundraiser."
    ],
    category: "Public Systems",
    tags: ["healthcare", "NGOs", "crowdfunding", "public systems"],
    image: "/memes/24.png"
  },
  {
    id: 25,
    title: "Selling Knowledge",
    subheading: "Thirty years of advertising. A tuition teacher changes the game.",
    body: [
      "The meme plays with the idea of professional expertise, prestige and the commercial value of knowledge. It places a celebrated advertising career next to the rise of a teacher who built influence through accessible education.",
      "The joke is also about who gets to create knowledge and who gets rewarded for it. Traditional credentials and elite networks are not the only routes to influence anymore.",
      "In the social sector, this is worth remembering. Expertise matters, but so do clarity, accessibility and the ability to reach people directly. Sometimes the person outside the usual system has something important to teach the system."
    ],
    category: "Power & Knowledge",
    tags: ["knowledge", "education", "expertise", "power"],
    image: "/memes/25.png"
  },
  {
    id: 26,
    title: "Changing the Name of the Scheme",
    subheading: "When history, branding and public policy collide.",
    body: [
      "Renaming a public programme can look like a simple administrative decision. But names also carry history, political meaning and memories of the people associated with a scheme.",
      "The meme uses humour to question what happens when familiar public institutions are renamed and reframed. The language of development can change even when the underlying need remains.",
      "For citizens, the bigger question is what changes beyond the name. Does the programme work better? Do workers get paid? Do people receive the promised support? Public policy should ultimately be judged by outcomes, not branding."
    ],
    category: "Power & Politics",
    tags: ["public policy", "MGNREGA", "branding", "government"],
    image: "/memes/26.png"
  },
  {
    id: 27,
    title: "The Proposal Writing Test",
    subheading: "Did the organisation fail, or did the proposal fail to sound impressive enough?",
    body: [
      "Grant proposals are meant to help funders understand an organisation's work, plans and use of resources. But the proposal itself can become a test of writing skill.",
      "That creates an unfair gap. Organisations doing strong fieldwork may not have dedicated proposal writers, consultants or polished language. Organisations with stronger writing capacity can appear more convincing even when their groundwork is weaker.",
      "A good funding process should assess substance as well as presentation. Clear writing matters, but it should not become a proxy for organisational quality or community impact."
    ],
    category: "Funding",
    tags: ["grants", "proposal writing", "funding", "groundwork"],
    image: "/memes/27.png"
  },
  {
    id: 28,
    title: "Why Now?",
    subheading: "Sometimes government action arrives when the political calendar makes it useful.",
    body: [
      "Public policy rarely exists outside politics. Governments respond to public pressure, elections, economic conditions, movements and changing political incentives. That is not a secret, but it is easy to forget.",
      "The meme asks why action is happening now rather than earlier. Timing can reveal what pressures are shaping a decision and whose concerns have suddenly become important.",
      "Citizens should be able to ask these questions without being dismissed as cynical. Understanding political incentives helps us understand policy. Accountability means asking not only what a government does, but why it chooses to do it when it does."
    ],
    category: "Power & Politics",
    tags: ["government", "politics", "accountability", "public policy"],
    image: "/memes/28.png"
  },
  {
    id: 29,
    title: "Fund What You Can Measure",
    subheading: "Structural problems do not become simple because a proposal needs indicators.",
    body: [
      "Funders need ways to understand what their money supports. Measurement can help organisations learn, improve and explain progress. The trouble begins when measurement becomes the main filter for deciding what deserves support.",
      "Caste discrimination, unequal access and social exclusion can take generations to change. Their causes are deep and their effects are not always visible within a grant cycle.",
      "When funding rewards only easily measurable outcomes, organisations may adapt their work to fit the measurement system. The risk is that what is measurable becomes more important than what is meaningful."
    ],
    category: "Funding",
    tags: ["funding", "measurement", "caste", "inequality"],
    image: "/memes/29.png"
  },
  {
    id: 30,
    title: "A Bad NGO Worker",
    subheading: "Questions power. Wants fair pay. Refuses unpaid overtime. Sounds dangerous.",
    body: [
      "The meme creates a fictional list of everything that supposedly makes an NGO worker bad. Most of the items are actually ordinary signs of workplace independence.",
      "Questioning power, refusing unpaid overtime and demanding fair wages are not failures of commitment. Neither are having hobbies, wearing comfortable clothes or supporting collective organising.",
      "The joke exposes an old idea in mission-driven work: that people should sacrifice more because the cause is important. Meaningful work still requires boundaries. A worker can care deeply about social change and still expect dignity, pay and respect."
    ],
    category: "Work Culture",
    tags: ["labour", "wages", "unions", "NGO workers"],
    image: "/memes/30.png"
  },
  {
    id: 31,
    title: "A Bad Indian Citizen",
    subheading: "Reads the Constitution. Questions power. Refuses propaganda.",
    body: [
      "The meme flips the idea of what makes a citizen good or bad. Instead of obedience, it lists behaviours such as questioning authority, reading the Constitution and standing with minorities.",
      "Citizenship is often discussed as duty, but democratic citizenship also involves disagreement. People have the right to question governments, institutions and social norms.",
      "The joke is a reminder that being a citizen is not the same as being a spectator. Democracies need people who can disagree, organise, protest and ask institutions to explain their decisions. A difficult citizen can sometimes be a healthy citizen."
    ],
    category: "Rights & Justice",
    tags: ["citizenship", "Constitution", "democracy", "accountability"],
    image: "/memes/31.png"
  },
  {
    id: 32,
    title: "The Elastic Community",
    subheading: "Community-led. Community-based. Community-driven. Community what?",
    body: [
      "Development organisations use the word community to signal participation and proximity to people. But the word can become so flexible that almost any project can claim it.",
      "A programme can consult people without giving them decision-making power. It can work in a village without being community-led. It can collect feedback without changing a single decision.",
      "The useful question is not which adjective comes before community. It is what power people actually have. Who sets priorities? Who controls resources? Who decides what success looks like? Those answers tell us much more than the label."
    ],
    category: "Sector Language",
    tags: ["community", "participation", "power", "jargon"],
    image: "/memes/32.png"
  },
  {
    id: 33,
    title: "Everything Is Systemic",
    subheading: "Systems, systems, systems. Sometimes a problem is also just a problem.",
    body: [
      "Systems language has become central to development work. Organisations talk about systems strengthening, system transformation, system reform and systemic change because social problems rarely exist in isolation.",
      "The language can be useful. But it can also become a way of making simple ideas sound more sophisticated. Adding the word system does not automatically make an intervention more strategic.",
      "A good systems approach should help people see relationships, incentives and structures more clearly. If the terminology makes the work harder to understand, perhaps the system is in the language rather than the problem."
    ],
    category: "Sector Language",
    tags: ["systems change", "jargon", "strategy", "development"],
    image: "/memes/33.png"
  },
  {
    id: 34,
    title: "Sustainable Everything",
    subheading: "Sustainable growth. Sustainable impact. Sustainable future. Is the word itself sustainable?",
    body: [
      "Sustainable has become one of the most reliable words in development language. Add it to a solution, framework, innovation or impact statement and the idea immediately sounds more responsible.",
      "But sustainability is not a magic quality that appears because we use the word. It depends on money, institutions, behaviour, ownership, incentives and time.",
      "The real test comes later. Who maintains the programme after the grant ends? Who pays? Who owns the work? What happens when the original organisation leaves? A sustainable solution should survive questions like these, not just survive a proposal."
    ],
    category: "Sector Language",
    tags: ["sustainability", "jargon", "impact", "funding"],
    image: "/memes/34.png"
  },
  {
    id: 35,
    title: "Humbled and Honored",
    subheading: "We wrote the post. We approved it. We scheduled it. We liked it. We are humbled.",
    body: [
      "Nonprofit communication has its own vocabulary of gratitude. Every award, partnership, launch and announcement can begin with the familiar language of being humbled and honoured.",
      "There is nothing wrong with gratitude. The joke is about the performance around it. Organisations can end up writing messages that sound spontaneous while being carefully drafted, approved, scheduled and distributed internally.",
      "Communication becomes more interesting when it sounds like people actually speak. A little honesty can go a long way. Sometimes saying thank you without the ceremonial language feels more genuine than another carefully polished expression of humility."
    ],
    category: "Communications",
    tags: ["comms", "social media", "nonprofits", "branding"],
    image: "/memes/35.png"
  },
  {
    id: 36,
    title: "Fresh Perspective Required",
    subheading: "Ten years of experience can suddenly become less valuable than being new.",
    body: [
      "Organisations often ask for fresh perspectives. That can be healthy. New people bring different experiences, questions and ways of seeing familiar problems.",
      "But the language can also become a way of undervaluing experience. Someone with a decade of work may be treated as less exciting simply because they have been around for a while.",
      "The strongest teams usually need both. Fresh thinking can challenge old habits, while experience can help distinguish a genuinely new idea from something the sector tried five years ago. Fresh should not mean inexperienced, and experienced should not mean stuck."
    ],
    category: "Work Culture",
    tags: ["careers", "experience", "workplace", "leadership"],
    image: "/memes/36.png"
  },
  {
    id: 37,
    title: "Where the CSR Money Goes",
    subheading: "The geography of philanthropy can reveal a lot about power.",
    body: [
      "The meme points to an uneven pattern in CSR funding, where organisations based in large cities can have easier access to corporate networks and funding opportunities.",
      "Grassroots organisations working in Bihar, Nagaland, Manipur, Arunachal and other regions may be closer to the communities being served while remaining further away from decision-makers controlling funds.",
      "Location should not determine whose work is considered credible. Funding systems need ways to recognise local knowledge and organisations that are rooted in the places where problems are experienced, not just the places where meetings happen."
    ],
    category: "Funding",
    tags: ["CSR", "grassroots", "funding", "regional inequality"],
    image: "/memes/37.png"
  },
  {
    id: 38,
    title: "Let's Discuss the Partnership First",
    subheading: "The people need help. The ecosystem needs another meeting.",
    body: [
      "Collaboration is everywhere in the social sector. Organisations talk about partnerships, ecosystems, collective action and methods of working together. Sometimes that coordination is necessary.",
      "But collaboration can become an end in itself. People facing an immediate problem may need someone to act while organisations spend weeks discussing roles, frameworks and partnership models.",
      "Good collaboration should make action easier, not delay it. The question is simple: are we coordinating because it helps the people involved, or because coordination itself has become part of how the sector demonstrates seriousness?"
    ],
    category: "Sector Culture",
    tags: ["collaboration", "partnerships", "ecosystems", "NGOs"],
    image: "/memes/38.png"
  },
  {
    id: 39,
    title: "When Jargon Meets a Donor",
    subheading: "Sometimes the problem is not the work. It is that nobody understands the explanation.",
    body: [
      "Development work has its own vocabulary. Theory of change, systems strengthening, capacity building and stakeholder engagement can all describe real ideas. But too much jargon can make those ideas harder to understand.",
      "A donor who does not understand the language is not necessarily the problem. Sometimes the organisation has simply failed to explain its work clearly.",
      "Clarity is not the enemy of complexity. In fact, difficult work often deserves simpler language. If we can explain an idea to the people affected by it, our colleagues and our funders, we probably understand it better ourselves."
    ],
    category: "Sector Language",
    tags: ["jargon", "funders", "communication", "clarity"],
    image: "/memes/39.png"
  },
  {
    id: 40,
    title: "Teacher, Please Report for Election Duty",
    subheading: "The school can wait. The election machinery cannot.",
    body: [
      "Government school teachers are often asked to perform duties beyond teaching. Election work is one such responsibility, placing additional demands on people whose primary job is already central to public education.",
      "The meme captures the absurdity from the teacher's perspective. Students are waiting in the classroom while the system needs staff elsewhere.",
      "Elections are essential to democracy, but so is the everyday work of public institutions. When the same people are repeatedly pulled away from their core responsibilities, we should ask what that means for the services citizens rely on."
    ],
    category: "Public Systems",
    tags: ["teachers", "elections", "education", "government"],
    image: "/memes/40.png"
  },
  {
    id: 41,
    title: "When NGOs Become Implementers",
    subheading: "Someone else sets the path. NGOs are asked to walk it and call it innovation.",
    body: [
      "The social sector often speaks about innovation and local solutions. Yet many organisations depend on funding structures that define the problem, the model, the targets and the reporting requirements before implementation begins.",
      "That can reduce organisations to implementers of decisions made elsewhere. People with limited field experience may end up designing standardised approaches for highly different contexts.",
      "Implementation is not just execution. It produces knowledge about what works, what fails and why. Strong development systems should value that knowledge instead of treating local organisations as delivery partners with little influence over direction."
    ],
    category: "Funding",
    tags: ["funders", "implementation", "NGOs", "power"],
    image: "/memes/41.png"
  },
  {
    id: 42,
    title: "When Accountability Feels Threatening",
    subheading: "What happens when rules make discrimination harder?",
    body: [
      "The meme imagines privileged students reacting to stronger protections against caste-based discrimination. The humour comes from reversing the usual perspective and asking what accountability feels like to someone accustomed to power.",
      "Equity measures are often described as unfair by people who have never had to navigate the inequality those measures address. The discomfort can become evidence that the rules are doing something meaningful.",
      "Fairness is not simply treating everyone the same. Sometimes it requires changing systems that have produced unequal outcomes for a long time. Accountability can feel inconvenient precisely because it changes who gets to act without consequences."
    ],
    category: "Rights & Justice",
    tags: ["caste", "equity", "education", "accountability"],
    image: "/memes/42.png"
  },
  {
    id: 43,
    title: "Authentic Stories, Carefully Edited",
    subheading: "We want the complexity of the ground, but please remove anything complicated.",
    body: [
      "Nonprofit communications often ask for authentic stories from the ground. But authenticity can become selective when political and social complexity is edited out to make a story easier to publish.",
      "Real communities are rarely neutral spaces. People have different interests, histories, identities and relationships with institutions. Removing those tensions can make a story cleaner while making it less truthful.",
      "Good storytelling does not need to reproduce every detail. But it should avoid turning people into simple characters in someone else's impact narrative. If a story feels too neat, it may be worth asking what was left outside the frame."
    ],
    category: "Communications",
    tags: ["storytelling", "comms", "communities", "impact"],
    image: "/memes/43.png"
  },
  {
    id: 44,
    title: "Dignity Is Not Optional",
    subheading: "Rights can become fragile when power decides whose individuality matters.",
    body: [
      "The meme places a transgender person between the protection of law and the pressure of an authoritarian system. It asks what happens to individual dignity when political power becomes hostile to difference.",
      "Legal recognition matters because rights are not secure simply because society says it values inclusion. Institutions determine whether people can live with safety, dignity and equal protection.",
      "For the social sector, this is a reminder that rights work cannot be reduced to awareness campaigns. It also requires attention to laws, institutions and the distribution of power that determines whose identity is respected."
    ],
    category: "Rights & Justice",
    tags: ["trans rights", "dignity", "law", "rights"],
    image: "/memes/44.png"
  },
  {
    id: 45,
    title: "Two Indias, Two Standards",
    subheading: "Who gets to receive foreign funding can reveal a lot about power.",
    body: [
      "Civil society organisations working on rights, climate, gender, inequality and media literacy can face intense scrutiny over foreign funding. Restrictions can reshape or end the work of organisations that depend on those resources.",
      "The meme contrasts that environment with organisations whose politics may appear closer to those in power. The comparison raises a basic question about consistency.",
      "Funding rules should have clear standards that apply fairly. In a democracy, the ability to receive resources should not quietly depend on whether an organisation's work is politically comfortable."
    ],
    category: "Rights & Justice",
    tags: ["civil society", "foreign funding", "democracy", "rights"],
    image: "/memes/45.png"
  },
  {
    id: 46,
    title: "Funding Safety After Creating the Risk",
    subheading: "The strange business of solving harms after helping create them.",
    body: [
      "AI safety funding can support important work on protecting children and young people. Research, safeguards and public-interest technology all need resources.",
      "But the meme asks a harder question: what happens when the same technological systems creating new risks are being developed at enormous speed, while safety work is funded later as a response?",
      "Prevention matters. Safety should not only arrive after harm becomes visible. The social sector has seen this pattern before: create the intervention first, then fund the safeguards. Sometimes the first investment should be understanding the risks."
    ],
    category: "Technology & Society",
    tags: ["AI", "safety", "children", "philanthropy"],
    image: "/memes/46.png"
  },
  {
    id: 47,
    title: "Handle Jokes With Caution",
    subheading: "Not every joke is harmless just because people laughed.",
    body: [
      "Humour can challenge power, expose hypocrisy and make difficult ideas easier to discuss. But jokes can also normalise prejudice when they repeatedly target people because of gender, caste, disability, sexuality, region or identity.",
      "The problem is not that every uncomfortable joke should disappear. Context matters. Power matters. Who is being targeted matters. So does what becomes normal when the same stereotype is repeated.",
      "The meme asks us to treat humour with a little more care. Laughing is not always neutral. Sometimes a joke teaches us what to ignore, who to mock and whose dignity can be treated as entertainment."
    ],
    category: "Culture & Society",
    tags: ["humour", "prejudice", "misogyny", "discrimination"],
    image: "/memes/47.png"
  },
  {
    id: 48,
    title: "The Nonprofit Ecosystem, From Outside",
    subheading: "Everyone is collaborating with everyone. Somewhere, the grassroots NGO is still waiting.",
    body: [
      "The nonprofit sector has built a rich vocabulary around ecosystems and partnerships. There are donors, consultants, advisory boards, family philanthropies, corporate partners and large intermediary organisations.",
      "These relationships can bring resources and expertise. But the ecosystem can also become a hierarchy, where organisations closest to communities have the least power over funding and decisions.",
      "A healthy ecosystem should not only connect institutions with one another. It should shift power towards the people closest to the problem. Otherwise, collaboration risks becoming another word for a well-connected network."
    ],
    category: "Funding",
    tags: ["ecosystems", "partnerships", "grassroots", "power"],
    image: "/memes/48.png"
  },
  {
    id: 49,
    title: "AI Needs Water Too",
    subheading: "The same companies funding digital access can also consume huge amounts of natural resources.",
    body: [
      "Technology is often presented as a solution to social problems. Companies fund programmes to make AI accessible, support communities and expand digital opportunity. Those investments can be valuable.",
      "But technology also has a physical footprint. Data centres require enormous infrastructure and resources, including water for cooling in some locations. Communities living near that infrastructure can experience its costs.",
      "The contradiction is worth examining. A company can support social good in one place while creating environmental pressure elsewhere. Impact should include the full system around a technology, not just the programme attached to its funding."
    ],
    category: "Technology & Environment",
    tags: ["AI", "water", "data centres", "CSR"],
    image: "/memes/49.png"
  },
  {
    id: 50,
    title: "Community Voices, But Only the Right Ones",
    subheading: "We love community voices. Opinions are slightly harder to manage.",
    body: [
      "Development proposals often promise community participation. The language sounds good because listening to people affected by a programme should be basic practice.",
      "The harder part begins when communities disagree with the organisation, challenge the plan or demand something outside the proposal. Participation becomes meaningful only when those opinions can actually influence decisions.",
      "A community voice is not a decorative quote in a proposal. It is a source of power that can change what an organisation does. If we only want voices that confirm our plans, we are not really listening. We are collecting approval."
    ],
    category: "Community & Participation",
    tags: ["community", "participation", "power", "funding"],
    image: "/memes/50.png"
  }
]