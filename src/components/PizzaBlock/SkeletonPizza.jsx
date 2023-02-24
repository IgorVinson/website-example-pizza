import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonPizza = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="133" cy="138" r="120" />
    <rect x="0" y="277" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="317" rx="10" ry="10" width="280" height="91" />
    <rect x="7" y="420" rx="10" ry="10" width="90" height="29" />
    <rect x="164" y="417" rx="20" ry="20" width="116" height="38" />
  </ContentLoader>
);

export default SkeletonPizza;
