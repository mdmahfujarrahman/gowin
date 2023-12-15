import request from 'request-promise';
import cheerio from 'cheerio';
import { Result } from '../../../../model/result/result.model';
import { uploadImage } from '../../utils/uploadImage.js';

export async function GET() {
  const response = await request('https://gowin.ae/results/');
  const $ = cheerio.load(response);
  const firstImage = $('.elementor-image-carousel img').first();
  const src = firstImage.attr('src');
  const alt = firstImage.attr('alt');
  const yeasterDayResult = await Result.previousResult();

  if (alt.includes('WhatsApp')) {
    if (
      src === yeasterDayResult[0].orginalImage &&
      alt === yeasterDayResult[0].orginalImageAlt
    ) {
      return Response.json({
        sucess: false,
        statusCode: 200,
        message: 'Result not updated yet',
      });
    }
  } else if (alt.includes('Draw Results')) {
    if (
      src === yeasterDayResult[0].orginalImage &&
      alt === yeasterDayResult[0].orginalImageAlt
    ) {
      return Response.json({
        sucess: false,
        statusCode: 200,
        message: 'Result not updated yet',
      });
    }
  }

  const newImage = await uploadImage(src);

  const upload = await Result.create({
    orginalImage: src,
    image: newImage,
    resultCode: parseInt(yeasterDayResult[0].resultCode) + 1,
    orginalImageAlt: alt,
  });
  return Response.json(upload);
}
