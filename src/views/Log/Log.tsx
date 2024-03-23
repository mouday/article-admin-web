import React, { useEffect, useState } from "react";
import api from "@/request/api";

export default function Log() {
  const [headers, setHeaders] = useState({});

  const getData = async () => {
    const res = await api.get({});
    console.log(res);
    setHeaders(res.headers);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Log
      <pre>{JSON.stringify(headers, null, 2)}</pre>
    </div>
  );
}
