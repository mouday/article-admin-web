import React, { useEffect, useState } from "react";
import api from "@/request/api";
import { log } from "console";
import { useLocation } from "react-router-dom";
import { useSearchParams, useParams } from "react-router-dom";
import "./Log.less";

export default function Log() {
  const location = useLocation();
  // const taskLogId = location.pathname.replace("/task-log/", "");
  const [searchParams, setSearchParms] = useSearchParams();
  console.log(searchParams);
  const { taskLogId } = useParams();

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
    <div className="log-wrap">
      <pre>{detail}</pre>
    </div>
  );
}
