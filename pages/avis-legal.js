import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <div>
    <Head>
      <title>Avís Legal - Adhoc Cultura</title>
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
      <h1>Avís Legal</h1>
      <p>
        Els drets de propietat intel·lectual dels serveis on-line de{' '}
        <strong>ADHOC CULTURA</strong> i del seu contingut pertanyen a aquesta
        societat o, si escau, a terceres persones.
      </p>

      <p>
        L'usuari pot visualitzar tots els elements, imprimir-los, copiar-los i
        emmagatzemar-los al disc dur del seu ordinador o en qualsevol altre
        suport físic sempre que sigui, única i exclusivament, per al seu ús
        personal i privat. Per a la utilització amb fins comercials dels
        continguts del web, la seva distribució, així com la seva modificació,
        alteració o descompilació, es requereix un permís previ de{' '}
        <strong>ADHOC CULTURA</strong>.
      </p>

      <p>
        L'usuari es compromet a fer un ús adequat dels continguts i serveis que{' '}
        <strong>ADHOC CULTURA</strong> pugui oferir a la seva seu web ia no
        emprar-los per incórrer en activitats il·lícites o contràries a la bona
        fe ia l'ordenament legal.
      </p>

      <p>
        Amb la voluntat de millorar la pàgina web,{' '}
        <strong>ADHOC CULTURA</strong> es reserva el dret d'efectuar les
        modificacions que consideri oportunes, podent canviar, suprimir o afegir
        tant els continguts i serveis que presta com la forma en què aquests
        apareguin presentats o localitzats.
      </p>

      <p>
        <strong>ADHOC CULTURA</strong> autoritza mencions als seus continguts en
        altres webs, sempre que no reprodueixin els continguts presents a la
        pàgina web de <strong>ADHOC CULTURA</strong>. En el cas de disposar d'un
        enllaç hipertext a alguna de les seves pàgines, l'usuari ha de saber que
        està entrant a la pàgina web de <strong>ADHOC CULTURA</strong> i ha de
        percebre en el seu navegador la seva adreça URL. Si{' '}
        <strong>ADHOC CULTURA</strong> detecta l'incompliment de les anteriors
        condicions, així com qualsevol utilització indeguda dels continguts
        presentats a la seva pàgina web, es reserva el dret d'exercir totes les
        accions civils i penals necessàries.
      </p>

      <p>
        <strong>ADHOC CULTURA</strong>, SL
        <br />
        Carrer Rierassa, 2 B <br />
        17488 Cadaqués
        <br />
        T.: 677720522
        <br />
        NIF: B5525150
      </p>
      <style jsx>{`
        .with-padding {
          padding: 0 20px 20px 20px;
        }
        strong {
          font-weight: 700;
        }
      `}</style>
    </section>
  </div>
);
