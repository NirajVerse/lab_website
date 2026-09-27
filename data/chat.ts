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
    'Public-information pilot. Do not submit personal, confidential, proprietary, or unpublished information. Answers may be incomplete.',
  unavailableAnswer:
    'I could not find that information in the approved public AIMS Lab materials. Please use the Contact page if you need help from the lab.',
  maxQuestionLength: 800,
} as const;
