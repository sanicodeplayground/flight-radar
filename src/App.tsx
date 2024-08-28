import Header from "./components/Header";
import AirplaneGeoView from "./components/AirplaneGeoView";
import AirplaneDataTable from "./components/AirplaneDataTable";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <h1>Airplane live location data</h1>
        <section className="data-container">
          <AirplaneGeoView />
          <AirplaneDataTable />
        </section>
      </main>
    </div>
  );
}

export default App;
