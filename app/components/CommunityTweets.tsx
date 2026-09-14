"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Post = { id: number; alt: string }

export default function CommunityTweets({ posts }: { posts: Post[] }) {
  const [openId, setOpenId] = useState<number | null>(null)

  useEffect(() => {
    if (openId === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [openId])

  const openPost = posts.find((p) => p.id === openId)

  return (
    <>
      <div className="featured-grid">
        {posts.map((post) => (
          <button
            key={post.id}
            type="button"
            className="featured-card tweet-card"
            onClick={() => setOpenId(post.id)}
            aria-label={`Read full post: ${post.alt}`}
          >
            <div className="featured-image">
              <Image
                src={`/wop/tweets/tweet-${post.id}.png`}
                alt={post.alt}
                width={1080}
                height={1350}
              />
            </div>
          </button>
        ))}
      </div>

      {openPost && (
        <div
          className="tweet-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={openPost.alt}
          onClick={() => setOpenId(null)}
        >
          <button
            type="button"
            className="tweet-lightbox-close"
            aria-label="Close"
            onClick={() => setOpenId(null)}
          >
            {"✕"}
          </button>
          <img
            src={`/wop/tweets/tweet-${openPost.id}.png`}
            alt={openPost.alt}
            className="tweet-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
