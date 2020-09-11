import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const AdhocPartner = props => (
  <div>
    <Head>
      <title>Partners - Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>Partners | Adhoc Cultura</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      <section className='with-padding'>
        <h1 className='align-center uppercase'>Partners</h1>

        <p>
          Les aliances estratègiques ens permeten idear i desenvolupar projectes
          conjuntament, així com transmetre la tecnologia i la metodologia a la
          vegada que compartim experiències i recursos.
        </p>
      </section>

      <section className='grid-partners'>
        {props.partners
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
          .map((partner, id) => (
            <div className='root' key={id}>
              <Card>
                <Observer
                  threshold={1}
                  triggerOnce={true}
                  render={() => (
                    <CardImg
                      className='fade-in'
                      top
                      width='100%'
                      src={partner.logo}
                      alt={partner.name}
                    />
                  )}
                />
                <CardBody>
                  <CardTitle>
                    <h2>{partner.name}</h2>
                  </CardTitle>
                  <CardText>
                    <p
                      dangerouslySetInnerHTML={{ __html: partner.description }}
                    />
                  </CardText>
                </CardBody>
              </Card>
            </div>
          ))}
      </section>
      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        @media screen and (min-width: 768px) {
          .grid-partners {
            display: grid !important;
            grid-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            align-items: flex-start;
          }
        }
        @media screen and (min-width: 1024px) {
          .grid-partners {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 80px;
          }
        }
        @media screen and (min-width: 1360px) {
          .grid-partners {
            width: 80rem;
            margin-left: -10%;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
          }
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
        .root > :global(div div .fade-in) {
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
      `}</style>
    </section>
  </div>
);

AdhocPartner.getInitialProps = async function() {
  const res = await fetch(`https://adhocdata.now.sh/partners.json`);
  const partners = await res.json();

  console.log(`Partners data fetched. Count: ${partners.length}`);

  return { partners };
};

export default AdhocPartner;
