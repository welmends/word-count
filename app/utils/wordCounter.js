const wordCounter = (content) => {
  if (content.length === 0) {
    return 0;
  } else {
    return content
      .trim()
      .split("\n")
      .filter((word) => word !== "")
      .join(" ")
      .split(" ")
      .filter((word) => word !== "").length;
  }
};

export default wordCounter;
