function StandardButton({ children, type, id, full = false, variant }) {
  const variantList = {
    primary: 'standard-btn--primary',
    test: 'standard-btn--test',
  };

  return (
    <button
      className={`standard-btn ${full ? 'standard-btn--full' : ''}
    ${variant ? variantList[variant] : ''}`}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
}

export { StandardButton };
