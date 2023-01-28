import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Link from 'next/link'

const BlogIndex = props => (
  <div>
    <Head>
      <title>Blog - Adhoc Cultura</title>
    </Head>
    <nav aria-label="Estás aquí:" role="navigation">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link  href="/">
            <a>Inici</a>
          </Link>
        </li>
        <li className="breadcrumb-item active">Avís Legal</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section className="with-padding">
      <h1>Blog</h1>
      <div>
        <ul className="gallery">
        {props.blogLists
            .sort((a, b) => {
              if (a.path < b.path) {
                return 1
              }
              if (a.path > b.path) {
                return -1
              }
              return 0
            })
            .map((blogList, path) => (
              <li className="item" key={path}>
                <Link
                  
                  as={`/${blogList.path
                    .replace(/_posts\//g, 'posts/')
                    .replace(/.md/g, '')}`}
                  href={`/blog-content?path=${blogList.path
                    .replace(/_posts\//g, 'posts/')
                    .replace(/.md/g, '')}`}
                >
                  <a
                    title={
                      'Clica aquí per veure: ' +
                      blogList.path
                        .replace(/-/g, ' ')
                        .replace(/_posts\//g, ' ')
                        .replace(/.md/g, ' ')
                        .toUpperCase()
                    }
                  >
                    {' '}
                    <span
                      className="uppercase"
                      dangerouslySetInnerHTML={{
                        __html: blogList.path
                          .replace(/-/g, ' ')
                          .replace(/_posts\//g, ' ')
                          .replace(/.md/g, ' ')
                      }}
                    />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        .root > :global(div strong) {
          font-weight: 700;
        }
        .uppercase {
          text-transform: uppercase;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media screen and (min-width: 768px) {
          .gallery {
            background: #292b2c;
            color: #ffffff;
            display: grid !important;
            grid-gap: 2em;
            grid-template-columns: repeat(2, 1fr);
            align-items: flex-start;
            margin-bottom: 1em;
            padding: 1em 1em 1em 2em;
          }
          .gallery a {
            color: #ffffff;
          }
        }
        @media screen and (min-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (min-width: 1360px) {
          .gallery {
            width: 80rem;
            margin-left: -10%;
          }
          .gallery {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  </div>
)

export async function getStaticProps() {
  const res = await fetch(
    `https://api.github.com/repos/quidcec/quidcec.github.io/contents/_posts?ref=source`
  )
  const blogLists = await res.json()
  return {
    props: { blogLists }, // will be passed to the page component as props
  };
}

export default BlogIndex
