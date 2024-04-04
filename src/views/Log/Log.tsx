import React, { useEffect, useState } from "react";
import api from "@/request/api";
import { log } from "console";
import { useLocation } from "react-router-dom";

export default function Log() {
  const location = useLocation();
  const taskLogId = location.pathname.replace("/task-log/", "");

  const [detail, setDetail] = useState("");

  const getData = async () => {
    const res = await api.getTaskLogDetail({
      taskLogId: taskLogId,
    });

    if (res.ok) {
      setDetail(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <pre>{detail}</pre>
    </div>
  );
}
