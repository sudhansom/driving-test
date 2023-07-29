export interface IData  {
  image: string,
  explanation: string,
  options: {
    question: string,
    answer: boolean,
    givenAnswer?: boolean,
    reason?: string
  }[]
}
