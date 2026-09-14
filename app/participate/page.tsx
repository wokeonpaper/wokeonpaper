import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import ParticipateForm from "@/app/components/ParticipateForm"

export const metadata = {
  title: "Participate in the Discussion",
  description:
    "Seen a post the social sector needs to see? Tell us about it and we'll consider it for Woke on Paper.",
}

export default function ParticipatePage() {
  return (
    <main>
      <SiteHeader />

      <section className="memes-intro">
        <p className="eyebrow">JOIN THE CONVERSATION</p>
        <h1>Seen something worth sharing?</h1>
        <p className="memes-intro-text">Want to see your post featured on Woke on Paper? Share:</p>
        <ul className="pf-intro-list">
          <li>Your name</li>
          <li>Your pronouns (optional)</li>
          <li>Your social media handle</li>
          <li>Link to the original post</li>
          <li>Text of the post</li>
          <li>Link to your profile photo</li>
          <li>Your confirmation that we can publish this post on the Woke on Paper website</li>
        </ul>
      </section>

      <section className="pf-section">
        <ParticipateForm />
      </section>

      <SiteFooter />
    </main>
  )
}
