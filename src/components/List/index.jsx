import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import todos from '../../actions/todo';

const mapDispatchToProps = (dispatch) => ({
  onClickComplete: (id) => {
    dispatch(todos.toggle(id, 'COMPLETED'));
  },
  onClickDelete: (id) => {
    dispatch(todos.delete(id));
  },
});

const mapStateToProps = (state) => ({
  data: state,
});

const List = (props) => {
  const { data, onClickComplete, onClickDelete } = props;
  const items = (data.todo.length > 0) ? data.todo.map((item) => (
    <li key={item.id + 1}>
      {item.content}
      <br />
      {item.title}
      <br />
      {item.status}
      <br />
      <Link to={`/edit/${item.id}`}>
        Edit
      </Link>
      <br />
      <input value="Complete" type="button" onClick={() => onClickComplete(item.id)} />
      <br />
      <input value="Remove" type="button" onClick={() => onClickDelete(item.id)} />
    </li>
  )) : (<></>);

  return (
    <ul>{items}</ul>
  );
};

List.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
