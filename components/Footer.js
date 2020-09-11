import Link from 'next/link';
import React from 'react';

const linkStyle = {
  marginLeft: 15,
};

const footerStyle = {
  margin: '20px auto',
  textAlign: 'center',
};

const Footer = () => (
  <footer style={footerStyle}>
    <section>
      <p className='blue-congress'>
        Adhoc Cultura &#169; 2018
        <Link href='/contacte'>
          <a style={linkStyle}>Contacte</a>
        </Link>
        <Link href='/avis-legal'>
          <a style={linkStyle}>Avís legal</a>
        </Link>
        <Link href='/politica-de-cookies'>
          <a style={linkStyle}>Política de Cookies</a>
        </Link>
      </p>

      <style jsx>{`
        .purple {
          color: #3a2092;
        }
        a {
          color: #ffffff;
        }
        a:hover {
          text-decoration: underline;
        }
        .blue-congress {
          background: #292b2c;
          color: #dcdcdc;
          border-bottom: 4px solid #f5bc42;
        }
        section {
          background: #ffffff;
        }
      `}</style>
    </section>
  </footer>
);

export default Footer;
