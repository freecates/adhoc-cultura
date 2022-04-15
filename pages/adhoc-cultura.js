import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';
import { Jumbotron } from 'reactstrap';

const AdhocTeam = (props) => (
  <div>
    <Head>
      <title>Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>Adhoc Cultura</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      <section className='call-to-action'>
        <div className='root'>
          <Jumbotron className='invert'>
            <h1 className='uppercase'>
              <strong>Missió</strong>
            </h1>
            <h2>
              Apropar la cultura a la societat com a motor de millora social,
              perquè les persones puguin gaudir dels seus beneficis
            </h2>
            <h3 className='uppercase'>Visió</h3>
            <h4>
              Treballem per desenvolupar una metodologia, les eines adients i
              els canals propis per assegurar la plena integració de la cultura
              a la societat.
            </h4>
          </Jumbotron>
        </div>
      </section>

      <section className='with-padding'>
        <h3 className='align-center uppercase'>Valors</h3>

        <h4>Les persones primer</h4>

        <p>
          Les persones són l’eix principal de tots els projectes i les
          activitats que realitzem. Hem creat un equip multidisciplinar
          cohesionat i volem que les organitzacions a qui donem suport ens
          considerin part del seu equip, sentint que formem part d’un projecte
          compartit.
        </p>

        <h4>Co-responsabilitat</h4>

        <p>
          Som corresponsables dels resultats que ajudem a assolir i de les
          decisions que ajudem a prendre, a emprenedors/es, empresaris/es i
          l’equip humà d’organitzacions i institucions.
        </p>

        <h4>Empoderament</h4>

        <p>
          Volem oferir una metodologia i unes eines perquè les organitzacions i
          les persones a qui donem suport siguin capaços de donar continuïtat al
          treball engegat, de manera autònoma, fent sostenible els resultats a
          llarg termini i fins i tot tirant endavant noves iniciatives.
        </p>

        <h4>Creativitat i innovació</h4>

        <p>
          No hi ha dos projectes ni dues accions idèntiques, encara que es basin
          en la mateixa metodologia o comparteixin alguns pilars. Per aquest
          motiu, sempre cerquem la millora contínua i el valor afegit en tota la
          cadena de valor dels projectes, a través de la línia estratègica
          d’R+D+I.
        </p>

        <h4>Transparència i comunicació</h4>

        <p>
          Totes les persones de l’equip tenim la llibertat d’expressar la nostra
          opinió i compartim tot el coneixement i la informació que generem, de
          manera interna i externa.
        </p>
      </section>

      <h3 className='align-center uppercase'>Equip</h3>

      <section className='grid-team bg-valors'>
        {props.adhocmembers
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          })
          .map((adhocmember, id) => (
            <div key={id}>
              <Observer
                threshold={1}
                triggerOnce={true}
                render={() => (
                  <figure className='fade-in img-team'>
                    <img src={adhocmember.photo} width={'300'} height={'250'} />
                    <figcaption>
                      <small>{adhocmember.name}</small>
                    </figcaption>
                  </figure>
                )}
              />
              <h4>{adhocmember.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: adhocmember.bio }} />
            </div>
          ))}
      </section>
      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        .root > :global(.invert) {
          background-color: #231f20;
          color: #ffffff;
        }
        .root a {
          color: #ffffff;
        }
        .align-center {
          text-align: center;
        }
        .uppercase {
          text-transform: uppercase;
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
        .yellow-central-projectes {
          color: #292b2c;
        }
        .img-team {
          padding: 1em;
        }
        .img-team img {
          margin: 0 auto;
          display: block;
        }
        .img-team figcaption {
          text-align: center;
        }
        .grid-team {
          background: #292b2c;
          color: #ffffff;
        }
        .grid-team figure img {
          border-bottom: 4px solid #f5bc42;
        }
        .grid-team h4,
        .grid-team p {
          padding: 1em;
        }
        @media screen and (min-width: 768px) {
          .grid-team {
            display: grid !important;
            grid-gap: 0;
            grid-template-columns: repeat(3, 1fr);
            align-items: flex-start;
            margin-bottom: 1em;
          }
          .grid-team figure,
          .grid-team figure img {
            transition: all 0.5s ease-in-out;
          }
          .grid-team figure:hover {
            transform: scale(1.5);
            color: #ffffff;
            padding: 1em;
            background: #292b2c;
            z-index: 3000;
            position: relative;
            cursor: zoom-in;
          }
        }
        @media screen and (min-width: 768px) {
          .grid-team {
            background: url('/static/adhoc-bg-qui.png') no-repeat #292b2c;
            background-position: right bottom;
            backgroundsize: contain;
          }
        }
        @media screen and (min-width: 1360px) {
          .grid-team {
            width: 75rem;
            margin-left: -5%;
          }
        }
      `}</style>
    </section>
  </div>
);

export async function getStaticProps() {
  const res = await fetch(`https://adhocdata.vercel.app/equip.json`);
  const adhocmembers = await res.json();
  return {
    props: { adhocmembers },
  };
}

export default AdhocTeam;
