import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import todos from '../../actions/todo';

const mapDispatchToProps = (dispatch) => ({
  onClickComplete: (todo) => {
    dispatch(todos.toggle(todo, 'COMPLETED'));
  },
  onClickDelete: (todo) => {
    dispatch(todos.delete(todo));
  },
});

const mapStateToProps = (state) => ({
  data: state,
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.listElements = this.listElements.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    let shouldUpdate = true;
    const { data: nextTodo } = nextProps;
    const { data: currentTodo } = this.props;

    if (nextTodo.todo === currentTodo.todo) {
      shouldUpdate = false;
    }

    return shouldUpdate;
  }

  listElements() {
    const { data, onClickComplete, onClickDelete } = this.props;
    const items = (data.todo.length > 0) ? data.todo.map((item) => (
      <li key={item.id}>
        <div className="li-content">
          <h4>{item.title}</h4>
          <p className="text">{item.content}</p>
          <span className="label-status">{item.status}</span>
        </div>
        <div className="li-buttons">
          <NavLink className="li-link" to={`/edit/${item.id}`}>
            Edit
          </NavLink>
          <input value="Complete" className="action-button" type="button" onClick={() => onClickComplete({ ...item, status: 'COMPLETED' })} />
          <input value="Remove" className="action-button" type="button" onClick={() => onClickDelete(item.id)} />
        </div>
      </li>
    )) : (<></>);

    return items;
  }

  render() {
    const items = this.listElements();

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

List.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
