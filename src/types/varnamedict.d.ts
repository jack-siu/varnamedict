interface WordExample {
  repoName: string,
  repoPath: string,
  filePath: string,
  varName: string
}

export interface WordDetail {
  word: string,
  numberOfRepo: number,
  examples: WordExample[]
}
