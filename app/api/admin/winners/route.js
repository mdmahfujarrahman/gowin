import request from 'request-promise';
import cheerio from 'cheerio';
// import { upl?oadImage } from '../../utils/uploadImage.js';
import { WinnersPhoto } from '../../../../model/winners/winners.model.js';
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  try {
    const response = await request('https://gowin.ae/winners/');
    const $ = cheerio.load(response);
    let winners = [];
    $('.elementor-image-carousel img').map((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt');
      winners.push({
        src,
        alt,
      });
    });

    const getPreviousWinners = await WinnersPhoto.getAll();
    console.log(getPreviousWinners[0].winners);

    const isNewWinner = winners.filter(element => {
      const isExit = !getPreviousWinners[0].winners.some(
        item => item.orginalImageAlt === element.alt,
      );
      return isExit;
    });

    console.log(isNewWinner);

    // const uploadPromises = winners.map(element => {
    //   const fileName = `${element?.alt
    //     ?.split('thumbs/')[1]
    //     ?.replace('WhatsApp-Image', 'GoWin-Winner')}`;
    //   return uploadImage(element.src, fileName, 'winnersGoWin');
    // });

    // const uploadedImages = await Promise.all(uploadPromises);

    // const winnersData = winners.map((element, index) => ({
    //   winnerImage: uploadedImages[index],
    //   winnerAlt: element.alt?.replace('WhatsApp Image', 'GoWin-Winner'),
    //   orginalImage: element.src,
    //   orginalImageAlt: element.alt,
    // }));

    // const updates = winnersData.filter(element => element?.winnerImage);
    // console.log(updates);

    // const upload = await WinnersPhoto.create({
    //   winners: updates,
    // });

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Result updated',
        data: isNewWinner,
      },
      200,
    );
  } catch (error) {
    console.log(error);
  }
}
