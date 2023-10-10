import { useEffect, useState } from "react";

function Blogs() {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.joshwcomeau.com/_next/data/C5tO6Oq4qKkeBgt8fwNIu/tutorials/css.json?categorySlug=css"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  return (
    <div id="blogs" className="blog-section">
      <h1 className="blog-section-title">
        {"<>" + " " + "Coding Articles" + " " + "</>"}
      </h1>
      {error ? (
        <p>Error: {error.message}</p>
      ) : blogData && blogData.pageProps && blogData.pageProps.posts ? (
        <ul>
          {blogData.pageProps.posts.map((post) => (
            <li key={post.slug}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Blogs;
