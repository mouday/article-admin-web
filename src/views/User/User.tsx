import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount, setCountAsync } from "@/store/reducers/count-reducer.ts";

export default function User() {
  const dispatch = useDispatch();
  const { username, count } = useSelector((state: any) => {
    return {
      username: state.user.username,
      count: state.count.count,
    };
  });

  const handleAddCount = () => {
    dispatch(setCount({ count: count + 1 }));
  };

  const handleAddCountAsync = () => {
    dispatch(setCountAsync({ count: count + 1 }));
  };

  return (
    <div>
      User
      {username}
      <p>{count}</p>
      <button onClick={handleAddCount}>增加count</button>
      <button onClick={handleAddCountAsync}>异步增加count</button>
    </div>
  );
}
