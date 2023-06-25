import React from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleHooksComponent = () => {
  const { increment, decrement, reset, count } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${count}`
  );

  const { author, quote } = !!data && data[0];
  //!Gestionamos el error
  if (hasError) {
    return (
      <div className="alert alert-danger text-center">
        {hasError.toString()}
      </div>
    );
  }

  //!Si todo OK
  return (
    <React.Fragment>
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment()}>Next quote</button>
    </React.Fragment>
  );
};

export default MultipleHooksComponent;
