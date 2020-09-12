import Layout from '../components/MyLayout';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <Layout>
      <nav aria-label='Estás aquí:' role='navigation'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link href='/'>
              <a>Inici</a>
            </Link>
          </li>
          <li className='breadcrumb-item active'>Error</li>
        </ol>
        <style jsx>{`
          nav {
            padding: 1em 20px 20px 20px;
          }
        `}</style>
      </nav>
      <section>
        <h1>Error</h1>
        <h2>
          {statusCode ? (
            <span>
              Se ha produït un error <strong>{statusCode}</strong> al servidor
            </span>
          ) : (
            'Se ha produït un error al client'
          )}
        </h2>

        <p>
          Si us plau, torna a la pàgina d'
          <Link href='/'>
            <a>Inici</a>
          </Link>
          .
        </p>

        <p>
          Si l'error persisteix, posis en contacte amb{' '}
          <a href='mailto:info@adhoc-cultura.com'>info@adhoc-cultura.com</a>
        </p>

        <style jsx>{`
          h1,
          h2 {
            text-align: center;
          }
        `}</style>
      </section>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
