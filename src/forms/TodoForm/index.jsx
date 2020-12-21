import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Label from '../../components/Label';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import todos from '../../actions/todo';

const mapStateToProps = (state, ownProps) => ({
  todo: state.todo.find((item) => Number(item.id) === Number(ownProps.match.params.id)) || null,
  id: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (todo) => dispatch(todos.add(todo)),
  updateTodoAction: (todo) => dispatch(todos.update(todo)),
});

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { todo: propTodo } = this.props;

    if (propTodo) {
      this.setState(() => ({
        todo: {
          ...propTodo,
        },
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onChange(event) {
    event.preventDefault();
    const { target } = event;

    this.setState((state) => ({
      todo: {
        ...state.todo,
        [target.name]: target.value,
      },
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { todo } = this.state;
    const { updateTodoAction, addTodoAction, history } = this.props;

    if (todo.id) {
      updateTodoAction(todo);
    } else {
      addTodoAction(todo);
    }

    history.push('/');
  }

  render() {
    const { todo: stateTodo } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-block">
          <Label text="Title" htmlFor="title" className="label-info" />
          <Input
            name="title"
            type="text"
            value={stateTodo.title}
            className="form-control"
            placeholder="Title"
            onChange={this.onChange}
          />
        </div>
        <div className="form-block">
          <Label text="Todo text" htmlFor="content" className="label-info" />
          <TextArea
            name="content"
            value={stateTodo.content}
            className="form-control-textarea"
            placeholder="Content"
            onChange={this.onChange}
          />
        </div>
        <input type="submit" className="form-button-submit" />
      </form>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoForm));
