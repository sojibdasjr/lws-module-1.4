function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li className="item">{name} ✔</li>;
  // }
  return (
    <li className="item"> {isPacked ? <del>{name + "✔"}</del> : name} </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={false} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Note
// const lang = "JavaScript1";
// const result1 = lang && "javaScript"; // left side truthy hole right side return korbe, otherwise left site return korbe
// const result2 = lang || "javaScript"; // left side falsy hole right side return korbe, otherwise left site return korbe

// const result3 = lang ?? "javaScript"; // Nullish coalescing Operation: left side nullish (Null or Undefined) hole right side returnkorbe, otherwise left side return korbe
// console.log(result1);
// console.log(result2);
// console.log(result3);
