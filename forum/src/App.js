import './App.css';
import '@fontsource/roboto';
import NavBar from './components/NavBar/NavBar';
import Panel from './components/Panel/Panel';
import Content from './components/Content/Content/Content';
import Grid from '@material-ui/core/Grid';
import React from "react";
import Registration from './components/Authorization/Registration/Registration';
import Login from './components/Authorization/Login/Login';
import Auth from './components/store/Auth';
import axios from 'axios';
import Article from './components/Content/Article/Article';
import Create from './components/Create/Create';
import Activation from './components/Activation/Activation';
import Banned from './components/Banned/Bannned';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

Auth.getUserData();
const App = () => {
  const [card, setCard] = React.useState([]);
  const [itemAll, setItemAll] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse] = await Promise.all([
          axios.get('http://localhost:5000/auth/getContent'),
        ]);
        setCard(cartResponse.data)
        setItemAll(cartResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
  
    fetchData();
  }, []);
 
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/article/:id/:user">
          <Article />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/activation">
          <Activation />
        </Route>
        <Route path="/banned">
          <Banned />
        </Route>
        <Route path="/">
          <NavBar/>
          <Grid container>
            <Panel setCard={setCard} itemAll={itemAll}/>
            <Content card={card}/>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
