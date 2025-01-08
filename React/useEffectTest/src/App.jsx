import Card from "./assets/Card.jsx";
import salesman from "./hie/salesman.png";
import circle from "./hie/circle.png";
import triangle from "./hie/triangle.png";
import square from "./hie/square.png";
import frontman from "./hie/frontman.png";
import VIP from "./hie/VIP.png";

function App() {
  return (
    <div className="container">
      <Card
        image={salesman}
        name="Salesman"
        description="He'll slap you and recruit you. Basically make you prepared for the corporate world."
      />
      <Card
        image={circle}
        name="Pink Circle Guards"
        description="Not armed. They deliver food if you're alive. They deliver you out of the game if you're not."
      />
      <Card
        image={triangle}
        name="Pink Triangle Guards"
        description="They are armed. Be careful when they're around."
      />
      <Card
        image={square}
        name="Pink Square Guards"
        description="They are armed and can command the other 2 guards. They report to the frontman. (Naradmuni)."
      />
      <Card
        image={frontman}
        name="The Frontman"
        description="He shot is own brother. Don't expect much from him."
      />
      <Card
        image={VIP}
        name="VIPs"
        description="Basically the rich sadist relatives we have around us."
      />
    </div>
  );
}

export default App;
