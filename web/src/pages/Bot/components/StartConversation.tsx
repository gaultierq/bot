import { useCreateConversationMutation } from '@web/graphql'
import { useHistory } from 'react-router-dom'
import CircularIntegration from './CircularIntegration'
import React from 'react'

export function StartBotButton({ botId }: { botId: string }) {
  // thats really not good, but still making progress on ts
  const [createConversationMutation] = useCreateConversationMutation({
    variables: {
      input: { botId }
    }
  })

  const history = useHistory()

  const startBotHandler = async event => {
    event.preventDefault()
    const data = await createConversationMutation()
    const conversationId = data?.data?.createConversation?.conversation?.id
    if (conversationId) {
      history.push(`/conversation/${conversationId}`)
    }
  }
  return (
    <CircularIntegration onClick={startBotHandler} color={'primary'}>
      Start Bot
    </CircularIntegration>
  );
}
