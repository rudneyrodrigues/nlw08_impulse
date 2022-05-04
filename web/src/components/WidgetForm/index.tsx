import { useState } from 'react';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import bugImg from '../../images/bug.svg';
import ideaImg from '../../images/idea.svg';
import otherImg from '../../images/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImg,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImg,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImg,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto items-center">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChance={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}  />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 💜 pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>
      </footer>
    </div>
  );
}