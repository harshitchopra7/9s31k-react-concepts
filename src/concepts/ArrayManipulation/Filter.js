import React, { useState } from "react";

const people = [
  {
    id: "1",
    name: "People 1",
    age: 10,
  },
  {
    id: "2",
    name: "People 2",
    age: 30,
  },
  {
    id: "3",
    name: "People 3",
    age: 25,
  },
  {
    id: "4",
    name: "People 4",
    age: 50,
  },
  {
    id: "5",
    name: "People 5",
    age: 5,
  },
  {
    id: "6",
    name: "People 6",
    age: 21,
  },
];

// filter

function Filter() {
  const [peopleData, setPeopleData] = useState(people);

  function handleShowPeopleWhoCanVoteClick() {
    const filteredData = peopleData.filter((value) => value.age < 18);

    const tempArray = [
      {
        id: "2",
        name: "People 2",
        age: 30,
      },
      {
        id: "3",
        name: "People 3",
        age: 25,
      },
      {
        id: "4",
        name: "People 4",
        age: 50,
      },
      {
        id: "6",
        name: "People 6",
        age: 21,
      },
    ];

    // syntax
    // Array.fiter(val => condition to be true)

    console.log("filteredData", filteredData);

    setPeopleData(filteredData);
  }

  return (
    <div>
      <button onClick={() => handleShowPeopleWhoCanVoteClick()}>
        Show people who can vote
      </button>

      {peopleData.map((val, index) => (
        <div style={{ marginBottom: "20px" }}>
          <p>Name: {val.name}</p>
          <p>Age: {val.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
