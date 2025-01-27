const seatsData = [
  {
    party: "Nepali Congress",
    seats: 88,
    color: "green",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/12546c14ae29ecbfaba3b1a43eae348b.png",
  },
  {
    party: "CPN (UML)",
    seats: 79,
    color: "red",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/6b7dda8cb6d568118b81a863360ebf92.png",
  },
  {
    party: "CPN (Maoist Centre)",
    seats: 32,
    color: "crimson",
    image: "https://assets-localelection2079.ekantipur.com/parties/MAOBADI.png",
  },
  {
    party: "Rastriya Swatantra Party",
    seats: 21,
    color: "skyblue",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMZEglpivsdT-mXNDGRlaewmGjAbKPTSFeg&s",
  },
  {
    party: "Rastriya Prajatantra Party",
    seats: 14,
    color: "yellow",
    image:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2015/others/20150202rpp-nepal-warns-of-quitting-ca-process.jpg&w=900&height=601",
  },
  {
    party: "CPN (Unified Socialist)",
    seats: 10,
    color: "lightpink",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/Nepal_Communist_Party_Ekikrit_Samajbadi.png",
  },
  {
    party: "People's Socialist Party",
    seats: 7,
    color: "purple",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/Janata_Samajparty_Party_Nepal.png",
  },
  {
    party: "Janamat Party",
    seats: 6,
    color: "darkred",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnw2u0WrP6FELEpCtH_EsgJl2xaXnLmvruw&s",
  },
  {
    party: "People's Socialist Party, Nepal",
    seats: 5,
    color: "lightblue",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/4db89c62d4fc494b367625f44cff626a.png",
  },
  {
    party: "Loktantrik Samajwadi Party, Nepal",
    seats: 4,
    color: "lightgreen",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/Loktantrik_Samanbadi_Party_Nepal.png",
  },
  {
    party: "Nagrik Unmukti Party",
    seats: 4,
    color: "gray",
    image:
      "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/NagarikUnmuktiParty_20230207142847.jpg",
  },
  {
    party: "Nepal Majdoor Kisan Party",
    seats: 1,
    color: "crimson",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/4db89c62d4fc494b367625f44cff626a.png",
  },
  {
    party: "Rastriya Janamorcha",
    seats: 1,
    color: "maroon",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/4db89c62d4fc494b367625f44cff626a.png",
  },
  {
    party: "Aam Janata Party",
    seats: 1,
    color: "brown",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/4db89c62d4fc494b367625f44cff626a.png",
  },
  {
    party: "Independent",
    seats: 2,
    color: "none",
    image:
      "https://assets-localelection2079.ekantipur.com/parties/4db89c62d4fc494b367625f44cff626a.png",
  },
];

let totalSeats = 0;
for (let i = 0; i < seatsData.length; i++) {
  totalSeats += seatsData[i].seats;
}

export default seatsData;
export { totalSeats };
