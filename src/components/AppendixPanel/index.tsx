import React, { useState } from 'react';
import { WordDetail } from '../../types/varnamedict'
import './style.css'

const AppendixPanel = () => {
  return (
    <div className="appendix_panel">
      <div>
        <h2>Gallary</h2>
        <div className="appendix_panel__wordcloud_container">
          <img className="appendix_panel__wordcloud_image" src="images/cloudVerb.jpg" alt="Verb"></img>
          <small>Word Cloud of parsed Verb</small>
        </div>
        <div className="appendix_panel__wordcloud_container">
          <img className="appendix_panel__wordcloud_image" src="images/cloudNoun.jpg" alt="Noun"></img>
          <small>Word Cloud of parsed Noun</small>
        </div>
        <div className="appendix_panel__wordcloud_container">
          <img className="appendix_panel__wordcloud_image" src="images/cloudAdj.jpg" alt="Adj"></img>
          <small>Word Cloud of parsed Adjective</small>
        </div>
      </div>
      <div>
        <h2>Data</h2>
        <div className="appendix_panel__download_link_container">
          <a className="appendix_panel__download_link" href="data/verb.json" download="verb.json" target="_blank">verb.json</a>
        </div>
        <div className="appendix_panel__download_link_container">
          <a className="appendix_panel__download_link" href="data/noun.json" download="noun.json" target="_blank">noun.json</a>
        </div>
        <div className="appendix_panel__download_link_container">
          <a className="appendix_panel__download_link" href="data/adj.json" download="adj.json" target="_blank">adj.json</a>
        </div>
      </div>
    </div>
  );
}

export default AppendixPanel;
