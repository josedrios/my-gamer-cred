function LabeledInput({
  type,
  id,
  label,
  placeholder,
  variants,
  value,
  setValue,
}) {
  return (
    <div className="labeled-input">
      {label ? (
        <label className="labeled-input__label" for={id}>
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        className="labeled-input__input"
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.current)}
        placeholder={placeholder}
      />
    </div>
  );
}

function InputSplit({ children }) {
  return <div className="input-split">{children}</div>;
}

export { LabeledInput, InputSplit };
