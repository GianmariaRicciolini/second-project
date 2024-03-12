import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <body>
      <header>
        <MyNav />
      </header>
      <Welcome />
      <AllTheBooks />
      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
