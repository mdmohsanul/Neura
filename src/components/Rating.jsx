import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, max = 5 ,count}) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      // Full star
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (value >= i - 0.5) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return <div className="flex items-center gap-1">{stars} ({count})</div>;
};

export default Rating;
