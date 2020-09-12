import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Observer from 'react-intersection-observer'

const MapaDeGoogle = dynamic(import('../components/MapaDeGoogle'), {
  loading: () => <p>carregant ...</p>
})

const AdhocContact = props => (
  <div>
    <Head>
      <title>Contacte - Adhoc Cultura</title>
    </Head>
    <nav aria-label="Estás aquí:" role="navigation">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link  href="/">
            <a>Inici</a>
          </Link>
        </li>
        <li className="breadcrumb-item active">Contacte</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section>
      {props.contacts
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1
          }
          if (a.id > b.id) {
            return 1
          }
          return 0
        })
        .map((contact, id) => (
          <Observer
            key={id}
            threshold={1}
            triggerOnce={true}
            render={() => (
              <section className="fade-in">
                <MapaDeGoogle
                  name={contact.name}
                  lat={contact.lat}
                  lng={contact.lng}
                  address={contact.address}
                  code={contact.code}
                  city={contact.city}
                  tel={contact.tel}
                  mail={contact.mail}
                />
              </section>
            )}
          />
        ))}
      <style jsx>{`
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
      `}</style>
    </section>
  </div>
)

export async function getStaticProps() {
  const res = await fetch(`https://adhocdata.now.sh/contact.json`)
  const contacts = await res.json()
  return {
    props: { contacts }, // will be passed to the page component as props
  };
}

export default AdhocContact
