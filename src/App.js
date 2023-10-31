import PortfolioContainer from './PortfolioContainer/PortfolioContainer';

import './App.css';

function App() {
  // const [typeEffect] = useTypewriter({
  //   words: ['Software Engineer', 'Full-Stack Developer', 'Team Player'],
  //   loop:{},
  //   typeSpeed: 100,
  //   deleteSpeed: 40
  // })
  return (
    <div className="App">
         {/* <span style={{fontweight: 'bold', color:'green', marginleft:'5px'}}>{typeEffect}</span> */}
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
}

export default App;
