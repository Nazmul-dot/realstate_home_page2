// import React from "react";
// import StateCard from "./StateCard";

// function RealtState() {
//   const states = [
//     {
//       id: 1,
//       image:
//         "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
//       description:
//         "Lorem ipsum dolor sit  elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

//       title: "15421 Southwest 39th Terrace",
//       price: 3850,
//     },
//     {
//       id: 2,
//       image:
//         "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
//       description:
//         "Lorem ipsum dolor sit amet consicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

//       title: "700 Front Street, Key west, FL",
//       price: 58000,
//     },
//     {
//       id: 3,
//       image:
//         "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
//       description:
//         "Lorem ipsum et consectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

//       title: "1903 Hollywood Boulevard",
//       price: 778000,
//     },
//     {
//       id: 4,
//       image:
//         "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
//       description:
//         "Lorem ipsum dolor sectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",

//       title: "401 Biscayne Boulevard, Miami",
//       price: 3250,
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="row">
//         {states.map((item) => (
//           <StateCard
//             key={item.id}
//             image={item.image}
//             description={item.description}
//             title={item.title}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RealtState;


import React, { useState, useEffect } from "react";
import StateCard from "./StateCard";
import ReactPaginate from 'react-paginate';
import './RealtState.css'; // Import CSS for custom styles if needed

function RealtState() {
  const itemsPerPageMediumAndLarge = 4;
  const itemsPerPageSmall = 1;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageMediumAndLarge);

  const states = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description: "Lorem ipsum dolor sit  elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "15421 Southwest 39th Terrace",
      price: 3850,
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description: "Lorem ipsum dolor sit amet consicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "700 Front Street, Key west, FL",
      price: 58000,
    },
    {
      id: 3,
      image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description: "Lorem ipsum et consectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "1903 Hollywood Boulevard",
      price: 778000,
    },
    {
      id: 4,
      image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description: "Lorem ipsum dolor sectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "401 Biscayne Boulevard, Miami",
      price: 3250,
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description: "Lorem ipsum dolor sit  elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "615421 Southwest 39th Terrace",
      price: 3850,
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
      description: "Lorem ipsum dolor sit amet consicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "2700 Front Street, Key west, FL",
      price: 58000,
    },
    {
      id: 7,
      image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description: "Lorem ipsum et consectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "31903 Hollywood Boulevard",
      price: 778000,
    },
    {
      id: 8,
      image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlYWm503BNBYbTaJS7q05g6Wsz64rtgkSpwTCKCySK3fCALCNG9_rQ_RVAJoerzBYlK0oJKME-F_7yUEqETN4",
      description: "Lorem ipsum dolor sectetur adipisicing elit. Cum maiores cupiditate nihil? Ducimus aliquam, minus eum consectetur totam cum id? ",
      title: "4401 Biscayne Boulevard, Miami",
      price: 3250,
    },
    // Add more items here
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(itemsPerPageSmall);
      } else {
        setItemsPerPage(itemsPerPageMediumAndLarge);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reset current page when items per page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  const pageCount = Math.ceil(states.length / itemsPerPage);
  const displayedItems = states.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <div className="row">
        {displayedItems.map((item) => (
          <StateCard
            key={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default RealtState;
