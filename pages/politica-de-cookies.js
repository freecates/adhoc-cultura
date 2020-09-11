import Head from 'next/head'
import Link from 'next/link'

export default () => (
    <div>
    <Head>
      <title>Política de cookies - Adhoc Cultura</title>
    </Head>
    <nav aria-label="Estás aquí:" role="navigation">
      <ol className="breadcrumb">
        <li className='breadcrumb-item'><Link  href="/"><a>Inici</a></Link></li>
        <li className='breadcrumb-item active'>Política de cookies
        </li>
      </ol>
      <style jsx>{`
        nav {
          padding:1em 20px 20px 20px;
        }
      `}</style>
    </nav>
        <section className='with-padding'>
          <h1>Política de cookies</h1>
          <p>Les cookies són breus informacions que s'envien i s'emmagatzemen en el disc dur de l'ordinador de l'usuari a través del seu navegador quan aquest es connecta a una web. Les galetes es poden utilitzar per a recopilar i emmagatzemar dades de l'usuari mentre està connectat per facilitar-ne els serveis sol·licitats i que no es conserven (sessió de cookies), o per conservar el personal de l'usuari per a altres tipus de serveis futurs que es poden conservar per temps indefinit (cookies persistents). Les cookies poden ser pròpies o de tercers.</p>

          <p>Existeixen diversos tipus de cookies:</p>

          <ul>
              <li>Cookies tècniques que faciliten la navegació de l'usuari i la utilització de les diferents opcions o serveis que ofereix la web com identificar la sessió, permetre l'accés a determinades àrees, facilitar comandes, compra, compliment de formularis, inscripcions, seguretat, facilitar funcionalitats (vídeos , xarxes socials, etc.).</li>
              <li>Cookies de personalització que permeten al usuari accedir als serveis segons les seves preferències (idioma, navegador, configuració, etc.).</li>
              <li>Cookies d'anàlisi que permeten analitzar anònim el comportament dels usuaris de la web i que permeten mesurar l'activitat de l'usuari i elaborar perfils de navegació amb l'objectiu final de millorar els llocs web.</li>
              <li>Cookies publicitàries que permeten la gestió dels espais publicitaris de la web.</li>
              <li>Cookies d'publicitat personalitzada que permeten la gestió dels espais publicitaris de la web en base al comportament i hàbits de navegació de l'usuari, d'on s'obté el seu perfil i aquest fet permet personalitzar l'anunci que es mostra en el navegador de l'usuari.</li>
          </ul>

          <p>Central de Projectes únicament utilitza cookies tècniques, de personalització i anàlisi, propis i de tercers, que en cap cas tracten dades de caràcter personal ni captan hàbits de navegació per a finalitats publicitàries.</p>

          <p>Per això, en accedir a la nostra web, en compliment de l'article 22 de la Llei de Serveis de la Societat de la Informació, al tractar les cookies d'anàlisi, hem sol·licitat el seu consentiment per a la seva utilització, que en tot cas es instal·larà passat un termini de temps prudencial perquè el usuari tingui temps de decidir prestar el seu consentiment o no.</p>

          <p>De totes formes, li informem que pot activar o desactivar aquestes cookies seguint les instruccions de la seva navegador d'Internet.</p>
          <style jsx>{`
            .with-padding {
              padding:0 20px 20px 20px;
            }
          `}</style>
        </section>
    </div>
)
