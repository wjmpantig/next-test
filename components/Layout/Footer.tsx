import React from 'react';
import Link from 'next/link';

const Footer:React.FC = () => (
  <footer>
      <h3>footer</h3>
      <ul>
        <li>
            <Link href="/">
            <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/vouchers">
            <a>Vouchers</a>
            </Link>
        </li>
        <li>
            <a href="/blog">Blog</a>
        </li>
      </ul>
      <div>
        © 2020 Company name
      </div>
  </footer>
);

export default Footer;
