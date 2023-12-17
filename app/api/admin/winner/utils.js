const filterCategoryWinners = (
  payloadCategory,
  supar,
  fun,
  luckey,
  canditates,
) => {
  console.log(canditates);
  return payloadCategory?.filter(
    winner =>
      canditates.map(id => id?.toString()).includes(winner) &&
      !supar?.map(id => id?.toString()).includes(winner) &&
      !fun?.map(id => id?.toString()).includes(winner) &&
      !luckey?.map(id => id?.toString()).includes(winner),
  );
};

export const filterWinners = (payloadWinners, previousWinners, canditates) => {
  const { superSix, funFour, luckeyThree } = previousWinners;

  const superSixWinners = filterCategoryWinners(
    payloadWinners?.superSix,
    superSix,
    funFour,
    luckeyThree,
    canditates,
  );
  const funFourWinners = filterCategoryWinners(
    payloadWinners?.funFour,
    superSix,
    funFour,
    luckeyThree,
    canditates,
  );
  const luckeyThreeWinners = filterCategoryWinners(
    payloadWinners?.luckeyThree,
    superSix,
    funFour,
    luckeyThree,
    canditates,
  );

  const updatedWinners = {
    superSix: [...superSix, ...superSixWinners],
    funFour: [...funFour, ...funFourWinners],
    luckeyThree: [...luckeyThree, ...luckeyThreeWinners],
  };

  return updatedWinners;
};
