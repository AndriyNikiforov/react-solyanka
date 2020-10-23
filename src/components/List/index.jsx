import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  onClickComplete: (id) => {
    dispatch(toggleTodo(id, 'COMPLETED'));
  },
  onClickDelete: (id) => {
    dispatch(deleteTodo(id));
  },
});

const mapStateToProps = (state) => ({
  data: state,
});

const List = (props) => {
  const { data, onClickComplete, onClickDelete } = props;
  const items = (data.todos.length > 0) ? data.todos.map((item) => (
    <li key={item.id}>
      {item.content}
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
