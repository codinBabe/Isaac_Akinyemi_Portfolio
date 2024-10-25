const AnchorTag = ({ text, link, classname }) => {
  return (
    <a className={classname} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default AnchorTag;
