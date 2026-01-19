import { Flashcard } from '../types';

export const INITIAL_CARDS: Flashcard[] = [
  // NATURE OF INQUIRY & RESEARCH
  {
    id: '1',
    category: 'Foundations',
    question: 'What is the systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions?',
    answer: 'Research'
  },
  {
    id: '2',
    category: 'Foundations',
    question: 'Which type of research focuses on expanding knowledge without immediate practical application?',
    answer: 'Basic (or Pure) Research'
  },
  {
    id: '3',
    category: 'Foundations',
    question: 'Which type of research aims to solve specific, practical problems?',
    answer: 'Applied Research'
  },
  // VARIABLES
  {
    id: '4',
    category: 'Variables',
    question: 'What do you call the variable that is manipulated or changed by the researcher? (The "Cause")',
    answer: 'Independent Variable'
  },
  {
    id: '5',
    category: 'Variables',
    question: 'What is the variable being measured or observed in response to changes? (The "Effect")',
    answer: 'Dependent Variable'
  },
  {
    id: '6',
    category: 'Variables',
    question: 'What defines a variable that can theoretically take on an infinite number of values within a given range (e.g., height, weight)?',
    answer: 'Continuous Variable'
  },
  {
    id: '7',
    category: 'Variables',
    question: 'What type of variable has distinct categories with no inherent order (e.g., Gender, Eye Color)?',
    answer: 'Nominal Variable'
  },
  // CHAPTER 1
  {
    id: '8',
    category: 'Introduction',
    question: 'Which section of the research paper identifies the area of concern, the existing knowledge gap, and the reason for the study?',
    answer: 'Background of the Study'
  },
  {
    id: '9',
    category: 'Introduction',
    question: 'What specific statement predicts a relationship between variables or an outcome of the study, which is tested?',
    answer: 'Hypothesis'
  },
  {
    id: '10',
    category: 'Introduction',
    question: 'Which hypothesis states there is NO significant difference or relationship between variables?',
    answer: 'Null Hypothesis (H0)'
  },
  {
    id: '11',
    category: 'Introduction',
    question: 'Which section defines the boundaries of the study, specifically what is included and what is excluded?',
    answer: 'Scope and Delimitation'
  },
  // CHAPTER 2 - RRL
  {
    id: '12',
    category: 'Literature Review',
    question: 'What acts as a map or blueprint for the study, often visual, connecting the variables based on theory?',
    answer: 'Conceptual Framework'
  },
  {
    id: '13',
    category: 'Literature Review',
    question: 'What is the standard citation format used in most social science and education research (STEM Capstone)?',
    answer: 'APA Style (American Psychological Association)'
  },
  {
    id: '14',
    category: 'Literature Review',
    question: 'In APA 7th edition, how many authors are listed before using "et al." in the first in-text citation?',
    answer: '3 or more authors (Use "et al." immediately)'
  },
  // CHAPTER 3 - METHODOLOGY
  {
    id: '15',
    category: 'Methodology',
    question: 'Which research design describes the characteristics of a population or phenomenon without influencing it?',
    answer: 'Descriptive Research Design'
  },
  {
    id: '16',
    category: 'Methodology',
    question: 'Which research design establishes a cause-and-effect relationship by strictly controlling variables?',
    answer: 'Experimental Research Design'
  },
  {
    id: '17',
    category: 'Methodology',
    question: 'Which sampling method gives every member of the population an equal chance of being selected?',
    answer: 'Simple Random Sampling'
  },
  {
    id: '18',
    category: 'Methodology',
    question: 'Which probability sampling technique involves dividing the population into subgroups (strata) and sampling from each?',
    answer: 'Stratified Random Sampling'
  },
  {
    id: '19',
    category: 'Methodology',
    question: 'What refers to the extent to which an instrument measures what it is supposed to measure?',
    answer: 'Validity'
  },
  {
    id: '20',
    category: 'Methodology',
    question: 'What refers to the consistency or stability of the measurement instrument over time?',
    answer: 'Reliability'
  },
  // STATISTICS
  {
    id: '21',
    category: 'Statistics',
    question: 'Which measure of central tendency is the most frequently occurring value in a dataset?',
    answer: 'Mode'
  },
  {
    id: '22',
    category: 'Statistics',
    question: 'Which measure of variability describes the average distance of data points from the mean?',
    answer: 'Standard Deviation'
  },
  {
    id: '23',
    category: 'Statistics',
    question: 'Which statistical test is used to compare the means of two independent groups?',
    answer: 'Independent Samples t-test'
  },
  {
    id: '24',
    category: 'Statistics',
    question: 'Which statistical test is used to compare the means of three or more groups?',
    answer: 'Analysis of Variance (ANOVA)'
  },
  {
    id: '25',
    category: 'Statistics',
    question: 'Which statistical tool measures the strength and direction of a linear relationship between two continuous variables?',
    answer: 'Pearson\'s Correlation Coefficient (Pearson r)'
  },
  {
    id: '26',
    category: 'Statistics',
    question: 'What is the standard "Alpha" level or margin of error used in social science/educational research to determine significance?',
    answer: '0.05 (5%)'
  },
  {
    id: '27',
    category: 'Statistics',
    question: 'If your p-value is 0.03 and your alpha is 0.05, what is your decision regarding the Null Hypothesis?',
    answer: 'Reject the Null Hypothesis (Significant)'
  },
  // IMRAD
  {
    id: '28',
    category: 'Structure',
    question: 'What does the acronym IMRaD stand for?',
    answer: 'Introduction, Methods, Results, and Discussion'
  },
  {
    id: '29',
    category: 'Structure',
    question: 'Which section of IMRaD interprets the findings, compares them to previous studies, and implies practical applications?',
    answer: 'Discussion'
  },
  {
    id: '30',
    category: 'Structure',
    question: 'What is the brief summary of the entire research paper, usually 150-250 words, placed at the beginning?',
    answer: 'Abstract'
  }
];
