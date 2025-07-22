function Button({ label, url }) {
  return (
    <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default Button;
