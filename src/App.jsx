import Bio from "./components/Bio";
import Gallery, { Profile } from "./components/Gallery";
import ChalangeThree from "./components/JavaScriptInJSXWithCurllyBracess/ChallengeThree";
import ListItem from "./components/ListItem";
import PackingList from "./components/PackingList";
import Styleing from "./components/Styleing";
import Test from "./components/Test";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      {/* name expoet */}
      <Profile />

      {/* default Export */}
      <Gallery />

      <Test />

      {/* Chalange HTML To JSX */}
      <Bio />

      {/* ToDulist Function Challenge */}

      <ToDoList />

      {/* Styling IN JSX */}

      <Styleing />

      <ChalangeThree />

      <PackingList />

      <ListItem />
    </>
  );
}

export default App;
