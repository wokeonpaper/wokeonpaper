import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"
import FrustrationCardApp from "./FrustrationCard"

export const metadata = {
  title: "The Frustration Card",
  description:
    "How frustrated are you with the nonprofit sector? Answer 10 brutally honest questions and find out.",
}

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <FrustrationCardApp />
      <SiteFooter />
    </main>
  )
}
