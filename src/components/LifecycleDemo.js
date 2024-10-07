import React from 'react';

// Створюємо класовий компонент для демонстрації життєвого циклу
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor: Компонент створено');
  }

  // Викликається перед кожним рендером (монтуванням або оновленням)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Оновлення стану на основі нових props');
    return null;
  }

  // Рендеримо інтерфейс компонента
  render() {
    console.log('render: Рендер компонента');
    return (
      <div>
        <h1>Життєвий цикл компонентів у React</h1>
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Збільшити</button>
      </div>
    );
  }

  // Викликається відразу після того, як компонент змонтований у DOM
  componentDidMount() {
    console.log('componentDidMount: Компонент змонтовано');
  }

  // Викликається після оновлення компоненту (зміни state або props)
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Компонент оновлено');
    if (prevState.count !== this.state.count) {
      console.log(`Лічильник змінився з ${prevState.count} на ${this.state.count}`);
    }
  }

  // Викликається перед тим, як компонент буде видалений з DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Компонент розмонтовується');
  }

  // Метод для обробки події кнопки
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
}

export default LifecycleDemo;
