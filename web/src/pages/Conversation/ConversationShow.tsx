import React from 'react';
import { useGetConversationQuery } from '@web/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { AnswerMessage } from './components/AnswerMessage';
import { hashCode } from '@web/utils';
import NotFound from '../Error/404';
import _ from 'lodash';
import { InteractionMessage } from './components/InteractionMessage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StartBotButton } from '../Bot/components/StartConversation';
import './styles.css';
import { AnswerField } from './components/AnswerField';

type TParams = {
  id: string;
};


type Created = { interaction: any; answers: any[]; key: string };

const groupAnswers = answers => {
  // item = { interactionId, answers }
  const result = [] as Created[];

  // const intByAns = {};
  if (answers) {
    let lastii;
    answers.forEach(answer => {
      const interaction = answer.interaction;
      const ii = interaction.id;
      if (ii !== lastii) {
        result.push({ interaction, answers: [], key: interaction.id });
      }
      lastii = ii;
      const last = _.last(result);
      last.answers.push(answer);
      last.key = hashCode(last.key + answer.id);
    });
  }
  return result;
};

export default function ConversationShow({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;

  const { data: queryData, loading: queryLoading, error: queryError } = useGetConversationQuery({
    variables: { input: { id } }
  });
  const conversation = queryData?.getConversation?.conversation;
  const currentInteraction = queryData?.getConversation?.nextInteraction;


  if (!conversation) return <NotFound />;
  const answers = conversation.answers;


  const grouped = groupAnswers(answers);
  return (
    <div>
      <span>Welcome to bot</span>
      <ul>

        <TransitionGroup transitionName='example'>
          {grouped.map(({ interaction, answers, key }, n) => (
            <div>
              <InteractionMessage content={interaction.content} />
              {
                answers.map(a => (
                  <CSSTransition
                    key={key}
                    timeout={2500}
                    classNames={'item'}
                  >
                    <AnswerMessage key={a.id} content={a.content} />
                  </CSSTransition>
                )
                )}
            </div>

          ))}
        </TransitionGroup>

        {currentInteraction && <InteractionMessage content={currentInteraction.content} />}
      </ul>

      {currentInteraction && (
        <AnswerField
          conversationId={conversation.id}
          currentInteraction={currentInteraction}
        />
      )}
      {!currentInteraction && (
        <div>
          Thanks for using this bot
          <StartBotButton botId={conversation.botId} />
        </div>

      )}

    </div>
  );
}
