import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Main from "./components/Main";
import { data } from "../data";
import Gallery from "./components/Gallery";
import SubTitle from "./components/Subtitle";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import { data2 } from "../data2";
import Footer from "./components/Footer";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Header>
        <Title title="Wolverine" />
      </Header>

      <Main>
        <SubTitle text="X weapon" />
        <List>
      
          <Paragraph text="James Howlett" />
          <Image src={"https://sm.ign.com/t/ign_latam/screenshot/default/marvel-comics-return-of-wolverine-miniseries-announced-will_8b1r.1200.jpg"} height="300px" width="300px"/>
          <Paragraph text="Alive" />
          <Paragraph text="Canada" />
        </List>
      </Main>
      
      <Footer author={"Juansa"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"} copyright={"Copyright by Marvel"}/>

    </div>
  );
}

export default App;
