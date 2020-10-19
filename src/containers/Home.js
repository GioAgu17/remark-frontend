import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const [offers, setOffers] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }

      try {
        const offers = await loadOffers();
        setOffers(offers);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadOffers() {
    return API.get("remark", "/listOffers");
  }

  function renderOffersList(offers) {
    return [{}].concat(offers).map((offer, i) =>
      i !== 0 ? (
        <LinkContainer key={offer.offerId} to={`/offers/${offer.offerId}`}>
          <ListGroupItem header={offer.content.trim().split("\n")[0]}>
            {"Created: " + new Date(offer.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/offers/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new offer
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Remark</h1>
        <p>Where business meets the future of marketing</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  function renderOffers() {
    return (
      <div className="offers">
        <PageHeader>Your Offers</PageHeader>
        <ListGroup>
          {!isLoading && renderOffersList(offers)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderOffers() : renderLander()}
    </div>
  );
}
