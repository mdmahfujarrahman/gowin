import sendResponse from '../../../../helper/sendResponse/sendResponse';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const filterCategoryWinners = (
  payloadCategory,
  supar,
  fun,
  luckey,
  canditates,
) => {
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

export const isExistCheck = (payload, message) => {
  if (!payload)
    return sendResponse(
      {
        success: false,
        statusCode: 400,
        message: message,
        data: null,
      },
      400,
    );
};

export const bodyWinnerArrayLengthCheck = winners => {
  return (
    winners?.superSix.length > 0 ||
    winners?.funFour.length > 0 ||
    winners?.luckeyThree.length > 0
  );
};
