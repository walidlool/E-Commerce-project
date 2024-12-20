import { useState, useEffect } from "react";
import "./sectionOne.css";
import image from "../assyts/img/bag.png";
import axiosInstance from "../../../axios/Axios"; 
import { Link } from "react-router-dom";

function SectionOne({ setFilter }) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const config = { headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGM4ZDNhZTQ0YmQ1YjAzZTFmNzFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTc2Njg5MX0.SSXQMQM0vdzDnr2f7M7EtIRuEhNbfdLRMh2Sux37N5U`
      }}
      const { data } = await axiosInstance.get("/category",config); 
      setCategories(data.data.categories);
       console.log(data.data.categories); 
      console.log("cat", data.data.categories );
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    getCategories(); 
  }, []);

  return (
    <>
      <div className="SectionOne">
        <div className="container">
          <div className="banner">
            <div className="overlay">
              <h1 className="food">Products</h1>
              <p>Discover new and trending products in our top categories.</p>
            </div>
          </div>
        </div>

        <div className="product">
          <div className="container">
            <p className="Top_categories">Top Categories</p>
            <ul className="lists">
              <li key="all" onClick={() => setFilter("All")}>
                <img src={image} alt="All Categories" />
                <button >All</button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button onClick={() => setFilter(category.name)}>
                    <img src={image} alt={category.name} />
                    <h3>{category.name}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="photo">
        <div className="container">
          <h1 className="offer">Offer</h1>
          <div className="bg">
            <div className="overlay">
              <h1 className="text">
                Get a 30% discount on your order when you order more than 5 kilos
              </h1>
<button>              <Link to={"/filteration"} className="explore">Explore Now</Link></button>            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
