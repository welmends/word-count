const charsCounter = (content) => {
  if (content.length === 0) {
    return 0;
  } else {
    return content.replace(" ", "").replace("\n", "").length;
  }
};

export default charsCounter;
