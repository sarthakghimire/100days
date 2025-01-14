import Card from "./assets/Card.jsx";
import salesman from "./hie/salesman.png";
import circle from "./hie/circle.png";
import triangle from "./hie/triangle.png";
import square from "./hie/square.png";
import frontman from "./hie/frontman.png";
import VIP from "./hie/VIP.png";

// useNavigate vs <NavLink>

const App = () => {
  const data = [
    {
      id: 1,
      image: salesman,
      name: "Salesman",
      description:
        "He'll slap you and recruit you. Basically make you prepared for the corporate world.",
    },
    {
      id: 2,
      image: circle,
      name: "Pink Circle Guards",
      description:
        "Not armed. They deliver food if you're alive. They deliver you out of the game if you're not.",
    },
    {
      id: 3,
      image: triangle,
      name: "Pink Triangle Guards",
      description: "They are armed. Be careful when they're around.",
    },
    {
      id: 4,
      image: square,
      name: "Pink Square Guards",
      description:
        "They are armed and can command the other 2 guards. They report to the frontman.",
    },
    {
      id: 5,
      image: frontman,
      name: "The Frontman",
      description: "He shot his own brother. Don't expect much from him.",
    },
    {
      id: 6,
      image: VIP,
      name: "VIPs",
      description: "Basically the rich sadist relatives we have around us.",
    },
  ];
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <Card
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default App;
