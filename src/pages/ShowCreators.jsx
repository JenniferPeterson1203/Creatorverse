import ContentCreator from "../components/ContentCreator";

const ShowCreators = () => {
  const creators = [
    {
      name: "Jane Doe",
      url: "https://janedoe.com",
      description: "Jane is a full-stack developer creating modern web apps.",
      image: "https://via.placeholder.com/350x200",
    },
    {
      name: "John Smith",
      url: "https://johnsmith.com",
      description: "John is a YouTuber focusing on JavaScript tutorials.",
      image: "https://via.placeholder.com/350x200",
    },
  ];

  return (
    <div>
      <h1>Content Creators</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {creators.map((creator, index) => (
          <ContentCreator
            key={index}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            image={creator.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
