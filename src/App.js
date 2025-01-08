import './App.css';
import Board from './Components/Board';

const App = () => {

  const handleClick = () => {
    window.dataLayer.push({
      event: 'custom_event_name', // The name of your event
      eventCategory: 'user_action', // Optional: Custom parameters
      eventAction: 'button_click',
      eventLabel: 'Luffy clicked a button'
    });
  };

  return (
    <div className='app'>
      <Board />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
