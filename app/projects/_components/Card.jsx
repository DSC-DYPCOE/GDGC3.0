import Image from "next/image";
import "./project.css";
import Link from "next/link";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card ">
      <div className="img-cont ">
        <span className="drop-down-window">
          <Link href={link}>{title}</Link>
        </span>
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
