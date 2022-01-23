import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search.jsx';
import PaginationSection from './components/Pagination.jsx'; 


function App() {
  return (
    <div className="App">
     <Search/>
     <PaginationSection/>
    </div>
  );
}

export default App;
