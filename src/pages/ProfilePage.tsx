import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.3vh;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  min-width: 300px; /* minimum width */
  max-width: 30%;
  margin-top: 19px
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 90%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #f0f0f0;

  &:focus {
    outline: none;
    border: 1px solid #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const SelectField = styled.select`
  width: 96%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #f0f0f0;

  &:focus {
    outline: none;
    border: 1px solid #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 95%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    designation: "",
    category: "",
  });

  //@ts-ignore
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Header />
      <AppContainer style={{ background: `url(/images/image.png)`, marginTop: "20px" }}>
        <FormContainer>
          <FormTitle>UPDATE PROFILE</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
            <SelectField
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </SelectField>
            <InputField
              type="text"
              name="designation"
              placeholder="Your Designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <SelectField
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Games">Games</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
            </SelectField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </AppContainer>
    </div>
  );
};

export default ProfilePage;
