import 'antd/dist/antd.css';
import './styles.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ErrorPage from "./pages/ErrorPage";
import ResultPage from "./pages/ResultPage";
import HeaderComponent from "./layout/Header";
import TosPage from './pages/TosPage';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderComponent />
          <Route path='/'>
            {<Redirect to='/netcentric/public/verification' />}
          </Route>
          <Route exact path='/netcentric/public/verification' component={LandingPage}/>

          <Route exact path='/netcentric/public/error' component={ErrorPage}/>
          <Route exact path='/netcentric/public/jerome-gacoscosim' component={ResultPage} />

          <Route exact path='/public/tos' component={TosPage}/>

      </BrowserRouter>
    </div>
  );
}
