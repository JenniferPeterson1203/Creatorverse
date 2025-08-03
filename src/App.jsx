// React imports for state and lifecycle hooks
import { useEffect, useState } from "react";
// React Router import for defining page routes
import { useRoutes } from "react-router-dom";
// Import our Supabase client to talk to the database
import supabase from "./client";
// Import the reusable card component for displaying a creator
import ContentCreator from "./components/ContentCreator";
// Import the pages for viewing, editing, and adding creators
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  // State to store the list of creators fetched from Supabase
  const [creators, setCreators] = useState([]);
  // State to track whether we are still loading data
  const [loading, setLoading] = useState(true);

  /**
   * useEffect runs once when the component loads.
   * This is where we fetch our data from Supabase.
   */
  useEffect(() => {
    const fetchCreators = async () => {
      /**
       * Fetch all records from the "creators" table.
       * - supabase.from("creators") → choose the table
       * - .select("*") → select ALL columns for each row
       * The result gives us:
       * - data → array of creators (or null if error)
       * - error → any error object from the request
       */
      const { data, error } = await supabase
        .from("creators")
        .select("*");

      if (error) {
        // If there’s an error, log it so we know what went wrong
        console.error("Error fetching creators:", error);
      } else {
        // If successful, update state so React can render the data
        setCreators(data);
      }

      // Done loading regardless of success or error
      setLoading(false);
    };

    // Call our fetch function
    fetchCreators();
  }, []); // Empty dependency array → runs only once on mount

  /**
   * Define all the routes for our app.
   * - "/" → Homepage showing all creators
   * - "/view/:id" → Page to view one creator in detail
   * - "/edit/:id" → Page to edit an existing creator
   * - "/add" → Page to add a new creator
   */
  const routes = useRoutes([
    { path: "/", element: renderHomepage() },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/add", element: <AddCreator /> },
  ]);

  /**
   * Function to render the homepage.
   * This is separated for readability inside useRoutes.
   */
  function renderHomepage() {
    // Show loading message while waiting for Supabase data
    if (loading) return <p>Loading...</p>;

    // Show a message if there are no creators in the database
    if (creators.length === 0) return <p>No creators found.</p>;

    // If we have creators, render them in a flex layout
    return (
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {creators.map((creator) => (
          <ContentCreator
            key={creator.id} // Always include a unique key when mapping in React
            name={creator.name}
            url={creator.url}
            description={creator.description}
            image={creator.imageURL} // Matches the column name in Supabase
          />
        ))}
      </div>
    );
  }

  // Return the routes so React Router can show the right page
  return routes;
}

export default App;
