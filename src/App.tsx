import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { WordDetail } from './types/varnamedict';
import DictionaryPanel from './components/DictionaryPanel';
import AppendixPanel from './components/AppendixPanel';

function App() {
  const [currentTab, setCurrentTab] = useState<string>('verb');
  const [verbDict, setVerbDict] = useState<WordDetail[]>([]);
  const [nounDict, setNounDict] = useState<WordDetail[]>([]);
  const [adjDict, setAdjDict] = useState<WordDetail[]>([]);

  const getTabButtonClass = (tab: string) => {
    return tab === currentTab ? 'tab_button tab_button--active' : 'tab_button'
  }

  const renderDictionaryPanel = () => {
    if (currentTab === 'verb' && verbDict.length > 0){
      return <DictionaryPanel wordDetailList={verbDict} />
    } else if (currentTab === 'noun' && nounDict.length > 0) {
      return <DictionaryPanel wordDetailList={nounDict} />
    } else if (currentTab === 'adjective' && adjDict.length > 0) {
      return <DictionaryPanel wordDetailList={adjDict} />
    } else if (currentTab === 'appendix') {
      return <AppendixPanel />
    }
  }

  useEffect(() => {
    axios.all([
      axios.get('data/verb.json'),
      axios.get('data/noun.json'),
      axios.get('data/adj.json')
    ]).then(axios.spread((verbResponse, nounResponse, adjResponse) => {
      setVerbDict(verbResponse.data);
      setNounDict(nounResponse.data);
      setAdjDict(adjResponse.data);
    }))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="tab">
          <button className={getTabButtonClass('verb')} onClick={()=>setCurrentTab('verb')}>Verb</button>
          <button className={getTabButtonClass('noun')} onClick={()=>setCurrentTab('noun')}>Noun</button>
          <button className={getTabButtonClass('adjective')} onClick={()=>setCurrentTab('adjective')}>Adj</button>
          <button className={getTabButtonClass('appendix')} onClick={()=>setCurrentTab('appendix')}>Appx.</button>
        </div>
        <div className="dictionary_panel">
          {renderDictionaryPanel()}
        </div>
      </header>
    </div>
  );
}

export default App;
