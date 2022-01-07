import styled from "styled-components";

export const ReloadWrapper = styled.div`
  align-self: var(--alignment);
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &.refresh-start {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: running;
  }
  &.refresh-end {
    animation-play-state: paused !important;
  }
`;
