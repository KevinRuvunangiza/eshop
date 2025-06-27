import shoeFrontView from "../assets/Air_Force_Frontview.avif";

export default function cartArticle({numOfArticle,nameOfArticle,articlePrice}) {
  return (
    <>
      <div className="cartArticle">
        <img src={shoeFrontView} alt="" width="100px" />
        <div className="cartArticleText">
          <p id="articleTitle">X{numOfArticle} {nameOfArticle}</p>
          <p id="articlePrice">R{articlePrice}</p>
        </div>
      </div>
    </>
  );
}
