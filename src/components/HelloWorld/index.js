import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* insert logo devcode on img element */}
      <img src={devcodeLogo} alt="Devcode logo" />
      <div data-cy="hello-world-title">
        {/* insert header element here */}
        <h1>Welcome to Devcode!</h1>
      </div>
    </div>
  );
};
