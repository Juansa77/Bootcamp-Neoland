import { useMemo, useState } from "react";

const posts = [
  {
    slug: "html-desde-0",
    date: "Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)",
  },
  {
    slug: "css-desde-0",
    date: "Thu Feb 17 2022 18:15:00 GMT+0100 (Central European Standard Time)",
  },
  {
    slug: "javascript-desde-0",
    date: "Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)",
  },
];

const CodePosts = () => {

    const [rerender, setRerender] = useState(false)
  const orderedPostsWithTitle = useMemo(()=>{
    console.log("Generating posts...")
    
   return posts
    .map((post) => ({
      ...post,
      date: new Date(post.date),
      title: post.slug.split("-").join(" ").toUpperCase()
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((post) => ({
      ...post,
      date: new Intl.DateTimeFormat("es-ES").format(post.date),
    }))}, [posts]);

  return (
    <div>
      <h1>Post destacados</h1>
      {orderedPostsWithTitle.map((post) => (
        <li key={post.slug}>
          <h3>{post.title}</h3>
          {post.date}
          <hr />
        </li>
      ))}

      <button onClick={()=> setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default CodePosts