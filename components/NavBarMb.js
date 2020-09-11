import Link from 'next/link';
import React from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarToggler
            aria-label='Toggler'
            onClick={this.toggleNavbar}
            className='mr-2'
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href='/adhoc-cultura'>
                  <a>Qui som</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/serveis'>
                  <a>Serveis</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/partners'>
                  <a>Partners</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/els-nostres-espais'>
                  <a>Espais</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/el-nostre-metode'>
                  <a>Mètode</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/treballem-per'>
                  <a>Treballem per</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='/blog-index'>
                  <a>Blogr</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>{`
          .align-nav {
            text-align: center;
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
          a:hover {
            background: rgb(35, 31, 32);
            color: rgb(255, 255, 255);
          }
        `}</style>
      </div>
    );
  }
}
