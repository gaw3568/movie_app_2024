import React from 'react';

// 클래스형 컴포넌트
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => (
      { count: current.count + 1 }
    ));
  }

  minus = () => {
    this.setState(current => (
      { count: current.count - 1 }
    ));
  }

  // 컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount() {
    console.log('component rendered');
  }

  // 업데이트 생명주기 함수
  componentDidUpdate() {
    console.log('I just updated');
  }

  // 컴포넌트가 죽을 때의 unMount
  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  // JSX를 반환하기 위해서 render() 함수 사용
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
