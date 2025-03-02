import request from 'request-promise';
import cheerio from 'cheerio';
import { Result } from '../../../../model/result/result.model.js';
import { uploadImage } from '../../utils/uploadImage.js';
import sendResponse from '../../../../helper/sendResponse/sendResponse.js';
import moment from 'moment';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  const response = await request('https://gowin.ae/results/');
  const $ = cheerio.load(response);
  const firstImage = $('.elementor-image-carousel img').first();
  const src = firstImage.attr('src');
  const alt = firstImage.attr('alt');
  const yeasterDayResult = await Result.previousResult();
  const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

  if (!yeasterDayResult.length) {
    const fileName = `Draw-Results-${moment().format('DD-MMM-YYYY')}.jpg`;
    const newImage = await uploadImage(src, fileName, 'draw-result');
    const upload = await Result.create({
      orginalImage: src,
      image: newImage,
      title: `Draw Results ${moment(date).format('DD MMM YYYY')}`,
      resultCode: 1,
      orginalImageAlt: alt,
    });
    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Result updated',
        data: upload,
      },
      200,
    );
  } else {
    if (alt.includes('WhatsApp')) {
      if (
        src === yeasterDayResult[0].orginalImage &&
        alt === yeasterDayResult[0].orginalImageAlt
      ) {
        return sendResponse(
          {
            success: false,
            statusCode: 200,
            message: 'Result not updated yet',
            data: [],
          },
          200,
        );
      }
    } else if (alt.includes('Draw Results')) {
      if (
        src === yeasterDayResult[0]?.orginalImage &&
        alt === yeasterDayResult[0]?.orginalImageAlt
      ) {
        return sendResponse(
          {
            success: false,
            statusCode: 200,
            message: 'Result not updated yet',
            data: [],
          },
          200,
        );
      }
    }
    const fileName = `Draw-Results-${moment().format('DD-MMM-YYYY')}.jpg`;
    const newImage = await uploadImage(src, fileName, 'draw-result');

    const upload = await Result.create({
      orginalImage: src,
      image: newImage,
      title: `Draw Results ${moment(date).format('DD MMM YYYY')}`,
      resultCode: parseInt(yeasterDayResult[0]?.resultCode) + 1,
      orginalImageAlt: alt,
    });

    return sendResponse(
      {
        success: true,
        statusCode: 200,
        message: 'Result updated',
        data: upload,
      },
      200,
    );
  }
}
