import { Redirect } from 'react-router-dom';
import BotCard from './BotCard';
import robot1 from './robot1.svg';
import robot2 from './robot2.svg';
import robot3 from './robot3.svg';
import robot4 from './robot4.svg';
import robot5 from './robot5.svg';
import './App.css';

const BotChooser = () => {
  return (
    <div className="App">
      <header className="BotChooser-header">
        <h1>Choose your Bot!</h1>
        {!localStorage.getItem('token') && <Redirect to={{pathname: "/"}} replace={true} />}
        <BotCard 
          imageSrc={robot1} 
          name="Botty McBotter" 
          purpose="washes dishes and tells jokes" 
          dislikes="classical music"
        />
        <BotCard 
          imageSrc={robot2} 
          name="Eggbot" 
          purpose="remembers passwords" 
          dislikes="forgetful people"
        />
        <BotCard 
          imageSrc={robot3} 
          name="Dysonbot" 
          purpose="cleans digital waste" 
          dislikes="messes"
        />
        <BotCard 
          imageSrc={robot4} 
          name="Insomnibot" 
          purpose="tells bedtime stories" 
          dislikes="the sun"
        />
        <BotCard 
          imageSrc={robot5} 
          name="Babybot" 
          purpose="keeps other bots in check" 
          dislikes="Insomnibot"
        />
      </header>
    </div>
  );
}

export default BotChooser;
