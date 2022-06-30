import { Header } from './components/Header'
import { Home } from './pages/Home'
import styles from './sass/App.module.sass'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {

  return (
    <div className={styles.contentWrapper}>    
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </div>
  )
}

export default App
