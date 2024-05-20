import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import {SecondSection} from '@/components/Section'

export default function Home() {
  return (
    <>
      <Hero />
      <SecondSection />
      {/* <PrimaryFeatures /> */}
      {/* <CallToAction /> */}
      {/* <Pricing /> */}
      <Faqs />
    </>
  )
}
