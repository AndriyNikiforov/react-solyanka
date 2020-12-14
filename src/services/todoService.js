import axios from 'axios';
import {
  TODO_ALL,
  TODO_CREATE,
  TODO_DETAIL,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE,
} from '../constants/api';

export const todoAllService = () => {
  const data = axios.get(TODO_ALL, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response);

  return data;
};

export const todoCreateService = (request) => {
  const data = axios.post(TODO_CREATE, request.payload)
    .then((response) => response);

  return data;
};

export const todoDetailService = (request) => {
  const data = axios.get(TODO_DETAIL.replace(':id', request.payload.id), request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response);

  return data;
};

export const todoToggleService = (request) => {
  const data = axios.put(TODO_TOGGLE, request.payload)
    .then((response) => response);

  return data;
};

export const todoUpdateService = (request) => {
  const data = axios.put(TODO_UPDATE, request.payload)
    .then((response) => response);

  return data;
};

export const todoDeleteService = (request) => {
  const data = axios.delete(TODO_DELETE.replace(':id', request.payload))
    .then((response) => response);

  return data;
};
