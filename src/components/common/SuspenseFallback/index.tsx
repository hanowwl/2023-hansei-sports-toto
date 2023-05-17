import React, { useEffect, useState } from 'react';

import { Spinner, SpinnerProps } from '..';

import * as S from './styled';

export interface SuspenseFallbackProps {
  messages: string[];
  messageInterval?: number;
  spinner?: SpinnerProps;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  messages,
  messageInterval = 2000,
  spinner = {
    size: '4.8rem',
  },
}) => {
  const [messageIndex, setMessageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev >= messages.length - 1 ? 0 : prev + 1));
    }, messageInterval);

    return () => clearInterval(interval);
  }, [messages, messageInterval]);

  return (
    <S.SuspenseFallbackContainer>
      <Spinner {...spinner} />
      <S.FallbackMessage>{messages[messageIndex]}</S.FallbackMessage>
    </S.SuspenseFallbackContainer>
  );
};
