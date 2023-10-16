import { Main } from "./components/main";
import { Header } from "./components/header";
import { Pagination } from "./components/pagination";

function App() {
  return (
    <>
      <section className="w-screen mx-auto h-full bg-brand-white">
        <div className="max-w-1300 h-full mx-auto bg-white w-semi">
          <Header />
          <Main />
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default App;
