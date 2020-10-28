import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Article from '../../components/Article';
import TextBlock from '../../components/TextBlock';
import List from '../../components/List';
import Footer from '../../components/Footer';
import { setVisibilityFilter } from '../../actions';

const Home = ({ dataTodos }) => (
  <div className="container">
    <Header />
    <Article className="content">
      <div className="section">
        <TextBlock text="TODO" />
        <List data={dataTodos.todo} />
      </div>
    </Article>
    <Footer />
  </div>
);

Home.propTypes = {
  dataTodos: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  dataTodos: {},
};

const mapStateToProps = (state) => ({
  dataTodos: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilterData: dispatch(setVisibilityFilter('SHOW_ALL')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
