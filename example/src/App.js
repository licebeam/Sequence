import React, { Component } from "react";
import "./index.css";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import {
  DropDown,
  Tag,
  Modal,
  ImageCircle,
  Image,
  Text,
  Button,
  CenteredColumnContainer,
  RowSection,
  Card,
  ColumnSectionWithHeader,
  ColumnSection,
  CardWithHeader,
  Input,
  RowSectionWithHeader,
  RowContainer,
  ColumnContainer
} from "sequence-ui";

class App extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    return (
      <div className="App">
        <CenteredColumnContainer>
          <RowSection>
            <Image imageURL={sequenceLogo} />
            <Text textSize="2">Sequence-ui</Text>
            <ColumnSection ratio={3} />
          </RowSection>
        </CenteredColumnContainer>
      </div>
    );
  }
}

export default App;
