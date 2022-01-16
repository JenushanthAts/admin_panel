import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div >
      <Topbar />
      {/* container is created for displaying two widgets(sidebar,otherpages) in row manner */}
      <div className="container">  
        <Sidebar />
        <Home/>
      </div>


    </div>
  );
}

export default App;
