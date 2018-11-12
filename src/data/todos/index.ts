import axios from "axios";

export type TodoType = {
  id: string;
  title: string;
  isDone: boolean;
  archivedAt?: string;
};

export type TodoAttrsType = {
  title: string;
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

export async function editTodo(id: string, attrs: TodoAttrsType) {
  return axios.patch(`${API_ENDPOINT}/todos/${id}.json`, attrs);
}

export async function createTodo(attrs: TodoAttrsType) {
  return axios.post(`${API_ENDPOINT}/todos.json`, attrs);
}
