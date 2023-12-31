import Header from "./components/Header/Header";
import Cta from "./components/Cta/Cta";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="app">
      <section className="landing-view container">
        <Header />
        <Hero />
      </section>

      <Greeting />
      <MyWork />
      <Cta />
      <footer className="container">
        <Header margin="1.2" />
      </footer>
    </div>
  );
}

export default App;
