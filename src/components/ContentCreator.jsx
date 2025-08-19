import { Link } from "react-router-dom";

const ContentCreator = ({ id, name, description, image }) => {
  return (
    <div className="creator-card">
      <img src={image} alt={name} className="creator-card-image" />
      <h2 className="creator-card-name">{name}</h2>
      <p className="creator-card-description">{description}</p>
      <div className="creator-card-buttons">
        <Link to={`/view/${id}`}>
          <button className="btn btn-view">View</button>
        </Link>
      </div>
    </div>
  );
};

export default ContentCreator;
