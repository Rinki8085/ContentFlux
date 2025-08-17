import {Routes, Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homapage';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import WebContent from '../Pages/Services/WebContent';
import LegalWriter from '../Pages/Services/LegalWriter';
import ProductDescript from '../Pages/Services/ProductDescript';
import TechnicalWriter from '../Pages/Services/TechnicalWriter';
import Copywriter from '../Pages/Services/Copywriter';
import ThankPage from '../Pages/ThankPage';
import BlogsPage from '../Pages/Blogs';
import SocialMediaWriting from '../Pages/Services/SocialMediaWriting';

function AllRoutes(){
   return(
      <Routes>
         <Route path='/' element={<Homepage/>} priority={0.1} />
         <Route path='/about-us' element={<About/>} />
         {/* <Route path='/' element={<Services/>} /> */}
         <Route path='/contact' element={<Contact/>} />
         {/* <Route path='/article-writer' element={<ArticleWriter/>} /> */}
         {/* <Route path='/ebook-write' element={<EbookWriter/>} /> */}
         <Route path='/website-content-writing-services' element={<WebContent/>} />
         {/* <Route path='/press-release-writer' element={<PressRelease/>} /> */}
         <Route path='/legal-content-writing' element={<LegalWriter/>} />
         <Route path='/product-descriptions' element={<ProductDescript/>} />
         <Route path='/technical-content-writing' element={<TechnicalWriter/>} />
         <Route path='/technical-content-writing' element={<TechnicalWriter/>} />
         <Route path='/blogs' element={<BlogsPage/>} />
         {/* <Route path='/editor' element={<Editor/>} /> */}
         {/* <Route path='/fiction-writer' element={<FictionWriter/>} /> */}
         <Route path='/copywriting-services' element={<Copywriter/>} />
         <Route path='/social-media-content-services' element={<SocialMediaWriting />} />
         {/* <Route path='/resume-writer' element={<ResumeWriter/>} /> */}
         {/* <Route path='/transcription-writer' element={<Transcription/>} /> */}
         {/* <Route path='/writing-translation' element={<WriteTranslate/>} /> */}
         {/* <Route path='/proofreader' element={<ProofReader/>} /> */}
         <Route path='/thankyou' element={<ThankPage />} />
         {/* Fallback route for undefined paths */}
         <Route path="*" element={<Homepage />} />
         
      </Routes>
   )
}

export default AllRoutes;