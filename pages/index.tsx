import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Custom SVGs extracted/styled to match invitation
const PlaneSVG = () => (
  <img
    src="airplane.png"
    alt="Airplane Icon"
    className="w-16 h-16 object-contain"
  />
);

const OrnamentSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="w-12 h-12 text-[#c58b6a]"
    fill="currentColor"
  >
    <circle cx="100" cy="100" r="10" />
  </svg>
);

import Link from "next/link";

export default function WeddingWebsite() {
  const [rsvp, setRsvp] = useState("");

  return (
    <div className="font-serif bg-[#fdfbf7] min-h-screen text-[#6a5a4f]">
      <section className="relative text-center py-20 overflow-hidden">
        <img
          src="map.png"
          alt="World map background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-[#c58b6a] tracking-wide"
          >
            Ian & Lars Trygve
          </motion.h1>
          <p className="text-lg text-[#8c8179] mt-4">
            1 & 2 September 2026 • Edinburgh, Scotland
          </p>
        </div>
        <div className="absolute inset-0 bg-white opacity-5 z-0"></div>
      </section>

      <div className="flex justify-center py-6">
        <PlaneSVG />
      </div>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#c58b6a]">Our Story</h2>
        <p className="text-[#8c8179] leading-relaxed text-center">
          We met five years ago at a coffee shop, and since then our journey has
          been filled with laughter, adventures, and love. We can't wait to
          celebrate this next chapter with you!
        </p>
      </section>

      <section className="bg-[#f8f4f1] py-12">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#c58b6a]">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6">
          <Card className="border border-[#e2d6cf] shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-[#8c8179]">Ceremony</h3>
              <p className="text-[#a59b92]">St. Helena Chapel • 3:00 PM</p>
            </CardContent>
          </Card>
          <Card className="border border-[#e2d6cf] shadow-md">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-[#8c8179]">Reception</h3>
              <p className="text-[#a59b92]">Silver Oak Winery • 6:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-lg mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#c58b6a]">RSVP</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={rsvp}
          onChange={(e) => setRsvp(e.target.value)}
          className="w-full p-3 border border-[#e2d6cf] rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#c58b6a]"
        />
        <Button className="w-full bg-[#c58b6a] text-white hover:bg-[#a76f52]">Submit RSVP</Button>
      </section>

      <footer className="text-center py-6 text-[#8c8179] text-sm">
        <div className="flex flex-col items-center justify-center mb-2 space-y-2">
          <OrnamentSVG />
          <div className="w-10 h-10 border border-[#c58b6a] flex items-center justify-center rounded-full text-[#c58b6a] font-bold">
            I & LT
          </div>
          <p className="text-[#8c8179] text-sm mt-2">September 1 & 2, 2026 • Edinburgh, Scotland</p>
        </div>
        Made with ❤️ by Ian & Lars
        <div className="mt-4">
          <Link href="/faqs" className="text-[#c58b6a] underline">View FAQs</Link>
        </div>
      </footer>
    </div>
  );
}
