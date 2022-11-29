// import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* insert logo devcode on img element */}
      {/* <img src={} alt="Devcode logo" /> */}
      <div data-cy="hello-world-title">{/* insert header element here */}</div>
    </div>
  );
};
