import React from 'react';
import styled from 'styled-components';

const Question = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: #989897;
  padding: 0 0 0.8em 0.3em;
`;

const Answer = styled.li`
  &:not(:last-child) {
    padding-bottom: 0.5em;
  }
`;

const AnswerList = styled.ul`
  padding: 0 0 1.2em 1.9em;
  line-height: 1.1;
`;

const Questions = () => (
  <div>
    <Question>
      Aut fore senserit arbitror ex nisi probant et coniunctione. Appellat est
      dolor possumus, do iis quis senserit.
    </Question>
    <AnswerList>
      <Answer>
        - Doctrina veniam labore iis fugiat et cupidatat sed tempor incididunt.
      </Answer>
      <Answer>
        - Quae eruditionem nescius dolor nescius te in et illum admodum.
      </Answer>
    </AnswerList>
    <Question>Senserit a duis non dolore deserunt se quem veniam.</Question>
    <AnswerList>
      <Answer>- Amet vidisse ingeniis ad amet qui e tempor incurreret.</Answer>
    </AnswerList>
    <Question>Si ne tempor fugiat multos, nostrud ut voluptate.</Question>
    <AnswerList>
      <Answer>- Esse Answertteris voluptate, quamquam e ipsum mentitum.</Answer>
    </AnswerList>
  </div>
);

export default Questions;
