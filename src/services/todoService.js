import axios from 'axios';
import {
  TODO_ALL,
  TODO_CREATE,
  TODO_DETAIL,
  TODO_UPDATE,
  TODO_DELETE,
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
  const data = axios.post(TODO_CREATE, request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response);

  return data;
};

export const todoDetailService = (request) => {
  const data = axios.get(TODO_DETAIL, request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response);

  return data;
};

export const todoUpdateService = (request) => {
  const data = axios.put(TODO_UPDATE, request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response);

  return data;
};

export const todoDeleteService = (request) => {
  const data = axios.delete(TODO_DELETE, request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response);

  return data;
};
