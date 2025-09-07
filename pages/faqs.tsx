import Link from "next/link";

export default function FAQsPage() {
  return (
    <div className="font-serif bg-[#fdfbf7] min-h-screen text-[#6a5a4f] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center font-bold text-[#c58b6a] mb-10">Frequently Asked Questions</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#c58b6a]">What should I wear?</h2>
            <p className="text-[#8c8179] mt-2">The dress code is formal garden party — dressy but comfortable!</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#c58b6a]">Are kids welcome?</h2>
            <p className="text-[#8c8179] mt-2">While we love your little ones, this will be an adults-only celebration.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#c58b6a]">Where should I stay?</h2>
            <p className="text-[#8c8179] mt-2">We'll be adding accommodation suggestions soon. Stay tuned!</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-[#c58b6a] underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
