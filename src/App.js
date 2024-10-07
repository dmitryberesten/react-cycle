import React from "react";
import LifecycleDemo from "./components/LifecycleDemo"; // Імпортуємо наш компонент

// Компонент ErrorBoundary для обробки помилок
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Ловимо помилки у дочірніх компонентах
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("componentDidCatch:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Щось пішло не так </h1>;
    }
    return this.props.children;
  }
}

// Головний компонент App
function App() {
  return (
    <ErrorBoundary>
      <LifecycleDemo />
    </ErrorBoundary>
  );
}

export default App;
