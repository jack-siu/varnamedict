import React, { useState } from 'react';
import { WordDetail } from '../../types/varnamedict'
import './style.css'

interface Props {
  wordDetail: WordDetail,
  popularity: number
}

const WordCard = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const renderWordDetail = () => {
    if (isExpanded) {
      let html: JSX.Element[] = [];
      html.push(<p>{[...Array(Math.ceil(props.popularity))].map((e, j) => <span key={j}>🔥</span>)}</p>)
      for (let i = 0; i < props.wordDetail.examples.length; i += 1) {
        let example = props.wordDetail.examples[i]
        let exampleHrefBaseURL = new URL(example.repoPath.replace('git://', 'https://').replace('.git', '/'))
        let exampleHrefFilePath = ''
        if (example.filePath.split('/').length > 2) {
          const filePathArray = example.filePath.split('/')
          filePathArray.splice(1, 1)
          exampleHrefFilePath = filePathArray.join('/')
        }
        let exampleHrefFullURL = new URL('./blob/master/', exampleHrefBaseURL);
        exampleHrefFullURL = new URL(exampleHrefFilePath, exampleHrefFullURL)
        html.push(<p key={`${example.repoName}_${example.varName}`}>{example.varName} from <a className="example_hyperlink" target="_blank" href={exampleHrefFullURL.toString()}>{example.repoName}</a></p>)
      }
      return (
        <div className="word_details">
          {html}
        </div>
      )
    }
  }

  return (
    <div>
      <button type="button" className="word_button" onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded ? '- ' : '+ '} {props.wordDetail.word}</button>
      {renderWordDetail()}
    </div>
  );
}

export default WordCard;
