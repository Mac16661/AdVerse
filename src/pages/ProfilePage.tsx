import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";

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
  margin-top: 19px;
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


const URL = "https://about.fb.com/wp-content/uploads/2021/10/Meta-Planets-img-16x9-1.jpg?w=1200";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    category: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    const getProfile = async () => {
      const response = await axios.get(`${URL}/user/v2/getProfile`, {
        //@ts-ignore
        params: { id: userId }
      });
      console.log(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.address,
        country: response.data.code,
        category: response.data.category
      });
      
    };

    getProfile();
  }, []);

  //@ts-ignore
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const userId = localStorage.getItem("userId");
    // const name = formData.name;
    // const email: formData.email;
    // const country: formData.country;
    // const category: formData.category;

    const response = await axios.post(`${URL}/user/v2/saveProfile`, {
      //@ts-ignore
      userId,
      formData
    });

    // setFormData({
    //   name: response.data.name,
    //   email: response.data.address,
    //   country: response.data.code,
    //   category: response.data.category
    // });
    // console.log(formData);
    console.log(response.data)
  };

  return (
    <div style={{ display: "flex", flex: 1 , width:"100%"}}>
      <Header />
      <AppContainer
        style={{ background: `url(/images/image.png)`, marginTop: "20px", width: "100%" }}
      >
        <FormContainer>
          <FormTitle>UPDATE PROFILE</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="Company Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
            <SelectField
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Game">Game dev</option>
              <option value="Org">Ad creator</option>
            </SelectField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </AppContainer>
    </div>
  );
};

export default ProfilePage;
