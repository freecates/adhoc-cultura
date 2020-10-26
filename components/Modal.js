import React from 'react';
import Popup from 'reactjs-popup';

const Modal = () => (
  <Popup modal defaultOpen>
    {(close) => (
      <div>
        <a className='close' onClick={close}>
          &times;
        </a>
        <h2>
          <img src={'/static/aracultura.png'} />
        </h2>
        <p style={{textAlign:'center'}}>
          <a
            style={{
              background: '#56b34a',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '.5rem',
            }}
            href={'https://www.aracultura.com/'}>
            Explora, participa i utilitza
          </a>
        </p>
        <p>
          les propostes que ha desenvolupat Adhoc Cultura per l'Àmbit cultural
          en resposta a la situació de pandèmia.
        </p>
      </div>
    )}
  </Popup>
);

export default Modal;
