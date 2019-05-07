import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/normalize.css';
import FooterCta from '../components/FooterCta';
import ShareSocialCta from '../components/ShareSocialCta';
import SpreadMessageCTA from '../components/SpreadMessageCTA';
import homePageConfig from '../configs/pages/homepageConfig';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Climate Choice</title>
        </Helmet>

        <Navbar />
        <main>{children}</main>
        <ShareSocialCta
          ctaCopy={homePageConfig.ctaCopy}
          ctaTitle={homePageConfig.ctaTitle}
          socialTitle={homePageConfig.socialTitle}
          socialCopy={homePageConfig.socialCopy}
        />
        <FooterCta />
        <Footer />
        <SpreadMessageCTA />
      </div>
    );
  }
}

export default Layout;
