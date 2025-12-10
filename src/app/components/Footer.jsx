"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Image from "next/image";
import "../../../public/footer.css";
import Link from "next/link";
import Reveal from "./Reveal";

import { subscribeNewsletter, fetchOffices } from "../api/index"; // <-- API connected

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [offices, setOffices] = useState([]);

  // FETCH OFFICES DATA
  useEffect(() => {
    const loadOffices = async () => {
      const data = await fetchOffices();
      setOffices(data || []);
    };
    loadOffices();
  }, []);


  // NEWSLETTER SUBMIT FUNCTION
  const handleNewsletter = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await subscribeNewsletter(email);

      if (res.success) {
        setMessage("Subscribed Successfully!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }

    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <footer className="footer-section">
      <Container>

        {/* TOP AREA */}
        <Row className="align-items-start footer-top">
          {/* Logo + About */}
          <Col md={4} className="mb-4">
            <div className="footer-logo-area">
              <Link href={'/'}>
              <h2 className="text-white text-lg">VIPL</h2>
              </Link>
              <Reveal>
                <p className="footer-about mt-3">
                  Vitel Infratech Pvt. Ltd. (VIPL) is a Class B contractor with Rajasthan PWD,
                  delivering high-quality construction and infrastructure projects across India.
                </p>
              </Reveal>
            </div>
          </Col>

          {/* Company Links */}
          <Col md={2} className="mb-4">
            <Reveal>
              <h5 className="footer-heading">Company</h5>
            </Reveal>
            <ul className="footer-list">
              <Reveal>
                <li> <Link href={'/about'} className="text-white"> About Us </Link></li>
              </Reveal>
              <Reveal>
                <li><Link href={'/services'} className="text-white">Services</Link></li>
              </Reveal>
              <Reveal>
                <li><Link href={'/equipment'} className="text-white"> Equipment </Link></li>
              </Reveal>
              <Reveal>
                <li><Link href={'/gallery'} className="text-white"> Gallery </Link></li>
              </Reveal>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <Reveal>
              <h5 className="footer-heading">Quick Links</h5>
            </Reveal>
            <ul className="footer-list">
              <Reveal>
                <li><Link href={'/contact'} className="text-white">Contact Us </Link> </li>
              </Reveal>
              {/* <Reveal>
                <li><Link href={'/gallery'} className="text-white"> Projects </Link></li>
              </Reveal> */}
              <Reveal>
                <li><Link href={'/careers'} className="text-white"> Careers </Link> </li>
              </Reveal>
            </ul>
          </Col>

          {/* Legal */}
          <Col md={2} className="mb-4">
            <Reveal>
              <h5 className="footer-heading">Legal</h5>
            </Reveal>
            <ul className="footer-list">
              <Reveal>
                <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
              </Reveal>
              <Reveal>
                <li><a href="/terms-conditions" className="text-white">Terms & Conditions</a></li>
              </Reveal>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={2} className="mb-4">
            <Reveal>
              <h5 className="footer-heading">Newsletter</h5>
            </Reveal>
            <Form onSubmit={handleNewsletter}>
              <Form.Control
                type="email"
                placeholder="Email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                disabled={loading}
                className="newsletter-btn mt-3 w-100"
              >
                {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </Button>
            </Form>

            {message && (
              <p className="mt-2 text-white" style={{ fontSize: "14px" }}>
                {message}
              </p>
            )}
          </Col>
        </Row>

        <hr className="footer-line" />

        {/* OUR OFFICES */}
        <Reveal>
        <h5 className="text-center footer-heading mt-4 mb-4">Our Offices</h5>
        </Reveal>
        <Row className="g-4 justify-content-center">
          {offices.length > 0 ? (
            offices.map((office) => (
              <Col md={4} key={office._id}>
                <Card className="office-card holographic-card">
                  <Card.Body className="text-center">
                    <Reveal>
                    <p className="office-branch">
                      <span>📍 {office.branchName}</span>
                    </p>
                    </Reveal>
                    <Reveal>
                    <h6 className="office-state">{office.state}</h6>
                    </Reveal> 
                    <Reveal>
                    <p>+91-{office.phone}</p>
                    </Reveal>
                    <Reveal>
                    <p>{office.location}</p>
                    </Reveal>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-white">Loading offices...</p>
          )}
        </Row>

        <div className="text-center footer-bottom mt-4">
          Copyright © All Rights Reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
