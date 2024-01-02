import dbConnect from '../../../../../lib/db/db.connect';
import { PendingWinners } from '../../../../../model/pendingWinners/pendingWinners.model';

const getPendingWinner = async id => {
  try {
    await dbConnect();
    const getAllpendingWinner = await PendingWinners.find({})
      .populate('winners.winner')
      .lean();
    if (!getAllpendingWinner) {
      return {
        success: false,
        data: null,
      };
    }
    if (getAllpendingWinner[0].winners?.length === 0) {
      return {
        success: false,
        data: null,
      };
    }

    const pendingwinner = getAllpendingWinner[0].winners.find(
      item => item._id.toString() === id,
    );
    if (!pendingwinner) {
      return {
        success: false,
        data: null,
      };
    }

    return {
      success: true,
      data: pendingwinner,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
};

export const getData = async req => {
  const { id } = req.params;

  if (!id) {
    return {
      success: false,
      data: null,
    };
  }
  const winnerData = await getPendingWinner(id);
  return winnerData;
};
