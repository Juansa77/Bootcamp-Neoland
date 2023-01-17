import "./Gallery.css";

const Gallery = (props) => {
  const images = props.images;
  const width= props.width;
  const height= props.height;

  return (
    <div className="gallery">
      {images.map((item) => (
        <img className="image" src={item.image} alt={item.text} key={item.id} width={width} height={height} />
      ))}
      ;
    </div>
  );
};

export default Gallery;
