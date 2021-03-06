import React, { useState, useEffect } from "react";
import "./Facts.css";
import Photo from "../../components/photo/Photo";
import InfoBadge from "../../components/infoBadge/InfoBadge";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { InView } from "react-intersection-observer";
import ErrorMessage from "../../components/error-message/ErrorMessage";
import ScrollProgress from "../../components/scroll-progress/ScrollProgress";

const paginationVariants = {
  enter: {
    x: "-100vw",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const Facts = () => {
  const [loadingRecords, setLoadingRecords] = useState(true);
  const [someError, setSomeError] = useState(false);
  const [facts, setFacts] = useState([]);
  const [count, setCount] = useState(0);

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

  useEffect(() => {
    setLoadingRecords(true);
    const source = axios.CancelToken.source();
    axios
      .get(`https://api.thedogapi.com/v1/breeds?limit=25&page=${count}`, {
        cancelToken: source.token,
      })
      .then(response => {
        setFacts(response.data);
        setLoadingRecords(false);
        setSomeError(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(" >> request cancelled ");
        } else {
          console.log(error);
          setLoadingRecords(false);
          setSomeError(true);
        }
      });

    return () => {
      source.cancel();
    };
  }, [count]);
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  if (loadingRecords) {
    return (
      <div className="facts">
        <div className="facts__loaderContainer">
          <Loader loaderImg="/images/loader-1.gif"></Loader>
        </div>
      </div>
    );
  }
  if (someError) {
    return (
      <div className="facts">
        <div className="facts__errorMsgContainer">
          <ErrorMessage></ErrorMessage>
        </div>
      </div>
    );
  }

  return (
    <div className="facts">
      <div className="facts__pagination">
        <span className="facts__scrollProgressContainer">
          <ScrollProgress
            isComplete={isComplete}
            pathLength={pathLength}
          ></ScrollProgress>
        </span>
        <motion.div
          variants={paginationVariants}
          initial="enter"
          animate="center"
        >
          <span
            className={
              count > 0 ? "facts__chevron" : "facts__chevron--disabled"
            }
            onClick={() => setCount(0)}
          >
            <FiChevronsLeft className="facts__chevronIcon"></FiChevronsLeft>
          </span>
          <span
            className={
              count > 0 ? "facts__btnCount" : "facts__btnCount--disabled"
            }
            onClick={decreaseCount}
          >
            Prev
          </span>
          <div className="facts__result">
            <span>{count + 1}/7</span>
            <span>Pages</span>
          </div>

          <span
            className={
              count < 6 ? "facts__btnCount" : "facts__btnCount--disabled"
            }
            onClick={increaseCount}
          >
            Next
          </span>
          <span
            className={
              count < 6 ? "facts__chevron" : "facts__chevron--disabled"
            }
            onClick={() => setCount(6)}
          >
            <FiChevronsRight className="facts__chevronIcon"></FiChevronsRight>
          </span>
        </motion.div>
      </div>
      <div className="facts__containerOverflow">
        {facts.map((fact, index) => (
          <InView threshold={0} triggerOnce="true" key={fact.id}>
            {({ inView, ref }) => (
              <motion.div
                className="facts__container"
                ref={ref}
                initial={{ x: "100%", opacity: 0 }}
                animate={inView && { x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", bounce: 0.3, duration: 0.8 },
                  opacity: { duration: 0.5 },
                }}
              >
                <div className="facts__info">
                  <div className="facts__badgeWrapper">
                    <span>{index + 1}</span>
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
                  <h1 className="facts__nameHeading">{fact.name}</h1>
                  <div>
                    <Photo
                      imageUrl={fact.image.url}
                      altName={fact.name}
                    ></Photo>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Facts;
