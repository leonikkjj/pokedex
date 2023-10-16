import { Header } from "./components/header";
import { PaginatedItems } from "./components/pagination";

function App() {
  return (
    <>
      <section className="w-screen mx-auto h-full bg-brand-white">
        <div className="max-w-1300 h-full mx-auto mb-6 bg-white w-semi">
          <Header />
          <PaginatedItems />
        </div>
      </section>
    </>
  );
}

export default App;
