import dbConnect from '../../../lib/db/db.connect';
import { WinnersPhoto } from '../../../model/winners/winners.model';

export const getData = async () => {
  try {
    await dbConnect();
    const response = await WinnersPhoto.getAll();
    if (response.length > 0) {
      return {
        success: true,
        data: response[0].winners,
      };
    }
  } catch (error) {
    return {
      success: false,
      data: null,
    };
  }
};
