import axios from "axios";
import { format } from "date-fns";

export type TodoType = {
  id: string;
  title: string;
  isDone: boolean;
  archivedAt?: string;
};

type TodoAttrsType = {
  title?: string;
  isDone?: boolean;
  archivedAt?: string;
};

const API_ENDPOINT = "https://p202-test.firebaseio.com";

export async function getTodos() {
  return await axios.get(`${API_ENDPOINT}/todos.json`);
}

export async function deleteTodo(id: string) {
  return axios.delete(`${API_ENDPOINT}/todos/${id}.json`);
}

export async function archiveTodo(id: string) {
  return axios.patch(`${API_ENDPOINT}/todos/${id}.json`, {
    archivedAt: format(new Date())
  });
}

export async function editTodo(id: string, attrs: TodoAttrsType) {
  return axios.patch(`${API_ENDPOINT}/todos/${id}.json`, attrs);
}

export async function markTodo(id: string, isDone: boolean) {
  return editTodo(id, { isDone });
}

export async function createTodo(title: string) {
  return axios.post(`${API_ENDPOINT}/todos.json`, { title });
}
