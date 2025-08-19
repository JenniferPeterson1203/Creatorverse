// ContentCreator.jsx
const ContentCreator = ({ name, url, description, image }) => {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "350px",
        backgroundColor: "#fff",
      }}
    >
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={`${name}'s profile`}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      )}

      {/* Name as clickable link */}
      <h2 style={{ marginTop: "12px" }}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          {name}
        </a>
      </h2>

      {/* Description */}
      <p style={{ color: "#555", lineHeight: "1.5" }}>
        {description}
      </p>
    </article>
  );
};

export default ContentCreator;
