import React from "react";

import { COLORS_LIGHT } from "../../constants/constants";

//Styled Components
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
        <LeftArrow color={COLORS_LIGHT.inactive} />
      )}
      {props.page === props.maxPage ? (
        <RightArrow color={COLORS_LIGHT.inactive} />
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
