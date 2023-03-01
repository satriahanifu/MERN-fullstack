import http from "../http-common";

const getAllTodos = () => {
  return http.get("/todos");
};

const getAllCates = () => {
  return http.get("/categories");
};

const AllServices = {
  getAllTodos,
  getAllCates,
};

export default AllServices;
