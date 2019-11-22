import { connect } from 'react-redux';
import { App } from '../../components/App';
import { IMainStore } from '../../../types';

const mapStateToProps = (state: IMainStore): IAppProps => ({
  appStore: state.appStore
});

export default connect(
  mapStateToProps,
  null
)(App);
