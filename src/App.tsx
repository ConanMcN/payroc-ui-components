import "./App.css";
import { Button } from "./components/Button";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { Tabs } from "./components/Tabs";
import { Text } from "./components/Text";

function App() {
  return (
    <div className="App">
      <Button color="primary">Hello!</Button>

      <ButtonGroup>
        <Button color="primary">Submit</Button>
        <Button color="secondary">Submit</Button>
        <Button color="transparent">Close</Button>
      </ButtonGroup>

      <Tabs
        tabs={[
          {
            content: <p>hello!</p>,
            title: "First tab",
          },
          {
            content: <p>bonjour!</p>,
            title: "Second tab",
          },
          {
            content: <p>oh no!</p>,
            title: "Disabled",
            disabled: true,
          },
        ]}
      />

      <Text variant="h1">H1</Text>
      <Text variant="h2">H2</Text>
      <Text variant="h3">H3</Text>
      <Text variant="h4">H4</Text>
      <Text variant="h5">H5</Text>
      <Text variant="subtitle">Subtitle</Text>
      <Text>
        Velit aliquip adipisicing excepteur quis. Dolore duis sunt est proident.
        Voluptate laboris deserunt deserunt mollit mollit voluptate ea do qui
        nisi. Adipisicing cillum est eu dolor consequat elit incididunt
        cupidatat tempor.
      </Text>
    </div>
  );
}

export default App;
