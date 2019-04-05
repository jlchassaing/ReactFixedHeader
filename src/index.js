import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FixedMenuContext, FixedMenuContextProvider } from "./FixedMenu";

import "./styles.css";

const Header = function({ items }) {
  const { isFixed, isMobile } = useContext(FixedMenuContext);

  return (
    <nav className={`${isFixed ? "fixed" : ""} ${isMobile ? "mobile" : ""}`}>
      <ul style={isFixed ? { backgroundColor: "red" } : {}}>
        {items.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <FixedMenuContextProvider
        limit={10}
        mobileDetectionMediaQuery={"(max-width: 400px)"}
      >
        <Header items={["tata"]} />
      </FixedMenuContextProvider>

      <h1>Hello CodeSandbox </h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non magna
        est. Nunc id euismod lacus. Nam id felis vitae quam sagittis elementum
        consequat eu massa. Aliquam hendrerit consectetur lectus, a mattis felis
        pulvinar quis. Nunc facilisis mauris ipsum. Fusce a lectus quis neque
        vehicula molestie eget vel felis. Quisque non ligula id erat posuere
        rhoncus eget et ligula. Quisque ultricies neque a dapibus aliquet. Nunc
        tempor leo posuere imperdiet vehicula. Praesent lacinia magna ut eros
        vehicula, ac tristique nisl posuere. Nullam mollis auctor bibendum.
        Mauris eget risus eget ipsum elementum scelerisque.
      </p>
      <p>
        Vestibulum dignissim orci quis mattis euismod. Donec posuere nisl eget
        sapien bibendum, maximus elementum eros tincidunt. Sed pharetra tortor
        risus, a condimentum orci interdum ut. Suspendisse gravida maximus
        mauris, vel aliquet nunc semper eu. Vestibulum et felis metus. Proin
        ultrices lobortis quam, cursus dapibus orci. Aenean venenatis finibus
        vestibulum. Mauris eu metus sapien. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Quisque varius
        varius hendrerit.
      </p>
      <p>
        Morbi placerat blandit libero in aliquam. Aliquam erat volutpat. Nulla
        vestibulum nisl maximus mauris vestibulum, ac blandit tellus vulputate.
        Maecenas malesuada ut lacus eget tristique. Phasellus gravida urna sem,
        at feugiat dolor ornare eu. Phasellus nec congue ex, ac accumsan ipsum.
        Etiam viverra est nec urna fermentum, id pellentesque sapien accumsan.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        hendrerit purus eu venenatis auctor. Nullam ac ultricies nibh. Proin
        eleifend, leo ac maximus porta, quam libero pellentesque felis, ut
        imperdiet ante nunc eget elit. Proin quis vehicula massa, at vulputate
        sem. Etiam scelerisque est sit amet nibh tempor consequat. Donec quis
        augue ullamcorper ex elementum varius iaculis scelerisque massa.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Pellentesque justo ex, malesuada ac blandit sit
        amet, faucibus id ante. Nam rutrum mi vel quam gravida, in tempor massa
        scelerisque. Vivamus id mi sapien. Sed iaculis mattis tortor non ornare.
        Suspendisse tortor velit, sagittis a feugiat nec, imperdiet scelerisque
        orci. Duis faucibus felis ut purus vulputate fringilla. Nam sed ligula
        sit amet metus mattis aliquet sed sed mi.{" "}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
