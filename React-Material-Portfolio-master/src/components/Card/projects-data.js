const projects = [
  {
    _id: "0001",
    title: "Movie Ranker",
    tech: "React, Bootstrap",
    desc: "A simple movie database app",
    itemImage: "./assets/images/movie.jpg",
    link: "https://relaxed-wozniak-18557b.netlify.com/movies"
  },
  {
    _id: "0001",
    title: "Drum Machine",
    tech: "Javascript, Custom CSS",
    desc: "A simple Drum Machine app",
    itemImage: "./assets/images/drummachine.jpg",
    link: "https://pheedme.netlify.com/"
  }
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find(p => p._id === id);
}
