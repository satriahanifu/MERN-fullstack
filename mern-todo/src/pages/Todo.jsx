import React, { useEffect, useState } from "react";
import "../style.css";
import AllServices from "../utils/services";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [newtodo, setNewTodo] = useState("");
  const [categories, setCategories] = useState([]);

  const [taskchecked, setTaskChecked] = useState();

  const dumCate = [
    { body: "urgent", key: 1 },
    { body: "work", key: 2 },
    { body: "mangan", key: 3 },
  ];
  // const dumTask = ["mbadog", "turu", "nelek"];

  const getAllTodos = () => {
    AllServices.getAllTodos()
      .then((res) => {
        setTodo(res.data);
        console.log(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAllCates = () => {
    AllServices.getAllCates()
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
        // console.log(categories);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllTodos();
    getAllCates();
  }, []);

  // const getCate = () => {
  //   getRequest("/category").then((res) => {
  //     category: res;
  //   });
  // };

  // handletask buat koleksi todo
  // const handleTask = (e) => {
  //   let updatedList = [];
  //   if (e.taget.checked) {
  //     updatedList = [e.target.value];
  //   } else {
  //     updatedList.splice();
  //   }
  //   setTodo(updatedList);
  //   console.log(handleTask);
  // };

  const handleCheck = (e) => {
    var updatedList = "";
    if (e.target.checked) {
      updatedList = e.target.value;
    } else {
      updatedList = "";
    }
    setCategories(updatedList);
    console.log(updatedList);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { id: todo.length + 1, todo: newtodo, category: categories };
    // setTodo((todo) => [...todo, data]);
  };
  // console.log("todo");
  // console.log("panjang data todo: ", todo.length + 1);

  // const isChecked = (item) => {
  //   checked.includes(item) ? "checked-item" : "unchecked";
  // };

  return (
    <div className="w-[1440px] h-[1024px] bg-[FAFAFA] mx-auto">
      <form onSubmit={submitHandler}>
        <div className="flex col">
          <div>
            <div className="pl-[144.5px] pt-[164.66px] w-[440px]">
              <label className="w-[119px] h-[36px] text-[30px] font-[700] mb-[30px]">All task</label>

              {/* were talkin about categories */}
              <ul>
                {dumCate.map((item) => (
                  <div key={item.key}>
                    <input className="bg-transparent hover:bg-gray-300 cursor-pointer w-12 h-12 border-[3px] border-[#EB5757] focus:outline-none rounded-lg mr-[6px]" type="checkbox" value={item.body} />
                    <label className="$[text-[30px] font-[400] content-center]">{item.body}</label>
                  </div>
                ))}

                {/* {category.map((item) => (
                  <li className="items-center flex" key={item._id}>
                    <input
                      className=" h-4 w-4 border border-gray-300 rounded-sm bg-transparent checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-[16px]"
                      type="radio"
                      value={item.body}
                      onChange={handleCheck}
                      name="category"
                    />
                    <label className="form-check-label inline-block text-gray-800 text-[30px] font-[400]">{item.body}</label>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
          {/* sisi kanan */}
          <div>
            <div className="pl-[38.24px] pt-[84.16px]">
              <h3 className="w-[199px] h-[60px] text-[50px] font-[700] mb-[27px]">All Task</h3>
              <div className="mb-[27px] content-center flex justify-around">
                {/* {inputan todo} */}
                <input className="w-[716px] h-[58px] rounded-[6px] bg-[#E1DEDE]" type="text" onChange={(e) => setNewTodo(e.target.value)} />
                <input
                  className="w-[100px] h-[58px] inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-[#1571DE] shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  type="submit"
                />
              </div>
              {/* isi task */}
              <div>
                {todo.map((item) => (
                  <div key={item._id}>
                    <input className="bg-transparent hover:bg-gray-300 cursor-pointer w-12 h-12 border-[3px] border-[#EB5757] focus:outline-none rounded-lg mr-[6px]" type="checkbox" value={item.todo} />
                    <label className="$[text-[30px] font-[400] content-center]">{item.body}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Todo;
