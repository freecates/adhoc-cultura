import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';

const AdhocClient = props => (
  <div>
    <Head>
      <title>Treballem per - Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>
          Treballem per | Adhoc Cultura
        </li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      <h1 className='align-center uppercase'>Treballem per</h1>

      <section className='grid-clients'>
        {props.clients
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
          .map((client, id) => (
            <Observer
              key={id}
              threshold={1}
              triggerOnce={true}
              render={() => (
                <figure className='fade-in img-clients'>
                  <img src={client.logo} />
                  <figcaption>
                    <small>{client.name}</small>
                  </figcaption>
                </figure>
              )}
            />
          ))}
      </section>

      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        .align-center {
          text-align: center;
        }
        .uppercase {
          text-transform: uppercase;
        }
        strong {
          font-weight: 500;
        }
        strong.bold {
          font-weight: 700;
        }
        .yellow-central-projectes {
          color: #292b2c;
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
        .img-clients img {
          margin: 0 auto;
          display: block;
        }
        .img-clients figcaption {
          text-align: center;
        }
        .grid-clients figure img {
          border-bottom: 4px solid #f5bc42;
        }
        @media screen and (min-width: 768px) {
          .img-clients {
            padding: 1em;
          }
          .grid-clients {
            display: grid !important;
            grid-gap: 0;
            grid-template-columns: repeat(2, 1fr);
            align-items: end;
            margin-bottom: 1em;
          }
          .grid-clients figure,
          .grid-clients figure img {
            transition: all 0.5s ease-in-out;
          }
          .grid-clients figure:hover {
            transform: scale(1.5);
            color: #ffffff;
            padding: 1em;
            background: #292b2c;
            z-index: 3000;
            position: relative;
            cursor: zoom-in;
          }
          .grid-clients figure img:hover {
            border-bottom: 4px solid #f5bc42;
          }
        }
        @media screen and (min-width: 1024px) {
          .grid-clients {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (min-width: 1360px) {
          .grid-clients {
            grid-template-columns: repeat(4, 1fr);
            width: 80rem;
            margin-left: -10%;
          }
        }
      `}</style>
    </section>
  </div>
);

AdhocClient.getInitialProps = async function() {
  const res = await fetch(`https://adhocdata.now.sh/clients.json`);
  const clients = await res.json();

  console.log(`Services data fetched. Count: ${clients.length}`);

  return { clients };
};

export default AdhocClient;
