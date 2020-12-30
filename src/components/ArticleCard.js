import React from "react";
import articleImg from "../assets/images/article-img.svg";

const ArticleCard = () => {
  return (
    <div>
      <div className="article-card">
        <div>
          <img src={articleImg} className="w-100" alt="article-img" />
        </div>
        <div className="ml-3 mr-3 mt-3 mb-4">
          <h4 className="font-weight-bold"> long established</h4>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>

          <ul className="list-unstyled d-flex justify-content-between">
            <li>May 20th 2020</li>
            <li>Read more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
