import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/vouchers">
      <a>Vouchers</a>
    </Link>
    <a href="/blog">Blog</a>
  </div>
);

export default Header;
