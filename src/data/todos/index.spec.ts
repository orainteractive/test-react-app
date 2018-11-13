import axiosMock from "axios";
import * as todos from "./index";

jest.mock("axios");

describe("todos", () => {
  test("getTodos", async () => {
    (axiosMock.get as any).mockResolvedValueOnce({
      data: { abc123: { title: "foo" } }
    });
    const res = await todos.getTodos();
    expect(axiosMock.get).toHaveBeenCalled();
    expect(axiosMock.get).toHaveBeenCalledWith(
      `${todos.API_ENDPOINT}/todos.json`
    );
    expect(res).toEqual({ data: { abc123: { title: "foo" } } });
  });
});
