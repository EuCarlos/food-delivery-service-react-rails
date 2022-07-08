import { Header } from './components/Header'
import { Home } from './pages/Home'
import styles from './sass/App.module.sass'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Restaurants } from './pages/Restaurants'
import { Restaurant } from './pages/Restaurant'


function App() {

  return (
    <div className={styles.contentWrapper}>    
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurantes" exact component={Restaurants} />
        <Route path="/restaurante/:id" exact component={Restaurant} />
      </Switch>
    </Router>
  </div>
  )
}

export default App
