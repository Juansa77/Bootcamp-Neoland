import { useCallback } from "react";

const MyComponent = ({ prop }) => {
  const callback = () => {
    return "result";
  };

  const memorizedCallback = useCallback(callback, [prop]);

  return <div>CallBack={memorizedCallback}</div>;
};

export default MyComponent;
