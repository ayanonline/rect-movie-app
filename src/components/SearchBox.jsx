import React from "react";

function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        value={props.searchKey}
        onChange={(event) => {
          props.setSearchKey(event.target.value);
        }}
        className="form-control"
        placeholder="Type to search..."
      />
    </div>
  );
}

export default SearchBox;
