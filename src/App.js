import "./App.css";
import WelcomeDialogue from "./components/composition_vs_inheritance/WelcomeDialogue";
import NameForm from "./components/form";
import UseEffectHook from "./components/hooks/useEffect";
import Lifecycle from "./components/lifecycle";
import ListKeys from "./components/listAndKeys";
import ReactRouting from "./components/routing/reactRouting";

function App() {
  var numbers = [1, 2, 3, 4];
  return (
    <div>
      <NameForm />
      <Lifecycle />
      <ListKeys numbers={numbers} />
      <WelcomeDialogue />
      <UseEffectHook />
      <ReactRouting />
    </div>
  );
}

export default App;
