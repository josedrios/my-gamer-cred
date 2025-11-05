function LabeledInput({
  type,
  name,
  label,
  placeholder,
  variants,
  value,
  setValue,
}) {
  return (
    <div className="labeled-input">
      {label ? (
        <label className="labeled-input__label" for={name}>
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        className="labeled-input__input"
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.current)}
        placeholder={placeholder}
      />
    </div>
  );
}

export { LabeledInput };
