import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-white min-h-[80vh] flex items-center">
      <section className="w-full pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#466FF6] text-[10px] tracking-widest font-black uppercase mb-6">
            404
          </p>
          <h1 className="text-6xl md:text-[92px] font-black text-[#2E353D] leading-[0.85] tracking-tighter mb-8">
            Page not found.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-16">
            The page you are looking for does not exist or has been moved. Here are some helpful links to get you back on track.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/"
              className="bg-gray-100 text-[#2E353D] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-200 transition-all"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="bg-gray-100 text-[#2E353D] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-200 transition-all"
            >
              Solutions
            </Link>
            <Link
              href="/learn/case-studies"
              className="bg-gray-100 text-[#2E353D] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-200 transition-all"
            >
              Case Studies
            </Link>
          </div>

          <Link
            href="/demo"
            className="inline-block bg-[#466FF6] text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
