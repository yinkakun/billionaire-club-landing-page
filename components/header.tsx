import Link from 'next/link';
import Container from '@components/container';
import Image from 'next/image';

const NAV_LINKS = [
  {
    href: `/`,
    label: `Home`,
  },
  {
    href: `/`,
    label: `Features`,
  },
  {
    href: `/`,
    label: `Roadmap`,
  },
  {
    href: `/`,
    label: `Team`,
  },
];

const Header = () => (
  <header className="pt-6 pb-3 text-white bg-black font-poppins">
    <Container>
      <nav className="flex items-center justify-between text-sm uppercase ">
        <Link href="/">
          <a className="transition-opacity hover:opacity-75">
            <Image src="/images/logo.png" alt="Logo" width={230} height={57} />
          </a>
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            return (
              <Link href={href} key={label}>
                <a className="flex items-center justify-center text-lg font-normal capitalize transition-all duration-300 hover:opacity-80">
                  {label}
                </a>
              </Link>
            );
          })}

          <Link href="/signup">
            <a className="flex items-center justify-center px-3 py-3 text-sm font-bold capitalize transition-all duration-300 bg-gradient-to-r from-pinkish-purple via-purplish-blue to-violet-blue hover:opacity-80">
              Join Our Discord
            </a>
          </Link>
        </div>
      </nav>
    </Container>
  </header>
);

export default Header;
