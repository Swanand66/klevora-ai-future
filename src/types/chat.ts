export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface FAQ {
  q: string;
  a: string;
}
