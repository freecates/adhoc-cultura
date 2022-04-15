import Head from 'next/head';
import Link from 'next/link';

const BlogIndex = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog - Adhoc Cultura</title>
      </Head>
      <nav aria-label='Estás aquí:' role='navigation'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link href='/'>
              <a>Inici</a>
            </Link>
          </li>
          <li className='breadcrumb-item active'>Avís Legal</li>
        </ol>
        <style jsx>{`
          nav {
            padding: 1em 20px 20px 20px;
          }
        `}</style>
      </nav>
      <section className='with-padding'>
        <h1>Blog</h1>
        <div>
          <ul className='gallery'>
            {posts
              .sort((a, b) => {
                if (a.type == 'post') {
                  if (a.date > b.date) {
                    return -1;
                  }
                  if (a.date < b.date) {
                    return 1;
                  }
                  return 0;
                }
              })
              .map((c, id) => (
                <li className='item' key={c.id} id={id}>
                  <div>
                    <header>
                      <h3>
                        <span
                          dangerouslySetInnerHTML={{ __html: c.title.rendered }}
                        />
                        &rarr;
                      </h3>
                    </header>

                    {c.type == 'post' ? (
                      <>
                        <p>
                          {c.acf.destacat.substring(0, 120)}...{' '}
                            <a target={'_blank'} rel='nofollow' href={`https://www.aracultura.com/${c.type}/${c.slug}`} title={`Veure: ${c.title.rendered} | enllaç extern a Ara cultura`}>[+]</a>
                        </p>
                      </>
                    ) : null}
                  </div>
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
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://cms.aracultura.com/wp-json/wp/v2/posts?per_page=100`
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

export default BlogIndex;
