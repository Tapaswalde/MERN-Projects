import { useState } from "react";

const SingleAccord = ({ details }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="container">
      <h1>Single Accordion</h1>

      {details && details.length > 0 ? (
        details.map((item) => (
          <div key={item.id}>
            <h2>{item.question}</h2>

            <button onClick={() => handleSelect(item.id)}>
              {selected === item.id ? "-" : "+"}
            </button>

            {selected === item.id && (
              <p>{item.answer}</p>
            )}
          </div>
        ))
      ) : (
        <h2>No data found</h2>
      )}
    </div>
  );
};

export default SingleAccord;