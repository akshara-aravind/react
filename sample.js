function App(props) {
    const hr=props.date.getHours();
    return (
      <div>
        Hello, {props.name} 
        {
            {hr}<12 && <div> Good Morning</div>
        }
        {
            {hr}>12 && {hr}<15 && <div> Good Afternoon</div>
        }
        {
            {hr}>15 && <div> Good Evening</div>
        }
      </div>
    );
   }
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const Greetings = <App name="Sara" date={new Date()} />;
  root.render(Greetings);