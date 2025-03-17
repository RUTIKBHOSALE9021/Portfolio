import React, { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  languages: string[];
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/RUTIKBHOSALE9021/repos');
        const data = await response.json();
        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            return {
              ...repo,
              languages: Object.keys(languagesData),
            };
          })
        );
        setRepositories(reposWithLanguages);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, fetched directly from my GitHub profile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <div key={repo.id} className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 p-6">
              <h3 className="text-2xl font-bold mb-3">{repo.name}</h3>
              <p className="text-gray-400 mb-6">{repo.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {repo.languages.map((language) => (
                  <span key={language} className="px-3 py-1 text-sm bg-gray-800 rounded-full">
                    {language}
                  </span>
                ))}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300"
              >
                View Code <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.578 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.62-5.479 5.92.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
