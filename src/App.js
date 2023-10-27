import { useTypewriter, Cursor } from 'react-simple-typewriter';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';

import './App.css';

function App() {
  // const [typeEffect] = useTypewriter({
  //   words: ['Software Engineer', 'Full-Stack Developer', '.Net Developer'],
  //   loop:{},
  //   typeSpeed: 100,
  //   deleteSpeed: 40
  // })
  return (
    <div className="App">
    {/* //   <h4 style={{color: 'green'}}>
    //     I'm a 
    //   </h4>
    //     <span style={{fontweight: 'bold', color:'green', marginleft:'5px'}}>{typeEffect}</span> */}
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
}

export default App;
