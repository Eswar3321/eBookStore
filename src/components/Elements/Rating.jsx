export const Rating = ({ rating }) => {
  const ratArray = Array(5).fill(false);
  let i = 0;
  while (i < rating) {
    ratArray[i] = true;
    i++;
  }
  return (
    <>
      {ratArray.map((ratFill) =>
        ratFill ? (
          <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
        ) : (
          <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
        )
      )}
    </>
  );
};
