import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';

export default () => (
  <div>
    <Head>
      <title>El nostre mètode | Adhoc Cultura</title>
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>El nostre mètode</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section className='with-padding grid'>
      <div>
        <Observer
          threshold={1}
          triggerOnce={true}
          render={() => (
            <figure className='fade-in img-metode'>
              <img src='/static/adhoc-metode.jpg' />
            </figure>
          )}
        />
      </div>
      <div>
        <h1>El nostre mètode</h1>
        <p>
          Parteix del la unió de tres nuclis de treball: l'anàlisi, la
          coparticipació i la innovació
        </p>

        <p>
          <strong>Anàlisi</strong> intern que parteix de l'escolta activa i
          l'estudi de les dades facilitades per l'entitat i un anàlisi de les
          dades socials, estadístiques i oferta cultural de l'àrea d'influència
          de l'entitat.
        </p>

        <p>
          La <strong>cocreació</strong> a partir de dinàmiques participatives a
          partir de les les Tècniques del Manual Thinking i el Serius Lego Play
          amb diversos grups de treball.
        </p>

        <p>
          <strong>Innovació</strong> entenem que el procés d'innovació cultural
          és sobretot compromís, esforç, col·laboració i reflexió.
        </p>

        <p>
          Si aquests elements es treballen de forma col·lectiva, tant en àmbit
          intern de la institució com en relació amb l'entorn, es creen espais
          generadors de cultura i riquesa intel·lectual
        </p>

        <p>
          D'aquest procés se'n genera un <strong>document marc</strong> que
          esdevé eina on es descriuen els principis rectors, les estratègies i
          les línies d'actuació de l'entitat.
        </p>
      </div>
      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        strong {
          font-weight: 700;
        }
        .img-metode {
          padding: 1em;
        }
        .img-metode img {
          margin: 0 auto;
          display: block;
        }
        .img-metode figcaption {
          text-align: center;
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
        @media screen and (min-width: 768px) {
          .grid {
            display: grid !important;
            grid-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  </div>
);
