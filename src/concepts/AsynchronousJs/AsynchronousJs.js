import React, { useEffect } from "react";

function AsynchronousJs() {
  async function callApi() {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const result = await fetch(url);
    const data = await result.json();

    console.log("data", data);
  }

  useEffect(() => {
    callApi();
  }, []);

  return <div>AsynchronousJs</div>;
}

export default AsynchronousJs;
