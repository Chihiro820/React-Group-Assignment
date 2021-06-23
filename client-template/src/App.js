import logo from './logo.svg';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import './App.css';
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


{/* <Router>
<Nav />

{/* Switch ensures that only 1 component renders. Stop rendering other components as soon as it gets a match */}
{/* <Switch>
  {/* Route associates a path with a specific component */}
  // <Route path="/" exact component={Home} />
  // <Route path="/manage-puns" component={ManagePuns} />
  // <Route path="/update-pun/:id" component={UpdatePun} />
  // <Route path="/create-pun" component={CreatePun} />
// </Switch> 
// </Router> 