import React from 'react';

import styled from 'styled-components';

const GradeList = styled.ul`
  display: flex;
`;

const GradeItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const GradeBtn = styled.button`
  border-radius: 4px;
  border: 1px solid #888888;
  cursor: pointer;
  text-transform: capitalize;
  background-color: #ffffff;
  box-shadow: 0 1px 2px #888888;

  &:active {
    background-color: #3488f7;
  }
`;

const Feedback = ({ heading, grades, onEstimate }) => {
  return (
    <GradeList>
      {grades.map(grade => {
        return (
          <GradeItem key={grade}>
            <GradeBtn onClick={() => onEstimate(grade)} type="button">
              {grade}
            </GradeBtn>
          </GradeItem>
        );
      })}
    </GradeList>
  );
};

export default Feedback;
