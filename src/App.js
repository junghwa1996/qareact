import TopBanner from "./pages/TopBanner"
import NavWrap from "./pages/NavWrap"
import MainKv from "./pages/MainKv"
import BeneFit from "./pages/BeneFit"
import Product from "./pages/Product"
import Introduction from "./pages/Introduction"
import EventWrap from "./pages/EventWrap"
import BenefitAll from "./pages/BenefitAll"

function App() {
  return (
    <div className="App">
      <TopBanner />
      <NavWrap />
      <MainKv />
      <BeneFit />
      <Product />
      <Introduction />
      <EventWrap />
      <BenefitAll />
    </div>
  );
}

export default App;
