import React from "react";

import { COLORS } from "../../constants/constants";

import { LeftArrow, RightArrow, Wrapper } from "./PaginationStyles";

function Pagination(props) {
  return (
    <Wrapper>
      {props.page !== 1 ? (
        <LeftArrow
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        />
      ) : (
        <LeftArrow color={COLORS.inactive} />
      )}
      {props.page === props.maxPage ? (
        <RightArrow color={COLORS.inactive} />
      ) : (
        <RightArrow
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        />
      )}
    </Wrapper>
  );
}

export default Pagination;
