import React, { useState } from 'react';
import { WordDetail } from '../../types/varnamedict'
import WordCard from '../WordCard';
import './style.css'

interface Props {
  wordDetailList: WordDetail[],
}

const DictionaryPanel = (props: Props) => {
  // const [searchResult, setSearchResult] = useState<WordDetail[]>(props.wordDetailList);
  const [searchBarText, setSearchBarText] = useState<string>('')

  const handleSearchBarTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(e.target.value);
  }

  const calculatePopularity = (word: string) => {
    let index = props.wordDetailList.findIndex((ele) => ele.word === word)
    // Just use linear distribution
    return 5 * (1 - index/props.wordDetailList.length);
  }

  const renderSearhResult = () => {
    let searchResult = props.wordDetailList
    if (searchBarText) {
      searchResult = searchResult.filter((ele)=> ele.word.includes(searchBarText))
    }
    const html:JSX.Element[]  = []
    for (let i = 0; i < searchResult.length; i += 1){
      if (searchResult[i].examples) {
        html.push(
          <WordCard key={`${searchResult[i].word}`} wordDetail={searchResult[i]} popularity={calculatePopularity(searchResult[i].word)}/>
        )
      }
    }
    return html;
  }

  return (
    <div>
      <input
        className="search_bar"
        placeholder="Type word to filter"
        type="text"
        value={searchBarText}
        onChange={handleSearchBarTextChange}>
      </input>
      <div className="search_result_panel">
        {renderSearhResult()}
      </div>
    </div>
  );
}

export default DictionaryPanel;
