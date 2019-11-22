import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cities from '../../containers/Cities';
import CurrentLocation from '../Location/CurrentLocation';
import './styles.scss';
import Overlay from '../Overlay';
import Footer from '../Footer';

export class App extends React.Component<IAppProps, IAppState> {
  
  constructor(props: IAppProps, state: IAppState) {
    super(props, state);
  }

  render() {
    const {fetching, fetched} = this.props.appStore!;
    return (
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/cities"/>
          </Route>
          <Route exact path="/cities">
            <>
              <CurrentLocation/>
              <Cities/>
            </>
          </Route>
          <Route path="/cities/:city" render={(props: any) => <div>Ver ciudad { props.router}</div>} />
        </Switch>
        <Footer/>
        { (fetching && !fetched) && <Overlay/> }
      </main>
    )
  }
}
