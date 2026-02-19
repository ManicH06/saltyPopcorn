import { useState } from "react";
import Star from "./Star.jsx";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  ratingLabel = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: "0",
    margin: "1",
    color,
    fontSize: size,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating?.(rating);
/*     onSetRating && onSetRating(rating);
    onSetRating ? onSetRating(rating) : null;
    if (onSetRating) {
      onSetRating(rating);
    } */
  }

  if (ratingLabel.length > 0 && maxRating != ratingLabel.length) {
    console.error(`StarRating: expected ${maxRating} labels, got ${ratingLabel.length}`);
  }
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating > i : rating > i}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {ratingLabel.length === maxRating
          ? ratingLabel[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
