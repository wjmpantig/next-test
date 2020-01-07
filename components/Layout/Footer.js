import Link from 'next/link';

const Footer = () => (
  <footer>
      <div>
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/vouchers">
        <a>Vouchers</a>
        </Link>
        <a href="/blog">Blog</a>
      </div>
      <div>
        © 2020 Scrambled Eggs Pte Ltd.
      </div>
  </footer>
);

export default Footer;