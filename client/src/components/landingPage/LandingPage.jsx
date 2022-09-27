import CardContainer from './Card/CardContainer';
import Aside from './Filter/Aside';
import Header from './Header';

function LandingPage() {
  return (
    <>
      <Header />
      <section className="container">
        <Aside />
        <CardContainer />
      </section>

    </>
  );
}

export default LandingPage;
