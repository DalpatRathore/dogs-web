import React from "react";
import "./Facts.css";
import responseFacts from "../../fixtures/responseFacts";

const Facts = () => {
  const facts = responseFacts;
  console.log("facts :>> ", facts);
  return (
    <div className="facts">
      {facts.data.map(fact => (
        <div className="facts__container" key={fact.id}>
          <div className="facts__info">
            <h1>Name: {fact.name} </h1>
            <h2>Breed Group : {fact.breed_group}</h2>
            <h2>Origin :{fact.origin}</h2>
            <h3>Temperament :{fact.temperament}</h3>
            <h4>Bred For :{fact.bred_for}</h4>
            <h4>Life Span :{fact.life_span}</h4>

            <h5>
              Weight : Imperial {fact.weight.imperial} && metric{" "}
              {fact.weight.metric}
            </h5>
            <h5>
              Height : Imperial {fact.height.imperial} && metric{" "}
              {fact.height.metric}
            </h5>
          </div>
          <div className="facts__image">
            <img src={fact.image.url} alt={fact.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;

// Name: "Affenpinscher",
// Breed Group: "Toy",
// Origin: "Germany, France",
// Temperament:"Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
// Bred For: "Small rodent hunting, lapdog",
// Life Span: "10 - 12 years",
// Weight: {imperial: "6 - 13", metric: "3 - 6"},
// Height: {imperial: "9 - 11.5", metric: "23 - 29",}
