/* eslint-disable react/prop-types */


const Quote = ({quote, author}) => {
  return (
    <blockquote className='"blockquote text-end' style={{ display: "flex" }}>
      <p>{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};

export default Quote;
