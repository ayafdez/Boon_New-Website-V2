import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="section section-py bg-white border-t border-gray-100">
      <div className="container-xl grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-20">
        <div className="col-span-1">
          <Image
            src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png"
            alt="Boon"
            width={80}
            height={24}
            className="h-6 w-auto mb-8"
          />
          <p className="text-gray-400 text-sm font-body font-medium leading-relaxed">
            Coaching that scales with your people.
          </p>
        </div>
        <div>
          <h5 className="label-text text-boon-charcoal text-[10px] mb-6">
            Solutions
          </h5>
          <div className="flex flex-col gap-4 text-sm font-body font-semibold text-gray-500">
            <Link href="/solutions" className="text-left hover:text-boon-blue">
              Overview
            </Link>
            <Link href="/solutions/scale" className="text-left hover:text-boon-blue">
              Boon SCALE
            </Link>
            <Link href="/solutions/grow" className="text-left hover:text-boon-blue">
              Boon GROW
            </Link>
            <Link href="/solutions/exec" className="text-left hover:text-boon-blue">
              Boon EXEC
            </Link>
            <Link href="/solutions/together" className="text-left hover:text-boon-blue">
              Boon TOGETHER
            </Link>
          </div>
        </div>
        <div>
          <h5 className="label-text text-boon-charcoal text-[10px] mb-6">
            Why Boon
          </h5>
          <div className="flex flex-col gap-4 text-sm font-body font-semibold text-gray-500">
            <Link href="/story" className="text-left hover:text-boon-blue">
              Our Story
            </Link>
            <Link href="/coaches" className="text-left hover:text-boon-blue">
              For Coaches
            </Link>
            <Link href="/individuals" className="text-left hover:text-boon-blue">
              For Individuals
            </Link>
          </div>
        </div>
        <div>
          <h5 className="label-text text-boon-charcoal text-[10px] mb-6">
            Connect
          </h5>
          <div className="flex flex-col gap-4 text-sm font-body font-semibold text-gray-500">
            <a
              href="https://www.linkedin.com/company/boon-health/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-boon-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="container-xl pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm font-body">
          © {new Date().getFullYear()} Boon. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-body text-gray-400">
          <Link href="/privacy" className="hover:text-boon-blue">
            Privacy Policy
          </Link>
          <Link href="/acceptable-use" className="hover:text-boon-blue">
            Acceptable Use Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
