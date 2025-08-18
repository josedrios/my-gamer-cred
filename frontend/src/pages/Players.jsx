import { useState } from 'react';
import { SearchButton } from '../components/UI/Buttons';
import DropDown from '../components/UI/DropDown';

export default function Players() {
  const [searchForm, setSearchForm] = useState({
    query: '',
    sortType: 'desc',
  });

  return (
    <main>
      <Header searchForm={searchForm} setSearchForm={setSearchForm} />
      <Sort searchForm={searchForm} setSearchForm={setSearchForm} />
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
        type="text"
        className="input"
        placeholder="Enter a player tag"
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
