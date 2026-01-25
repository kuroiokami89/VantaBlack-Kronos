"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { NeutralFace, CreatoDisplayLight } from "../../components/fonts";
import VideoComponent from "../../components/VideoComponent";
import RowPicsComponent from "@/app/components/RowPicsComponent";
import ContactForm from "@/app/components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BestSellers from "@/app/components/BestSellersComponent";

export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params.slug) return;

    setLoading(true);
    setError(null);

    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        const foundProduct = data.find((item) => item.slug === params.slug);

        if (!foundProduct) {
          throw new Error("Product not found");
        }

        setProduct(foundProduct);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.slug]);

  if (loading) {
    return (
      <div
        className={`prd-page ${NeutralFace.className}`}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        Loading product...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div
        className={`prd-page ${NeutralFace.className}`}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          fontSize: "1.5rem",
        }}
      >
        <p>Product not found</p>
        <a
          href="/shop"
          style={{
            padding: "12px 24px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Back to Shop
        </a>
      </div>
    );
  }

  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <VideoComponent
        video={product.video}
        height={"100vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page-block">
        <RowPicsComponent
          pic1={product.gallery[0]}
          pic2={product.gallery[1]}
          pic3={product.gallery[2]}
        />
        <div className="parent-container">
          <div className="prd-container">
            <div className="prd-title">
              <span>{product.brand}</span>
              <h1>{product.model}</h1>
              <p className={`prd-description ${CreatoDisplayLight.className}`}>
                {product.description}
              </p>
              <p
                className="prd-price"
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginTop: "20px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                ${product.price.toLocaleString()}
              </p>
            </div>
            <a className="buy-btn">
              ADD TO CART <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </a>
          </div>
        </div>
      </div>
      <BestSellers />
      <ContactForm />
    </div>
  );
}
