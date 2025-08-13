import Select from 'react-select';

export default function DropDown({ value, options, handleChange }) {
  const customStyle = {
    control: provided => ({
      ...provided,
      borderRadius: '0px',
      border: 'none',
      boxShadow:
        'inset -1px -1px 0 1px black, inset -3px -3px 0 1px #80808067, inset 0px 0px 0 2px white, inset 2px 2px 0 2px #c0c0c0',
      backgroundColor: '#c0c0c0',
      height: '30px',
      color: '#000',
    }),
    menu: provided => ({
      ...provided,
      borderRadius: '0px',
      padding: '0px',
      margin: '0px',
    }),
    menuList: provided => ({
      ...provided,
      padding: '0px',
      margin: '0px',
    }),
    option: (provided, state) => ({
      ...provided,
      boxShadow:
        'inset -1px -1px 0 1px black, inset -3px -3px 0 1px #80808067, inset 0px 0px 0 2px white, inset 2px 2px 0 2px #c0c0c0',
      backgroundColor: '#c0c0c0',
      color: '#000',
      cursor: 'pointer',
      boxShadow: state.isFocused
        ? 'inset -1px -1px 0 1px white, inset -3px -3px 0 1px #c0c0c0, inset 0px 0px 0 2px black, inset 2px 2px 0 2px #80808067'
        : 'inset -1px -1px 0 1px black, inset -3px -3px 0 1px #80808067, inset 0px 0px 0 2px white, inset 2px 2px 0 2px #c0c0c0',
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
    <Select
      styles={customStyle}
      value={value}
      options={options}
      className="select"
      onChange={handleChange}
      placeholder=""
    />
  );
}
