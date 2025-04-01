import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";

interface MediumPost {
  title: string;
  guid: string;
  link: string;
  description: string;
  pubDate: string;
  categories: string[];
  thumbnail: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://feed2json.org/convert?url=https://medium.com/feed/@rutikbhosale`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          setPosts(data.items);
        } else {
          setError("Error fetching posts");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Medium posts:", err);
        setError("Failed to load blog posts");
        setIsLoading(false);
      });
  }, []);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to strip HTML from description
  const stripHtml = (html: string) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  // Create excerpt from description
  const createExcerpt = (description: string, maxLength: number = 150) => {
    const strippedText = stripHtml(description);
    if (strippedText.length <= maxLength) return strippedText;
    return strippedText.substring(0, maxLength) + "...";
  };

  return (
    <section id="blog" className="py-20 bg-black relative">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-full md:w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Blog</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials and insights about web development and design.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-8 bg-gray-900/60 rounded-lg">
            {error}. Please try again later.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <div 
                  key={post.guid} 
                  className="bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                       src={
                        post.title === "Migrating from Create React App (CRA) to Vite: Common Issues and Solutions"
                          ? "https://cdn-images-1.medium.com/max/1024/1*667MBXZlPGzsMsLRCt8tQA.png"
                          : post.thumbnail
                      }
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 3).map((category, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{createExcerpt(post.description)}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{formatDate(post.pubDate)}</span>
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Read more <BookOpen className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href={`https://rutikbhosale.medium.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full hover:opacity-90 transition-opacity"
              >
                View All Posts <BookOpen className="ml-2 h-4 w-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;