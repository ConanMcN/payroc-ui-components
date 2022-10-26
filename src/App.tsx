import "./App.css";
import { Button } from "./components/Button";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { Tabs } from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Button color="primary">Hello!</Button>

      <ButtonGroup>
        <Button color="primary">Submit</Button>
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
    </div>
  );
}

export default App;
