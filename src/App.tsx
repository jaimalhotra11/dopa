import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhyJoin from './pages/WhyJoin';
import AboutOwners from './pages/AboutOwners';
import Management from './pages/Management';
import Facilities from './pages/Facilities';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import CareerApplication from './pages/CareerApplication';
import Contact from './pages/Contact';
import SuccessStoryForm from './pages/SuccessStoryForm';
import VideoTour from './pages/VideoTour';
import BookSession from './pages/BookSession';
import Footer from './components/Footer';
import AutoScrollToTop from './components/AutoScrollToTop';
import ConfirmationPage from './pages/ConfirmationPage';

const App = () => {
  return (
    <Router>
        <AutoScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-join" element={<WhyJoin />} />
          <Route path="/about-owners" element={<AboutOwners />} />
          <Route path="/management" element={<Management />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<CareerApplication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/share-story" element={<SuccessStoryForm />} />
          <Route path="/video-tour" element={<VideoTour />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <Footer/>
      </Layout>
    </Router>
  );
};
export default App;