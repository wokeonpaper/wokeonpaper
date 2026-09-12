import pathlib, re

p = pathlib.Path("data/stories.ts")
t = p.read_text()

# Add new fields to the Story type
t = t.replace(
    "  cover: string\n  sections: StorySection[]\n}",
    "  cover: string\n  images?: string[]\n  author: string\n  authorHandle: string\n  readTime: string\n  sections: StorySection[]\n}"
)

# Inject per-story metadata right after each cover line
inserts = {
  '"/wokeonpaper/stories/story-1-cover.png",':
    '"/wokeonpaper/stories/story-1-cover.png",\n    images: ["/wokeonpaper/stories/story-1-support.png"],\n    author: "Social Sector Majdoor Union",\n    authorHandle: "wokeonpaper",\n    readTime: "6 min read",',
  '"/wokeonpaper/stories/story-2-cover.png",':
    '"/wokeonpaper/stories/story-2-cover.png",\n    images: ["/wokeonpaper/stories/story-2-support.png"],\n    author: "Social Sector Majdoor Union",\n    authorHandle: "wokeonpaper",\n    readTime: "7 min read",',
  '"/wokeonpaper/stories/story-3-cover.png",':
    '"/wokeonpaper/stories/story-3-cover.png",\n    images: ["/wokeonpaper/stories/story-3-support-a.png", "/wokeonpaper/stories/story-3-support-b.png", "/wokeonpaper/stories/story-3-support-c.png"],\n    author: "Social Sector Majdoor Union",\n    authorHandle: "wokeonpaper",\n    readTime: "6 min read",',
}
for k, v in inserts.items():
    if k in t and v not in t:
        t = t.replace(k, v, 1)

p.write_text(t)
print("stories.ts enriched")
