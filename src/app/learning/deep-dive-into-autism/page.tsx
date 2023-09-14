import { Metadata } from "next"
import AutismDeepDiveHero from "./hero"
import DeepDiveBody from "./body"

export const metadata: Metadata = {
  title: 'An Autism Crash Course in 5 minutes (2023) - Autinerary',
  description: "Autinerary's deep dive into Autism (updated for 2023): the evolution of Autism, how common it is today, its characteristics, what causes it, social and economic impacts, and more!"
}

export default function AutismDeepDive() {
  return (
    <section>
      <AutismDeepDiveHero />
      <DeepDiveBody />
    </section>
  )
}