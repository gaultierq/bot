import React, { useEffect } from 'react';
import { useGetConversationQuery } from '@web/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { AnswerMessage } from './components/AnswerMessage';
import NotFound from '../Error/404';
import { InteractionMessage } from './components/InteractionMessage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { StartBotButton } from '../Bot/components/StartConversation';
import './styles.css';
import { AnswerField } from './components/AnswerField';
import Loader from '../../layout/Loader';
import _ from 'lodash';

type TParams = {
  id: string;
};

type Created = { interaction: any; answers: any[] };

const transformInMessages = answers => {
  // item = { interactionId, answers }
  const result = [] as Message[];

  // const intByAns = {};
  if (answers) {
    let lastii;
    answers.forEach(answer => {
      const interaction = answer.interaction;
      const ii = interaction.id;
      if (ii !== lastii) {
        result.push({ content: interaction.content, key: `${interaction.id}`, answer: false });
      }
      lastii = ii;
      result.push({ content: answer.content, key: `${answer.id}`, answer: true });
    });
  }
  return result;
};

type Message = {
  content: string;
  answer: boolean;
  key: string;
};

export default function ConversationShow({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const [isBotTyping, setIsBotTyping] = React.useState(false);
  const { data: queryData, loading, error } = useGetConversationQuery({
    variables: { input: { id } }
  });

  const conversation = queryData?.getConversation?.conversation;
  const currentInteraction = queryData?.getConversation?.nextInteraction;

  const answers = conversation?.answers || [];
  const messages: Message[] = transformInMessages(answers);

  const lastAnswerDate = Date.parse(_.last(answers)?.createdAt || 0);

  useEffect(() => {
    const diff = Date.now() - lastAnswerDate;
    setIsBotTyping(diff < 2000);
    const ti = setTimeout(() => {
      setIsBotTyping(false);
    }, diff);
    return () => clearTimeout(ti);
  }, [lastAnswerDate]);

  console.log('time since last answer:', { diff: Date.now() - lastAnswerDate });

  if (!isBotTyping && currentInteraction) {
    messages.push({
      content: currentInteraction.content,
      answer: false,
      key: `${currentInteraction.id}`
    });
  }

  if (!conversation) {
    if (loading) return <Loader />;
    return <NotFound />;
  }

  return (
    <div>
      <span>{'Welcome to botId=' + conversation.botId}</span>
      <ul>
        <TransitionGroup>
          {messages.map(({ content, key, answer }) => (
            <CSSTransition key={key} timeout={2500} classNames={'item'}>
              <div>
                {answer && <AnswerMessage content={content} />}
                {!answer && <InteractionMessage content={content} />}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      {isBotTyping && <Loader />}
      {currentInteraction && <AnswerField conversationId={conversation.id} currentInteraction={currentInteraction} />}
      {!currentInteraction && (
        <div>
          Thanks for using this bot
          <StartBotButton botId={conversation.botId} />
        </div>
      )}
    </div>
  );
}
