import Bio from "./components/Bio";
import Gallery, { Profile } from "./components/Gallery";
import Test from "./components/Test";

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
    </>
  );
}

export default App;
