import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';

const AdhocEspai = props => (
  <div>
    <Head>
      <title>Els nostres espais - Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>
          Els nostres espais | Adhoc Cultura
        </li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      <section className='with-padding'>
        <h1 className='align-center uppercase'>Els nostres espais</h1>

        <p>
          Amb seu a Sabadell i Oficines al Figueres i El Port de la Selva
          treballem i oferim als nostres clients entorns per treballar, fer-hi
          presentacions o espais on fusionar gastronomia i cultura.
        </p>
      </section>

      <section className='grid-espais'>
        {props.espais
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
          .map((espai, id) => (
            <div key={id}>
              <Observer
                threshold={1}
                triggerOnce={true}
                render={() => (
                  <figure className='fade-in img-espais'>
                    <img src={espai.img} />
                    <figcaption>
                      <small>{espai.name}</small>
                    </figcaption>
                  </figure>
                )}
              />
              <h2>{espai.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: espai.description }} />
            </div>
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
        .grid-espais {
          background: #292b2c;
          color: #ffffff;
        }
        .grid-espais figure img {
          border-bottom: 4px solid #f5bc42;
        }
        .grid-espais h2,
        .grid-espais p {
          padding: 1em;
        }
        @media screen and (max-width: 414px) {
          .img-espais img {
            margin: 0 auto;
            display: block;
          }
          .img-espais figcaption {
            text-align: center;
          }
        }
        @media screen and (min-width: 768px) {
          .img-espais {
            padding: 1em;
          }
          .grid-espais {
            display: grid !important;
            grid-gap: 0;
            grid-template-columns: repeat(2, 1fr);
            align-items: flex-start;
            margin-bottom: 1em;
          }
          .grid-espais figure,
          .grid-espais figure img {
            transition: all 0.5s ease-in-out;
          }
          .grid-espais figure:hover {
            transform: scale(1.5);
            color: #ffffff;
            padding: 1em;
            background: #292b2c;
            z-index: 3000;
            position: relative;
            cursor: zoom-in;
          }
          .grid-espais {
            background: url('/static/adhoc-bg-espais.png') no-repeat #292b2c;
            background-position: right bottom;
            backgroundsize: contain;
          }
        }
        @media screen and (min-width: 1024px) {
          .grid-espais {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (min-width: 1360px) {
          .grid-espais {
            width: 80rem;
            margin-left: -10%;
          }
          .grid-espais {
            grid-template-columns: repeat(4, 1fr);
          }
          .grid-espais figure:hover {
            transform: scale(2);
          }
        }
      `}</style>
    </section>
  </div>
);

export async function getStaticProps() {
  const res = await fetch(`https://adhocdata.now.sh/espais.json`);
  const espais = await res.json();
  return {
    props: { espais }, // will be passed to the page component as props
  };
}

export default AdhocEspai;
