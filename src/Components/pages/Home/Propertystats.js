import React, { useEffect, useState } from "react";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return <h2 style={{ color: "#FDAC5C" }} className="fw-bold">{count}</h2>;
};

const PropertyStats = () => {
  return (
    <div className="container text-center my-5">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <Counter end={200} />
          <p className="text-gray">Properties for sale</p>
        </div>
        <div className="col-md-3 text-center">
          <Counter end={300} />
          <p className="text-gray">Properties for sale</p>
        </div>
        <div className="col-md-3 text-center">
          <Counter end={15} />
          <p className="text-gray">Properties for sale</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyStats;