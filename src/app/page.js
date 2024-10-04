"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setmaintask([...mainTask, { title, desc }]);
    setdesc("")
    settitle("")
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  let rendertask = <h2 className="font-semibold text-2xl "> No Task Avalable</h2>;

  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-5  bg-black  text-white rounded-xl px-4 py-4">
            <h5 className="text-2xl font-semibold"> Task {i+1}</h5>
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-xl font-semibold"> {t.desc}</h5>
            <button
              className="text-2xl rounded bg-red-500 px-3 py-2 "
              onClick={() => {
                {
                  deleteHandler(i);
                }
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white  text-center p-5 text-5xl text font-bold">
        My Todo-list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Task ..."
          className="border-neutral-800 border-2 rounded text-3xl px-3 py-3 mt-5 items-center ml-96"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder=" Task Description ..."
          className="border-neutral-800 border-2 rounded text-3xl px-3 py-3 mt-5 items-center ml-10  "
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-neutral-500  text-3xl px-3 py-3 ml-10 rounded text-white">
          Add Task
        </button>
      </form>
      <br />
      <hr className="border-2" />

      <div className=" p-8">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
