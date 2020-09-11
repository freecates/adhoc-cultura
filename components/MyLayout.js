import Header from './Header'
import Footer from './Footer'
import ServiceWorker from '../pages/service-worker'
import NavBarDk from './NavBarDk'
import NavBarMb from './NavBarMb'
import MediaQuery from 'react-responsive'
import { initGA, logPageView } from '../utils/analytics'

const layoutStyle = {
  margin: '0 auto',
  padding: 0,
  maxWidth: '100%'
}
const mainStyle = {
  maxWidth: '70rem',
  margin: '0 auto'
}
const mainStyleDesktop = {
  maxWidth: '70rem',
  margin: '0 auto',
  padding: '0 20px 20px 20px'
}

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <div>
        {this.props.layout && 
          <div style={layoutStyle} className={ 'layout' in this.props && 'layout'} >
            <div style={mainStyle}>
              <MediaQuery maxDeviceWidth={1220} values={{ deviceWidth: 1220 }}>
                <MediaQuery maxDeviceWidth={736} values={{ deviceWidth: 736 }}>
                  <NavBarMb />
                </MediaQuery>
                <MediaQuery minDeviceWidth={768} values={{ deviceWidth: 768 }}>
                  <NavBarDk />
                </MediaQuery>
              </MediaQuery>
              <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1224 }}>
                <NavBarDk />
              </MediaQuery>
            </div>
            <Header />
            <MediaQuery maxDeviceWidth={1220} values={{ deviceWidth: 1220 }}>
              <main style={mainStyle}>{this.props.children}</main>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1224 }}>
              <main style={mainStyleDesktop}>{this.props.children}</main>
            </MediaQuery>
          </div>
        }
        <Footer />
        <ServiceWorker />
      </div>
    )
  }
}
