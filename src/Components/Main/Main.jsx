import "./Main.css";
import Cards from "../Cards/Cards";
import { IMAGES } from "../../Assets/images";

const Main = () => {
  return (
    <main>
      <div className="container">
        <p>Click on an image, and they will be shuffled.</p>
        <p>Try not to click on any of them more than once!</p>
        <Cards images={IMAGES} />
      </div>
    </main>
  )
};

export default Main;
