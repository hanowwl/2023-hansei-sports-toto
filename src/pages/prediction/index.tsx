import React, { useMemo, useState } from 'react';

import { Button, Prediction, PredictionProps, Typo } from 'src/components/common';
import {
  useGetMyPredictionsQuery,
  useGetPredictionsQuery,
  useSubmitPredictionMutation,
} from 'src/graphql/generated/hooks';
import { useAuth } from 'src/providers';

import * as S from './styled';

export const PredictionPage: React.FC = () => {
  const { profile } = useAuth();
  const { data } = useGetPredictionsQuery();
  const { data: myPredictions, isSuccess: hasPredictions } = useGetMyPredictionsQuery({
    userId: profile?.id,
  });
  const { mutate: submitPredictions } = useSubmitPredictionMutation();
  const predictions = useMemo(() => {
    return (
      (data?.predictionCollection?.edges.map(({ node }) => {
        const schedule = node.schedule;
        const team = schedule?.team_scheduleCollection?.edges[0].node;
        if (!schedule || !team) return;

        return {
          id: node.id,
          type: team.type as PredictionProps['type'],
          status: schedule.status as PredictionProps['status'],
          startTime: (schedule.start_time as string).slice(0, 6),
          choices: JSON.parse(node.choices),
          result: parseInt(node.result),
        };
      }) as (PredictionProps & { id: number })[]) || []
    );
  }, [data]);
  const [userPredictions, setUserPredictions] = useState<Record<number, number>>(
    myPredictions?.user_predictionCollection?.edges.reduce((prev, { node }) => {
      return { ...prev, [node.prediction_id]: parseInt(node.choice) };
    }, {}) || {}
  );
  const selectAllPredictions = useMemo(
    () => Object.values(userPredictions).length === predictions.length,
    [userPredictions, predictions]
  );

  const handleOnSubmitPredictions = () => {
    if (!selectAllPredictions) alert('모든 경기에 대해 예측을 완료한 후 다시 시도해주세요');

    submitPredictions({
      objects: Object.keys(userPredictions).map((id) => ({
        user_id: profile?.id,
        prediction_id: id,
        choice: userPredictions[parseInt(id)],
      })),
    });
  };

  return (
    <S.PageContainer>
      <div style={{ marginBottom: '1.6rem' }}>
        <Typo.H1>결승 승부예측</Typo.H1>
        <Typo.Small>승부예측을 제일 많이 맞춘 5명에게 선물을 드려요!</Typo.Small>
      </div>

      <S.PredictionRow>
        {predictions.map((props, i) => {
          return (
            <Prediction
              key={i}
              value={userPredictions[props.id]}
              onChange={(value) => {
                setUserPredictions((prev) => ({ ...prev, [props.id]: value }));
              }}
              result={predictions.find((v) => v.id === props.id)?.result}
              disabled={hasPredictions}
              {...props}
            />
          );
        })}
      </S.PredictionRow>

      <Button
        style={{ position: 'sticky', bottom: '0', boxShadow: '0 3px 10px rgba(0,0,0,0.3)' }}
        fillWidth
        disabled={!selectAllPredictions || hasPredictions}
        onClick={handleOnSubmitPredictions}
      >
        {hasPredictions
          ? '결승 승부예측을 이미 마감하셨어요'
          : !selectAllPredictions
          ? '모든 경기에 대해 승부예측을 진행해주세요'
          : '결승 승부예측 마감하기'}
      </Button>
    </S.PageContainer>
  );
};
