import Image from "next/image";
import "./project.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card ">
      <div className="img-cont ">
        <span className="drop-down-window">{title} USD</span>
        <Image
          className="img h-[60vh]"
          src={image}
          alt={title}
          width={500}
          height={200}
        />
      </div>
      <div className="content-cont">
        <span className="card-header">{title}</span>
        <span className="card-body">{description}</span>
      </div>
    </div>
  );
};

export default Card;
