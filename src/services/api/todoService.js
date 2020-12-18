import axios from '../../utils/api';
import {
  TODO_ALL,
  TODO_CREATE,
  TODO_DETAIL,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
} from '../../constants/api';

const todoServices = {
  todoAllService: () => axios.get(TODO_ALL).then((response) => response),
  todoCreateService: (request) => axios.post(TODO_CREATE, request.payload)
    .then((response) => response),
  todoDetailService: (request) => axios.get(TODO_DETAIL.replace(':id', request.payload.id), request)
    .then((response) => response),
  todoToggleService: (request) => axios.put(TODO_TOGGLE.replace(':id', request.payload.id), request.payload)
    .then((response) => response),
  todoUpdateService: (request) => axios.put(TODO_UPDATE, request.payload)
    .then((response) => response),
  todoDeleteService: (request) => axios.delete(TODO_DELETE.replace(':id', request.payload))
    .then((response) => response),
};

export default todoServices;
