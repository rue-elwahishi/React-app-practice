import React, { Component } from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()} </h1>
    <div className="preview"> </div>
    {items
      .filter((item, idx) => idx < 4)
      .map(({ id, ...OtherItemProps }) => (
        <CollectionItem key={id} {...OtherItemProps} />
      ))}
  </div>
);

export default CollectionPreview;
