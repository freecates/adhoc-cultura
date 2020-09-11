import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';

const NavBarDk = ({ router: { pathname } }) => (
  <div>
    <Navbar color='faded' light expand='md'>
      <span className='align-nav'>
        <Nav navbar>
          <NavItem>
            <Link href='/adhoc-cultura'>
              <a className={pathname === '/adhoc-cultura' ? 'is-active' : ''}>
                Qui som
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/serveis'>
              <a className={pathname === '/serveis' ? 'is-active' : ''}>
                Serveis
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/partners'>
              <a className={pathname === '/partners' ? 'is-active' : ''}>
                Partners
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/els-nostres-espais'>
              <a
                className={
                  pathname === '/els-nostres-espais' ? 'is-active' : ''
                }>
                Espais
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/el-nostre-metode'>
              <a
                className={pathname === '/el-nostre-metode' ? 'is-active' : ''}>
                Mètode
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/treballem-per'>
              <a className={pathname === '/treballem-per' ? 'is-active' : ''}>
                Treballem per
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/blog-index'>
              <a className={pathname === '/blog-index' ? 'is-active' : ''}>
                Blog
              </a>
            </Link>
          </NavItem>
        </Nav>
      </span>
    </Navbar>
    <style jsx>{`
      .align-nav {
        margin: 0 auto;
      }
      a {
        margin: 0px 1em;
        text-decoration: none;
        background: rgb(255, 255, 255);
        color: rgb(35, 31, 32);
        text-transform: uppercase;
        font-weight: 700;
        font-size: small;
        padding: 0.5em;
        transition: all 0.5s ease-in-out;
      }
      a:hover,
      a.is-active {
        background: rgb(35, 31, 32);
        color: rgb(255, 255, 255);
        border-bottom: 4px solid #f5bc42;
      }
    `}</style>
  </div>
);

export default withRouter(NavBarDk);
