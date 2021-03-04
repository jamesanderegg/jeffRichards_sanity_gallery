import { graphql } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(10, 280px);
`;
const TitleCard = styled.h1`
  grid-area: 1 / 1 / 2 / 40;
  color: var(--grey);
  font-style: italic;
  font-weight: bold;
  padding: 10px;
  background-color: #7a0301;
  margin: 60px 20px;
  z-index: 1;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavStyle = styled.div`
  grid-column: 5 / 10;
  grid-row: 1/2;
  margin-top: 230px;
  z-index: 1;
`;
const TopImage = styled.div`
  grid-column: 40 / 98;
  grid-row: 1 /2;
  margin-top: 40px;
  box-shadow: -10px 26px 8px rgba(0, 0, 0, 0.25);
`;
const BottomImage = styled.div`
  grid-column: 1 / 32;
  margin-top: 230px;
  margin-left: 10px;
  grid-row: 2.5;
`;
const FormCard = styled.div`
  grid-row: 2 /4;
  grid-column: 36 / 100;
  max-height: 550px;
  display: grid;
  grid-template-columns: 1fr 0.8fr;

  margin: 40px 0;
  color: var(--grey);
  z-index: 1;
  background-color: #999999;
  box-shadow: -30px 46px 4px rgba(0, 0, 0, 0.25);
`;
const FormGrid = styled.div`
  padding: 5px;

  display: grid;
`;
const FormTitle = styled.h3`
  color: #1d1d1d;
  text-align: start;
  margin: 5px 0;
`;
const FormButton = styled.button`
  background-color: #575757;
`;
const ContactInformation = styled.div`
  grid-column: 2;
  padding: 10px;
  color: #1d1d1d;
`;

export default function Contact({ data }) {
  const contactPage = data.allSanityContactPage.nodes[0];
  const [values, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    mapleSyrup: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [errors, setErrors] = useState([]);

  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === "number") {
      value = parseInt(e.target.value);
    }

    setValue({
      ...values,
      [e.target.name]: value,
    });
  }

  async function handleSubmit(submitedValues) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: submitedValues.name,
        email: submitedValues.email,
        message: submitedValues.message,
        subject: submitedValues.subject,
      }),
    };
    fetch("https://www.jamesanderegg.com/snoc_form", requestOptions).then(
      (response) => {
        if (response.status === 200) {
          // form successful
          // clear errors
          setErrors([]);
          // clear form
          setValue({
            name: "",
            email: "",
            subject: "",
            mapleSyrup: "",
            message: "",
          });
          // set form sent to true and display Success
          setFormSent(true);
        } else {
          // clear form
          setValue({
            name: "",
            email: "",
            subject: "",
            mapleSyrup: "",
            message: "",
          });
        }
      }
    );
  }

  const checkForm = (e) => {
    e.preventDefault();
    let errors = [];
    // check if maple syrup is empty
    // check if other fields are empty

    Object.keys(values).map((value) => {
      // catch the honey pot and check if it is empty. if not empty === bad
      if (value === "mapleSyrup") {
        if (values[value] !== "") {
          // Do Not submit form
          errors.push(value);
        }
      } else {
        // check for empty values
        if (values[value] === "") {
          errors.push(value);
        }
      }
    });
    if (errors.length !== 0) {
      // if errors do not submit form
      setErrors(errors);
    } else {
      setErrors(errors);
      handleSubmit(values);
    }
  };
  console.log(contactPage);
  return (
    <>
      <SEO title="Contact Page" />
      <Wrapper>
        <TitleCard>Contact Jeff</TitleCard>
        <TopImage>
          <Img fluid={contactPage.topPainting[0].image.asset.fluid} />
        </TopImage>
        <NavStyle>
          <Nav />
        </NavStyle>
        <FormCard>
          <FormGrid>
            <form
              onSubmit={(e) => checkForm(e)}
              style={{
                alignContent: "center",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <FormTitle>Send Jeff an email</FormTitle>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                placeholder="Enter your name"
                style={{ width: "100%" }}
                onChange={updateValue}
              />
              <br />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                style={{ width: "100%" }}
                onChange={updateValue}
              />
              <br />
              <br />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter the subject"
                value={values.subject}
                style={{ width: "100%" }}
                onChange={updateValue}
              />
              <br />
              <input
                type="mapleSyrup"
                name="mapleSyrup"
                id="mapleSyrup"
                value={values.mapleSyrup}
                onChange={updateValue}
                className="mapleSyrup"
                style={{ display: "none" }}
              />
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Type your Message here."
                rows="8"
                value={values.message}
                style={{ width: "100%" }}
                onChange={updateValue}
              />
              <br />
              <FormButton className="submit-button" type="submit">
                Send
              </FormButton>
            </form>
          </FormGrid>
          <ContactInformation>
            <p>{contactPage.name}</p>
            <p>{contactPage.email}</p>
            <p>{contactPage.address}</p>
            <p>{contactPage.phoneNumber}</p>
            {formSent ? <h4>Thank you, your message has been sent!</h4> : null}
            {errors.length !== 0
              ? errors.map((error, i) => (
                  <p key={i}>Please fill in the {error} field.</p>
                ))
              : null}
          </ContactInformation>
        </FormCard>
        <BottomImage>
          <Img fluid={contactPage.bottomPainting[0].image.asset.fluid} />
        </BottomImage>
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query ContactPageQuery {
    allSanityContactPage {
      nodes {
        name
        id
        email
        address
        phoneNumber
        topPainting {
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        bottomPainting {
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
