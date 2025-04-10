import React, { useState } from 'react';
import CommunityList from './components/CommunityList';
import './App.css'

const communities = [
  {
    id: 1,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    type: 'Q&A',
    language: 'Global',
  },
  {
    id: 2,
    name: 'Stack Exchange',
    url: 'https://stackexchange.com/',
    type: 'Q&A',
    language: 'Global',
  },
  {
    id: 3,
    name: 'Quora',
    url: 'https://www.quora.com/',
    type: 'Q&A',
    language: 'Global',
  },
  {
    id: 4,
    name: 'Reddit - r/programming',
    url: 'https://www.reddit.com/r/programming/',
    type: 'Forum',
    language: 'Global',
  },
  {
    id: 5,
    name: 'Dev.to',
    url: 'https://dev.to/',
    type: 'Blog',
    language: 'Global',
  },
  {
    id: 6,
    name: 'Hashnode',
    url: 'https://hashnode.com/',
    type: 'Blog',
    language: 'Global',
  },
  {
    id: 7,
    name: 'OKKY',
    url: 'https://okky.kr/',
    type: 'Forum',
    language: 'Korean',
  },
  {
    id: 8,
    name: 'Velog',
    url: 'https://velog.io/',
    type: 'Blog',
    language: 'Korean',
  },
  {
    id: 9,
    name: 'Deview 커뮤니티',
    url: 'https://deview.kr/',
    type: 'Forum',
    language: 'Korean',
  },
  {
    id: 10,
    name: 'Reactiflux (Discord)',
    url: 'https://www.reactiflux.com/',
    type: 'Chat',
    language: 'Global',
  },
  {
    id: 11,
    name: 'Frontend Developers (Slack)',
    url: 'https://frontenddevelopers.slack.com/',
    type: 'Chat',
    language: 'Global',
  },
];

function App() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [languageFilter, setLanguageFilter] = useState('All');

  const filteredCommunities = communities.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || c.type === filterType;
    const matchesLanguage = languageFilter === 'All' || c.language === languageFilter;
    return matchesSearch && matchesType && matchesLanguage;
  });

  return (
    <div className='appContainer'>
      <header>
        <h1>🧑‍💻 개발자 커뮤니티 모음</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="검색어 입력..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">모든 유형</option>
            <option value="Q&A">Q&A</option>
            <option value="Forum">포럼</option>
            <option value="Blog">블로그</option>
            <option value="Chat">채팅</option>
          </select>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="All">모든 언어</option>
            <option value="Global">Global</option>
            <option value="Korean">Korean</option>
          </select>
        </div>
      </header>
      <CommunityList items={filteredCommunities} highlight={search} showType showLanguage />
    </div>
  );
}

export default App;