import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { SITE_TITLE, HOME_OG_IMAGE_URL } from '../lib/constants';
import { imageBuilder } from '../lib/sanity';


export default function Layout({ preview, children, socialTags }) {
  const ogImage = socialTags ? imageBuilder(socialTags.ogImage).width(1240).height(630).url() : HOME_OG_IMAGE_URL;
  const ogTitle = socialTags ? socialTags.ogTitle : SITE_TITLE;
    return (
      <>
        <Meta ogImage={ogImage} ogTitle={ogTitle} />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </>
    ); 
}
