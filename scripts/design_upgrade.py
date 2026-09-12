import pathlib, re

p = pathlib.Path("data/stories.ts")
t = p.read_text()

# 1. Extend the StorySection type
t = t.replace(
    "export type StorySection = {\n  heading: string\n  paragraphs: string[]\n}",
    "export type StorySection = {\n  heading: string\n  paragraphs: string[]\n  quote?: string\n  quoteAttribution?: string\n  figure?: string\n  figureCaption?: string\n}"
)

def add_after_heading(text, heading, insert):
    # insert extra field(s) right after the heading line of a section
    marker = f'heading: "{heading}",'
    i = text.find(marker)
    if i == -1:
        print(f"  ! heading not found: {heading}")
        return text
    j = i + len(marker)
    return text[:j] + insert + text[j:]

# ---- Pull quotes + figures per story ----
edits = [
    # Academic exploitation
    ("A Captive Market",
     '\n        quote: "They are organisms that take something without giving anything back.",\n        quoteAttribution: "Alexander Thomas, mathematician and co-author of \'Against Parasite Publishers\'",'),
    ("Who Gets Locked Out",
     '\n        figure: "/wokeonpaper/stories/academic-journals.png",\n        figureCaption: "The prestige journals at the centre of a multi-billion-dollar publishing economy.",'),
    # Annual report
    ("Not Accountable to the Community",
     '\n        quote: "They may be consulted. They may be surveyed. They may be photographed. But they rarely get the power to reject the NGO\'s version of success.",'),
    ("Why It Reads So Boring",
     '\n        quote: "Most NGO annual reports read less like public accountability and more like donor-facing institutional storytelling. They were never made for you.",'),
    # FCRA
    ("Stifling the Grassroots",
     '\n        quote: "It is smaller grassroots organisations that rely on re-granted money. They lack the wherewithal to access international donors directly.",\n        quoteAttribution: "Ingrid Srinath, Director, CSIP",'),
    # NCERT
    ("Science vs Ideology",
     '\n        quote: "Millions of students won\'t learn Darwin\'s theory unless they opt for biology in Class 11 or 12.",\n        quoteAttribution: "Pratima Mondal, MP",'),
    ("Whitewashing and Silencing Dissent",
     '\n        quote: "The government is assaulting the ethos of India by poisoning the school curriculum.",\n        quoteAttribution: "S. Irfan Habib, historian",'),
    # Good/Bad NGO narratives
    ("The \\"Good NGO\\" vs \\"Bad NGO\\" Divide",
     '\n        figure: "/wokeonpaper/stories/narratives-support.png",\n        figureCaption: "How the same work gets read as \\"helping\\" or \\"political\\" depending on who it serves.",'),
    # DBA
    ("What Funders Track \u2014 and Don't",
     '\n        figure: "/wokeonpaper/stories/dba-support.png",\n        figureCaption: "Funders vary widely on whether they track the diversity of their grantee portfolios. Source: Bridgespan Group.",'),
    # Paid less
    ("The Gendered Cycle of Power and Pay",
     '\n        quote: "Men hold the power. Women do the work. And the work stays undervalued.",'),
]

for heading, insert in edits:
    t = add_after_heading(t, heading, insert)

p.write_text(t)
print("Design fields added.")
