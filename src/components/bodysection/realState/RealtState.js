import React from "react";
import StateCard from "./StateCard";

function RealtState() {
  const states = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description:
        "Lorem ipsum dolor sit  elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

      title: "15421 Southwest 39th Terrace",
      price: 3850,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description:
        "Lorem ipsum dolor sit amet consicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

      title: "700 Front Street, Key west, FL",
      price: 58000,
    },
    {
      id: 3,
      image:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description:
        "Lorem ipsum et consectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

      title: "1903 Hollywood Boulevard",
      price: 778000,
    },
    {
      id: 4,
      image:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description:
        "Lorem ipsum dolor sectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

      title: "401 Biscayne Boulevard, Miami",
      price: 3250,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {states.map((item) => (
          <StateCard
            key={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RealtState;
