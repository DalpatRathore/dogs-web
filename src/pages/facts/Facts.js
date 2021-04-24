import React, { useState, useEffect } from "react";
import "./Facts.css";
import responseFacts from "../../fixtures/responseFacts";
import Photo from "../../components/photo/Photo";
import InfoBadge from "../../components/infoBadge/InfoBadge";
import Badge from "../../components/badge/Badge";
import Loader from "../../components/loader/Loader";
import axios from "axios";

const Facts = () => {
  const [loadingRecords, setLoadingRecords] = useState(true);
  const [facts, setFacts] = useState([]);

  // const facts = responseFacts;

  useEffect(() => {
    setLoadingRecords(true);
    axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then(response => {
        setFacts(response);
        setLoadingRecords(false);
      })
      .catch(error => console.log("Log Error >> ", error));

    return () => {
      console.log("Clean Up");
    };
  }, []);
  return (
    <div className="facts">
      {!loadingRecords && <h3>Exhibiting {facts.data.length} Records</h3>}

      {loadingRecords ? (
        <div className="facts__loaderContainer">
          <Loader loaderImg="/images/loader-1.gif"></Loader>
        </div>
      ) : (
        facts.data.map((fact, index) => (
          <div className="facts__container" key={fact.id}>
            <div className="facts__info">
              <div className="facts__badgeWrapper">
                <Badge serialNo={index + 1}></Badge>
              </div>
              <InfoBadge
                labelStatic="Name"
                labelDynamic={fact.name}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Breed Group"
                labelDynamic={fact.breed_group}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Origin"
                labelDynamic={fact.origin}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Temperament"
                labelDynamic={fact.temperament}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Bred For"
                labelDynamic={fact.bred_for}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Life Span"
                labelDynamic={fact.life_span}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Weight"
                labelDynamic={`Imperial: "${fact.weight.imperial}" & Metric: "${fact.weight.metric}"`}
              ></InfoBadge>
              <InfoBadge
                labelStatic=" Height"
                labelDynamic={`Imperial: "${fact.height.imperial}" & Metric: "${fact.height.metric}"`}
              ></InfoBadge>
            </div>
            <div className="facts__imageContainer">
              <h1>{fact.name}</h1>
              <div>
                <Photo imageUrl={fact.image.url} altName={fact.name}></Photo>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Facts;
