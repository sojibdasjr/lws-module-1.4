import React from "react";
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const ListItem = () => {
  const chemists = people.filter(
    (chemist) => chemist.profession === "physicist"
  );
  const listPeople = chemists.map((chemist) => <li>{chemist.name}</li>);
  return (
    <div>
      <ul>{listPeople}</ul>
    </div>
  );
};

export default ListItem;
