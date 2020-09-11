import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';
import { Jumbotron } from 'reactstrap';

const GoogleMapReact = dynamic(import('google-map-react'), {
  loading: () => <p>carregant ...</p>,
});

const markerStyle = {
  backgroundColor: '#ffffff',
  width: '50px',
  textAlign: 'center',
  padding: '.5em',
  position: 'relative',
  right: 25,
  bottom: 25,
  borderRadius: '50%',
};

const MarkerComponent = ({ text }) => <div style={markerStyle}>{text}</div>;

const ZOOM = 16;

export default () => (
  <div>
    <Head>
      <title>
        La cultura com a motor econòmic i social. Desenvolupem projectes per
        promocionar la cultura i apropar-la a la societat - Adhoc Cultura
      </title>
    </Head>
    <div>
      <section className='call-to-action'>
        <div className='root'>
          <Jumbotron className='invert'>
            <h1>
              <strong>
                La cultura com a{' '}
                <Link href='/adhoc-cultura'>
                  <a className='invert-link'>motor</a>
                </Link>{' '}
                econòmic i social
              </strong>
            </h1>
            <h2>
              Desenvolupem projectes per{' '}
              <Link href='/serveis'>
                <a className='invert-link'>promocionar</a>
              </Link>{' '}
              la cultura i apropar-la a la{' '}
              <Link href='/treballem-per'>
                <a className='invert-link'>societat</a>
              </Link>
            </h2>
            <p>
              <Link href='mailto:info@adhoc-cultura.com'>
                <a>info@adhoc-cultura.com</a>
              </Link>
            </p>
          </Jumbotron>
        </div>
      </section>
      <Observer
        threshold={1}
        triggerOnce={true}
        render={() => (
          <section className='fade-in'>
            <div style={{ width: '100%', height: '500px' }}>
              <GoogleMapReact
                center={[Number(41.5509883), Number(2.1055524)]}
                zoom={ZOOM}>
                <MarkerComponent
                  lat={41.5509883}
                  lng={2.1055524}
                  text={
                    <Link href={'/contacte'}>
                      <a title={'Adhoc Cultura'}>
                        <span>
                          <img
                            src={'/static/32/adhoc-cultura-32.png'}
                            alt='logo adhoc cultura'
                          />
                        </span>
                      </a>
                    </Link>
                  }
                />
              </GoogleMapReact>
            </div>
          </section>
        )}
      />
      <style jsx>{`
        .root > :global(.invert) {
          background-color: #231f20;
          color: #ffffff;
        }
        .root a {
          color: #ffffff;
        }
        .root a.invert-link {
          text-decoration: none;
          background: #ffffff;
          color: #231f20;
        }
        .root a.invert-link:hover {
          background: #231f20;
          color: #ffffff;
        }
        .call-to-action > :global(.invert) {
          background-color: #000000;
          color: #ffffff;
        }
        .fade-in {
          animation-name: fadeIn;
          animation-duration: 1.3s;
          animation-timing-function: cubic-bezier(0, 0, 0.4, 1);
          animation-fill-mode: forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .call-to-action p,
        .call-to-action h1,
        .congress-data h1,
        .congress-data p,
        .congress-data td,
        .congress-data ul {
          line-height: 1.2;
        }
        .call-to-action {
          text-align: center;
          margin: 0 auto;
        }
        strong {
          font-weight: 500;
        }
        strong.bold {
          font-weight: 700;
        }
        .yellow-central-projectes,
        .btn-outline-success {
          color: #323232;
        }
        .btn-outline-success {
          border-color: #323232;
        }
        .btn-outline-success:hover {
          background-color: #323232;
          color: #ffffff;
        }
        .dark-color {
          color: #1d1d1b;
        }
        .bg-yellow-central-projectes {
          color: #ffffff;
          background: #323232 !important;
        }
        .align-center {
          text-align: center;
        }
        .uppercase {
          text-transform: uppercase;
        }
        .dont-break-out {
          overflow-wrap: break-word;
          word-wrap: break-word;
          -ms-hyphens: auto;
          -moz-hyphens: auto;
          -webkit-hyphens: auto;
          hyphens: auto;
        }
        figure {
          margin-bottom: 1.5em;
        }
        @media screen and (max-width: 768px) {
          .align-right img {
            margin: 0 auto;
            display: block;
          }
          .align-right figcaption {
            text-align: center;
          }
        }
        @media screen and (min-width: 1024px) {
          .align-right {
            float: right;
            padding-left: 1em;
          }
          .clear {
            clear: both;
          }
        }
      `}</style>
    </div>
  </div>
);
