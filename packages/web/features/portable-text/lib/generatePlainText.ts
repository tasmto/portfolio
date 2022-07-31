import { blockContentToPlainText } from 'react-portable-text';

const generatePlainText = (content: any): string => {
  return blockContentToPlainText(content);
};

export default generatePlainText;
