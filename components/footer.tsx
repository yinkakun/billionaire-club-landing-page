import Container from '@components/container';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <footer className="">
    <Container>
      <nav className="flex items-center justify-between py-5 border-t border-gray-500 ">
        <div className="flex items-center gap-12">
          <Link href="/">
            <a className="transition-opacity hover:opacity-90">
              <Image src="/images/logo.png" alt="Logo" width={178} height={44} />
            </a>
          </Link>

          <Link href="/">
            <a className="text-gray-500 transition-colors duration-300 hover:text-white">
              Terms of Service
            </a>
          </Link>

          <Link href="/">
            <a className="text-gray-500 transition-colors duration-300 hover:text-white">
              Privacy Policy
            </a>
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image src="/images/twitter-icon.svg" alt="" width={24} height={24} />
          </a>

          <a
            href="https://twitter.com"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image src="/images/discord-icon.svg" alt="" width={24} height={24} />
          </a>

          <a
            href="https://twitter.com"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image src="/images/instagram-icon.svg" alt="" width={24} height={24} />
          </a>
        </div>
      </nav>
    </Container>
  </footer>
);

export default Footer;
