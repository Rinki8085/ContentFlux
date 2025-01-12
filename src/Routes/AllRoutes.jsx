import {Routes, Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homapage';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import ArticleWriter from "../Pages/Services/ArticleWriter";
import EbookWriter from '../Pages/Services/EbookWriter';
import WebContent from '../Pages/Services/WebContent';
import PressRelease from '../Pages/Services/PressRelease';
import LegalWriter from '../Pages/Services/LegalWriter';
import ProductDescript from '../Pages/Services/ProductDescript';
import TechnicalWriter from '../Pages/Services/TechnicalWriter';
import Editor from '../Pages/Services/Editor';
import BlogWriter from '../Pages/Services/BlogWriter';
import FictionWriter from '../Pages/Services/FictionWriter';
import Copywriter from '../Pages/Services/Copywriter';
import GhostWriter from '../Pages/Services/GhostWriter';
import ResumeWriter from '../Pages/Services/ResumeWriter';
import Transcription from '../Pages/Services/Transcription';
import WriteTranslate from '../Pages/Services/WriteTranslate';
import ProofReader from '../Pages/Services/ProofReader';
import ThankPage from '../Pages/ThankPage';

function AllRoutes(){
   return(
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/about-us' element={<About/>} />
         <Route path='/' element={<Services/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/article-writer' element={<ArticleWriter/>} />
         <Route path='/ebook-write' element={<EbookWriter/>} />
         <Route path='/website-content-writing-services' element={<WebContent/>} />
         <Route path='/press-release-writer' element={<PressRelease/>} />
         <Route path='/legal-writer' element={<LegalWriter/>} />
         <Route path='/product-descriptions' element={<ProductDescript/>} />
         <Route path='/technical-content-writing' element={<TechnicalWriter/>} />
         <Route path='/editor' element={<Editor/>} />
         <Route path='/blog-writer' element={<BlogWriter/>} />
         <Route path='/fiction-writer' element={<FictionWriter/>} />
         <Route path='/copywriting-services' element={<Copywriter/>} />
         <Route path='/ghostwriter' element={<GhostWriter/>} />
         <Route path='/resume-writer' element={<ResumeWriter/>} />
         <Route path='/transcription-writer' element={<Transcription/>} />
         <Route path='/writing-translation' element={<WriteTranslate/>} />
         <Route path='/proofreader' element={<ProofReader/>} />
         <Route path='/thankyou' element={<ThankPage />} />
      </Routes>
   )
}

export default AllRoutes;