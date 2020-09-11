import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';

const AdhocService = props => (
  <div>
    <Head>
      <title>Serveis - Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>Serveis | Adhoc Cultura</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      <h1 className='align-center uppercase'>Serveis</h1>

      <section className='grid-serveis'>
        {props.services
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
          .map((service, id) => (
            <Observer
              key={id}
              threshold={1}
              triggerOnce={true}
              render={() => (
                <figure className='fade-in img-serveis'>
                  <img src={service.img} />
                  <figcaption>
                    <small>{service.name}</small>
                  </figcaption>
                </figure>
              )}
            />
          ))}
      </section>

      <section className='with-padding'>
        <p>
          Gràcies als nostres parthers podem oferir un ampli ventall de serveis
          i adaptar-nos a les necessitats dels nostres clients i col·laboradors
          per a poder{' '}
          <strong>
            desenvolupar projectes per promocionar la cultura i apropar-la a la
            societat
          </strong>
        </p>

        <ul>
          <li>Auditoria i consultoria General</li>
          <li>Serveis d’educació per institucions culturals</li>
          <li>
            Producció, creació gestió i comunicació d’esdeveniments culturals
          </li>
          <li>Programació, comissariat i muntatge d’exposicions</li>
          <li>
            Estudi, disseny i millora instal·lacions i materials audiovisuals
          </li>
        </ul>
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
        .grid-serveis {
          background: #292b2c;
          color: #ffffff;
        }
        .grid-serveis figure img {
          border-bottom: 4px solid #f5bc42;
        }
        @media screen and (max-width: 414px) {
          .img-serveis img {
            margin: 0 auto;
            display: block;
          }
          .img-serveis figcaption {
            text-align: center;
          }
        }
        @media screen and (min-width: 768px) {
          .img-serveis {
            padding: 1em;
          }
          .grid-serveis {
            display: grid !important;
            grid-gap: 0;
            grid-template-columns: repeat(2, 1fr);
            align-items: end;
            margin-bottom: 1em;
          }
          .grid-serveis figure,
          .grid-serveis figure img {
            transition: all 0.5s ease-in-out;
          }
          .grid-serveis figure:hover {
            transform: scale(1.5);
            color: #ffffff;
            padding: 1em;
            background: #292b2c;
            z-index: 3000;
            position: relative;
            cursor: zoom-in;
          }
        }
        @media screen and (min-width: 1024px) {
          .grid-serveis {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (min-width: 1360px) {
          .grid-serveis {
            width: 80rem;
            margin-left: -10%;
          }
        }
      `}</style>
    </section>
  </div>
);

AdhocService.getInitialProps = async function() {
  const res = await fetch(`https://adhocdata.now.sh/serveis.json`);
  const services = await res.json();

  console.log(`Services data fetched. Count: ${services.length}`);

  return { services };
};

export default AdhocService;
