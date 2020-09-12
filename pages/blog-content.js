import base64 from 'base-64';

import Head from 'next/head';
import Link from 'next/link';
import Observer from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import { generateShareIcon, ShareButtons } from 'react-share';
import utf8 from 'utf8';

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

const BlogContent = (props) => (
  <div>
    <Head>
      <title>{props.contentTitle} - Adhoc Cultura</title>

      <meta property='fb:app_id' content='1064356173625695' />
      <meta property='og:url' content={`/${props.path}`} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={props.contentTitle} />
      <meta property='og:description' content={props.socialTextOK} />
      <meta
        property='og:image'
        content={`https://quid.cat/assets/images/` + `${props.contentImage}`}
      />
      <meta property='og:image:width' content='600' />
      <meta property='og:image:height' content='300' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@AdhocCultura' />
      <meta name='twitter:creator' content='@AdhocCultura' />
      <meta name='twitter:title' content={props.contentTitle} />
      <meta name='twitter:description' content={props.socialTextOK} />
      <meta
        name='twitter:image:src'
        content={`https://quid.cat/assets/images/` + props.contentImage}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${`https://www.adhoc-cultura.com/` + props.path}"
      },
      "author": {
        "@type": "Person",
        "name": "${props.commits[0].commit.author.name}"
      },
      "publisher": {
       "@type": "Organization",
       "name": "Adhoc Cultura",
       "logo": {
         "@type": "ImageObject",
         "url": "https://www.adhoc-cultura.compublic/static/bg-adhoc-cultura-1024.jpg"
       }
      }, 
      "description": "${props.socialTextOK}",
      "image": "${`https://quid.cat/assets/images/` + props.contentImage}",
      "datePublished": "${props.commits[0].commit.author.date}",
      "headline": "${props.contentTitle}"
    }`,
        }}
      />
    </Head>
    <nav aria-label='Estás aquí:' role='navigation'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>
            <a>Inici</a>
          </Link>
        </li>
        <li className='breadcrumb-item'>
          <Link href='/blog-index'>
            <a>Blog</a>
          </Link>
        </li>
        <li className='breadcrumb-item active'>{props.contentTitle}</li>
      </ol>
      <style jsx>{`
        nav {
          padding: 1em 20px 20px 20px;
        }
      `}</style>
    </nav>
    <section className='with-padding'>
      <h1>Blog</h1>
      <section className='grid'>
        {props.contentImage != '---' ? (
          <div>
            <Observer
              threshold={1}
              triggerOnce={true}
              render={() => (
                <figure className='entry fade-in'>
                  <img
                    src={
                      `https://quid.cat/assets/images/` +
                      `${props.contentImage}`
                    }
                  />
                </figure>
              )}
            />
          </div>
        ) : (
          ''
        )}
        {props.contentVideoMP4 != '---' ? (
          <div>
            <Observer
              threshold={1}
              triggerOnce={true}
              render={() => (
                <div className='fade-in'>
                  <video
                    controls='controls'
                    poster={
                      `https://quid.cat/assets/videos/` +
                      `${props.contentVideoPoster}`
                    }
                    width='100%'
                    height='300'>
                    <source
                      src={
                        `https://quid.cat/assets/videos/` +
                        `${props.contentVideoMP4}`
                      }
                      type='video/mp4'
                    />
                    <source
                      src={
                        `https://quid.cat/assets/videos/` +
                        `${props.contentVideoWEBM}`
                      }
                      type='video/webm'
                    />
                  </video>
                </div>
              )}
            />
          </div>
        ) : (
          ''
        )}
        <div>
          <h2>{props.contentTitle}</h2>

          <div className='social-share-icons'>
            <div className='Post__some-network'>
              <p>
                <small>Comparteix:</small>
              </p>
            </div>

            <div className='Post__some-network'>
              <FacebookShareButton
                url={'https://www.adhoc-cultura.com/' + props.path}
                className='Post__some-network__share-button'>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>

            <div className='Post__some-network'>
              <TwitterShareButton
                url={'https://www.adhoc-cultura.com/' + props.path}
                title={props.contentTitle}
                hashtags={['ahdoccultura']}
                via='AdhocCultura'
                className='Post__some-network__share-button'>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>

            <div className='Post__some-network'>
              <LinkedinShareButton
                url={'https://www.adhoc-cultura.com/' + props.path}
                title={props.contentTitle}
                className='Post__some-network__share-button'>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>

            <div className='Post__some-network'>
              <EmailShareButton
                url={'https://www.adhoc-cultura.com/' + props.path}
                subject={props.contentTitle}
                body={
                  "Fes-li un cop d'ull a: " +
                  props.contentTitle +
                  ' ' +
                  'https://www.adhoc-cultura.com/' +
                  props.path
                }
                className='Post__some-network__share-button'>
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>
        </div>
      </section>
      <div className='root'>
        <ReactMarkdown source={props.contentText} />
      </div>
      <style jsx>{`
        .Post__some-network {
          vertical-align: top;
          display: inline-block;
          margin-right: 20px;
          text-align: center;
        }
        .social-share-icons {
          margin-bottom: 1.5rem;
        }
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        .root > :global(div strong) {
          font-weight: 700;
        }
        .img-entry {
          padding: 1em;
        }
        .img-entry img {
          margin: 0 auto;
          display: block;
        }
        .img-entry figcaption {
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
        .grid figure img {
          border-bottom: 4px solid #f5bc42;
        }
        @media screen and (min-width: 768px) {
          .grid {
            display: grid !important;
            grid-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
          }
        }
      `}</style>
    </section>
  </div>
);

BlogContent.getInitialProps = async function (context) {
  const { path } = context.query;
  const res = await fetch(
    `https://api.github.com/repos/quidcec/quidcec.github.io/contents/${
      '_' + path + '.md'
    }?ref=source`
  );
  const res2 = await fetch(
    `https://api.github.com/repos/quidcec/quidcec.github.io/commits?path=${
      '_' + path + '.md'
    }`
  );
  const adhocmembers = await res.json();
  const commits = await res2.json();
  console.log(`${commits[0].commit.author.date}`);

  const bytes = decodeURIComponent(base64.decode(adhocmembers.content));

  const text = utf8.decode(bytes);

  const contentText = text.substring(text.lastIndexOf('---'));

  const maxLength = 100;
  const socialText = contentText
    .substr(0, maxLength)
    .replace(/(?:\r\n|\r|\n)/g, ' ');
  const socialTextOK = socialText.substr(
    0,
    Math.min(socialText.length, socialText.lastIndexOf(' '))
  );

  const contentImage = text.split('image: ').pop().split('\n').shift();

  const contentVideoMP4 = text.split('video-mp4: ').pop().split('\n').shift();

  const contentVideoWEBM = text.split('video-webm: ').pop().split('\n').shift();

  const contentVideoPoster = text
    .split('poster-video: ')
    .pop()
    .split('\n')
    .shift();

  const contentTitle = text.split('title: ').pop().split('\n').shift();

  return {
    contentText,
    contentImage,
    contentTitle,
    contentVideoMP4,
    contentVideoWEBM,
    contentVideoPoster,
    path,
    socialTextOK,
    commits,
  };
};

export default BlogContent;
