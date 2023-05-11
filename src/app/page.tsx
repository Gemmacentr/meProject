import Card from "./components-layout/cards/card";
import Main from "./components-layout/main/main";

import NavBar from "./components-layout/partial/navTop/navBar/navBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <Main />

      <main className="f">
        <Card title={""} description={""} img={undefined} />
      </main>
    </>
  );
}
