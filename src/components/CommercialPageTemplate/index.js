import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import "./styles.scss";

import InfoBlock from "../InfoBlock";

const CommercialPageTemplate = ({
  title,
  subtitleTop,
  subtitleLinks,
  meta_title,
  meta_description,
  asbestosBlock,
  commercialInspectionBlock,
  leadBlock,
  radonBlock,
  waterAnalysisBlock,
  clandestineDrugBlock,
  moldBlock,
  airQualityBlock,
  pricingBlock,
  titleRef,
  buttonRef,
  commercialSubsection1,
  commercialSubsection2,
  commercialSubsection3,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <section className="hero commercial-hero ">
        <div className="hero-body">
          <div ref={titleRef} className="container box commercial-title">
            <h1 className="title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered ">
              {title}
            </h1>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="section section--gradient">
          <h3 className="subtitle has-text-centered">{subtitleTop}</h3>
          <hr />
          <div className="content has-text-centered">
            <Link
              className="button is-large is-primary has-text-centered"
              to="/contact"
            >
              {pricingBlock.title}
            </Link>
          </div>
          <hr />
          <div className="columns">
            <div className="column ">
              <figure className="image is-square">
                <img
                  src={commercialInspectionBlock[0].image}
                  alt={commercialInspectionBlock[0].title}
                />
              </figure>
              <h3 className="subtitle has-text-centered">
                {commercialInspectionBlock[0].title}
              </h3>
              <p className="has-text-centered">
                {commercialInspectionBlock[0].text}
              </p>
            </div>
            <div className="column ">
              <figure className="image is-square">
                <img
                  src={commercialInspectionBlock[1].image}
                  alt={commercialInspectionBlock[1].title}
                />
              </figure>
              <h3 className="subtitle has-text-centered">
                {commercialInspectionBlock[1].title}
              </h3>
              <p className="has-text-centered">
                {commercialInspectionBlock[1].text}
              </p>
            </div>
            <div className="column ">
              <figure className="image is-square">
                <img
                  src={commercialInspectionBlock[2].image}
                  alt={commercialInspectionBlock[2].title}
                />
              </figure>
              <h3 className="subtitle has-text-centered">
                {commercialInspectionBlock[2].title}
              </h3>
              <p className="has-text-centered">
                {commercialInspectionBlock[2].text}
              </p>
            </div>
          </div>
          <hr />
          <div className="content">
            <h2 className="title is-1 has-text-centered">
              {commercialSubsection1.title}
            </h2>
            <div className="section">
              <h3 className="subtitle has-text-centered content">
                {commercialSubsection1.text}
              </h3>
            </div>
          </div>
          <hr />
        </section>
        <div className="content">
          <h2 className="title is-1 has-text-centered">
            {commercialSubsection2.title}
          </h2>
          <h3 className="subtitle has-text-centered content">
            {commercialSubsection2.text}
          </h3>
        </div>
        <section className="section section--gradient " id="asbestos">
          <InfoBlock content={asbestosBlock} smallImg={true} />
        </section>
        <section className="section section--gradient " id="lead">
          <InfoBlock content={leadBlock} smallImg={true} />
        </section>
        <section className="section section--gradient " id="mold">
          <InfoBlock content={moldBlock} smallImg={true} />
        </section>
        <hr />
        <div className="content">
          <h2 className="title is-1 has-text-centered">
            {commercialSubsection3.title}
          </h2>
          <h3 className="subtitle has-text-centered content">
            {commercialSubsection3.text}
          </h3>
        </div>
        <section className="section section--gradient" id="airQuality">
          <InfoBlock content={airQualityBlock} smallImg={true} />
        </section>
        <section className="section section--gradient" id="radon">
          <InfoBlock content={radonBlock} smallImg={true} />
        </section>
        <section className="section section--gradient" id="water">
          <InfoBlock content={waterAnalysisBlock} smallImg={true} />
        </section>
        <section className="section section--gradient" id="water">
          <InfoBlock content={clandestineDrugBlock} smallImg={true} />
        </section>
      </div>
      <section className="section hero is-primary is-bold">
        <div className="hero-body">
          <div className="container booking-banner-content">
            <div className="content has-text-centered">
              <Link
                className="button is-large is-white is-outlined has-text-centered"
                to="/contact"
              >
                {pricingBlock.title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPageTemplate;
