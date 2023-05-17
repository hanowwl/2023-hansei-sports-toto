import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pulseKeyframes = keyframes`
    0% {
        opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const SuspenseFallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const FallbackMessage = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #a5a5a5;

  animation: ${pulseKeyframes} 2s infinite;
`;
