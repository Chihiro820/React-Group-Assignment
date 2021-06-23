import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import './styles/App.css';
import Products from './pages/Products'
import Header from './components/Header';
import ManageProducts from './pages/admin/ManageProducts';
import Product from './pages/Product';
import CreateProduct from './pages/admin/CreateProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/admin/ManageProducts" component={ManageProducts} />
          <Route path="/" exact component={Products} />
          <Route path="/Product/:productId" component={Product} />
          <Route path="/create-product" component={CreateProduct} /> 
          <Route path="/admin/UpdateProduct/:productId" component={UpdateProduct}/>
        </Switch>
        <Footer />  
      </Router>

    </div>
  );
}

export default App;


