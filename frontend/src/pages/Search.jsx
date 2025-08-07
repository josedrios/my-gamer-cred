import { useState } from 'react';
import Select from 'react-select';
import InfoBox from '../components/UI/InfoBox';

export default function Search() {
  const [searchForm, setSearchForm] = useState({
    query: '',
    searchType: 'game',
    sortType: 'descending',
  });

  return (
    <>
      <div className="content" id="search-content">
        <Header searchForm={searchForm} setSearchForm={setSearchForm} />
        <Sort searchForm={searchForm} setSearchForm={setSearchForm} />
        <Results />
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
      <button onClick={e => toggleType(e)}>
        {searchForm.searchType.toUpperCase()}
      </button>
      <input
        className="input"
        type="text"
        placeholder={`Enter a ${
          searchForm.searchType === 'game' ? 'game title' : 'player name'
        }...`}
      />
      <button type="submit">GO!</button>
    </form>
  );
}

function Sort({ searchForm, setSearchForm }) {
  const options = [
    { value: 'descending', label: 'Descending GC' },
    { value: 'ascending', label: 'Ascending GC' },
    { value: 'newest', label: 'Latest Release' },
  ];

  const handleChange = selectedOption => {
    setSearchForm(prev => ({
      ...prev,
      sortType: selectedOption ? selectedOption.value : '',
    }));
  };

  const selectedOption =
    options.find(opt => opt.value === searchForm.sortType) || null;

  const customStyles = {
    control: provided => ({
      ...provided,
      borderRadius: '0px',
      border: 'none',
      boxShadow:
        'inset -1px -1px 0 1px black, inset -3px -3px 0 1px #80808067, inset 0px 0px 0 2px white, inset 2px 2px 0 2px #c0c0c0',
      backgroundColor: '#c0c0c0',
      height: '30px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#efe' : '#fff',
      color: '#333',
      cursor: 'pointer',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#222',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#999',
    }),
  };

  return (
    <div id="search-sort-container">
      <p>Sort By:</p>
      <Select
        styles={customStyles}
        value={selectedOption}
        options={options}
        className="select"
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
}

function Results() {
  return <div></div>;
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
