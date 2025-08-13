import { useState } from 'react';
import DropDown from '../components/UI/DropDown';
import InfoBox from '../components/UI/InfoBox';
import { GameCard } from '../components/UI/Cards';
import { IoIosSearch } from 'react-icons/io';

export default function Search() {
  const [searchForm, setSearchForm] = useState({
    query: '',
    searchType: 'game',
    sortType: 'desc',
  });

  return (
    <>
      <div className="content" id="search-content">
        <Header searchForm={searchForm} setSearchForm={setSearchForm} />
        <Sort searchForm={searchForm} setSearchForm={setSearchForm} />
        {searchForm.query === '' ? (
          <Defaults />
        ) : (
          <Results searchForm={searchForm} />
        )}
      </div>
      <Aside />
    </>
  );
}

function Header({ searchForm, setSearchForm }) {
  const toggleType = e => {
    e.preventDefault();
    if (searchForm.searchType === 'game') {
      setSearchForm(prev => ({
        ...prev,
        searchType: 'player',
      }));
    } else {
      setSearchForm(prev => ({
        ...prev,
        searchType: 'game',
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(searchForm);
  };

  return (
    <form action="" id="search-header" onSubmit={e => handleSubmit(e)}>
      <button type="button" onClick={e => toggleType(e)}>
        {searchForm.searchType.toUpperCase()}
      </button>
      <input
        className="input"
        type="text"
        placeholder={`Enter a ${
          searchForm.searchType === 'game' ? 'game title' : 'player name'
        }...`}
        value={searchForm.query}
        onChange={e =>
          setSearchForm(prev => ({ ...prev, query: e.target.value }))
        }
      />
      <button type="submit" className="search-button">
        <IoIosSearch />
      </button>
    </form>
  );
}

function Sort({ searchForm, setSearchForm }) {
  const options = [
    { value: 'desc', label: 'Descending GC' },
    { value: 'asc', label: 'Ascending GC' },
    { value: 'latest', label: 'Latest Release' },
  ];

  const handleChange = selectedOption => {
    setSearchForm(prev => ({
      ...prev,
      sortType: selectedOption ? selectedOption.value : '',
    }));
  };

  const selectedOption =
    options.find(opt => opt.value === searchForm.sortType) || null;

  return (
    <div id="search-sort-container">
      <p>Sort By:</p>
      <DropDown
        value={selectedOption}
        options={options}
        handleChange={handleChange}
      />
    </div>
  );
}

function Results({ searchForm }) {
  return (
    <div id="search-results-container">
      <p id="results-count"># Result(s) for '{searchForm.query}'</p>
      <div id="results-layout"></div>
    </div>
  );
}

function Defaults() {
  return (
    <div id="search-defaults-container">
      <div className='game-card-layout'>
        <GameCard gc={100}/>
        <GameCard gc={50}/>
        <GameCard gc={0}/>
        <GameCard gc={-50}/>
        <GameCard gc={-100}/>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <aside>
      <InfoBox header={'TIP!'}>
        <p>
          Search for games or fellow gamers. Use the button next to the input to
          toggle your search type.
        </p>
      </InfoBox>
    </aside>
  );
}