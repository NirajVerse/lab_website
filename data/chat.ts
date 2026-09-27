export const chatConfig = {
  enabled: true,
  isPilot: true,
  title: 'Ask AIMS Lab',
  description:
    'Ask about the lab, research areas, people, publications, products, or contact information.',
  welcomeMessage:
    'Hello! I can answer questions using approved public information from the AIMS Lab website. What would you like to know?',
  suggestedQuestions: [
    'What does AIMS Lab research?',
    'Who leads the lab?',
    'Which AI models can I try?',
    'How can I contact the lab?',
  ],
  disclaimer:
    'Pilot assistant. Answers are generated from approved public lab information and may be incomplete.',
  unavailableAnswer:
    'I could not find that information in the approved public AIMS Lab materials. Please use the Contact page if you need help from the lab.',
  maxQuestionLength: 800,
  maxHistoryMessages: 8,
} as const;
