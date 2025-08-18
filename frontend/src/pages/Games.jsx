import { useState } from 'react';
import { SearchButton } from '../components/UI/Buttons';
import { GameCategory } from '../components/UI/Cards';
import DropDown from '../components/UI/DropDown';

export default function Games() {
  const [searchForm, setSearchForm] = useState({
    query: '',
    sortType: 'desc',
  });

  return (
    <main>
      <Header searchForm={searchForm} setSearchForm={setSearchForm} />
      <Sort searchForm={searchForm} setSearchForm={setSearchForm} />
      {searchForm.query === '' ? (
        <Defaults />
      ) : (
        <Results searchForm={searchForm} />
      )}
    </main>
  );
}

function Header({ searchForm, setSearchForm }) {
  const handleSubmit = e => {
    e.preventDefault();

    console.log(searchForm);
  };

  return (
    <form action="" className="search-form" onSubmit={e => handleSubmit(e)}>
      <input
        className="input"
        type="text"
        placeholder={'Enter a game title...'}
        value={searchForm.query}
        onChange={e =>
          setSearchForm(prev => ({ ...prev, query: e.target.value }))
        }
      />
      <SearchButton />
    </form>
  );
}

function Sort({ searchForm, setSearchForm }) {
  const options = [
    { value: 'desc', label: 'Descending GC' },
    { value: 'asc', label: 'Ascending GC' },
    { value: 'latest', label: 'Latest Release' },
  ];

  const selectedOption =
    options.find(opt => opt.value === searchForm.sortType) || null;

  return (
    <>
      <DropDown
        setForm={setSearchForm}
        value={selectedOption}
        options={options}
      />
    </>
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
      <GameCategory />
      <GameCategory />
      <GameCategory />
      <GameCategory />
    </div>
  );
}
