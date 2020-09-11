import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';
import GlobalHead from './GobalHead';

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = () => (
  <div>
    <GlobalHead />
    <header>
      <div className='bg-header' />
    </header>
    <style jsx>{`
      header {
        height: 100%;
        widht: 100%;
      }
      .bg-header {
        margin: 0 auto;
      }
      @media screen and (min-width: 320px) {
        .bg-header {
          background: url('/static/bg-adhoc-cultura-320.jpg');
          padding: 0.25em;
          height: 178px;
          width: 320px;
        }
      }
      @media screen and (min-width: 768px) {
        .bg-header {
          background: url('/static/bg-adhoc-cultura-768.jpg');
          padding: 0.5em;
          height: 425px;
          width: 768px;
        }
      }
      @media screen and (min-width: 1024px) {
        .bg-header {
          background: url('/static/bg-adhoc-cultura-1024.jpg');
          padding: 0.5em;
          height: 574px;
          width: 1034px;
        }
      }
    `}</style>
  </div>
);

export default Header;
