// uncomment this line
// import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* insert devcode logo source to img element */}
      {/* <img data-cy="devcode-logo" src={} alt="devcode logo" /> */}
      <div data-cy="devcode-title">{/* insert header element here */}</div>
    </div>
  );
};
