import styled from 'styled-components';

const GradeItem = styled.li`
  text-transform: capitalize;
`;

const Statistics = props => {
  const { total } = props;
  return (
    <>
      {!total ? (
        <span>No feedback given</span>
      ) : (
        <ul>
          {Object.entries(props).map(stat => {
            return (
              <GradeItem key={stat}>
                {stat[0]}: {stat[1]}
              </GradeItem>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Statistics;
