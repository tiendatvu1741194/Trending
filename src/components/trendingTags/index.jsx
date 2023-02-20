import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function TrendingTags() {
  return (
    <section className="trending">
      <div className="trending-wrapper">
        <h3>a</h3>
        <div className="trending-inner">
          <p>
            <span className="">Score</span>
            <span className="">1</span>
          </p>
          <p>
            <span className="">Answer</span>
            <span className="">1</span>
          </p>
          <p>
            <span className="">Viewer</span>
            <span className="">1</span>
          </p>
        </div>
      </div>
      <Avatar>H</Avatar>
    </section>
  );
}
