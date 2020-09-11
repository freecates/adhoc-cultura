import Link from 'next/link'
import Layout from '../components/MyLayout'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <nav aria-label="Estás aquí:" role="navigation">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link  href="/">
                <a>Inici</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">Error</li>
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
          {this.props.statusCode ? (
            <span>
              Se ha produït un error <strong>{this.props.statusCode}</strong> al
              servidor
            </span>
          ) : (
            'Se ha produït un error al client'
          )}
        </h2>

        <p>
          Si us plau, torna a la pàgina d'<Link  href="/">
            <a>Inici</a>
          </Link>.
        </p>

        <p>
          Si l'error persisteix, posis en contacte amb{' '}
          <Link href="mailto:info@adhoc-cultura.com">
            <a>info@adhoc-cultura.com</a>
          </Link>
        </p>

        <style jsx>{`
          h1,
          h2 {
            text-align: center;
          }
        `}</style>
        </section>
      </Layout>
    )
  }
}
