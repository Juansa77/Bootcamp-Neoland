const Review = ({ title, score }) => {

    console.log("renderizando Review")
  return (
    <div className="reviewDiv">
      <p>
        {title} - {score}
      </p>
    </div>
  );
};

export default Review;
