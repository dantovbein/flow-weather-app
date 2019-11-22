import { connect } from 'react-redux';
import { Cities } from '../../components/Cities';
import { IMainStore, ICitiesProps } from '../../../types';

const mapStateToProps = (state: IMainStore): ICitiesProps => ({
  citiesStore: state.citiesStore
});

export default connect(
  mapStateToProps,
  null
)(Cities);
