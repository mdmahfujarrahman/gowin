'use server';
import request from 'request-promise';
import cheerio from 'cheerio';
import { WinnersPhoto } from '../../../../model/winners/winners.model';
import { uploadImage } from '../../utils/uploadImage.js';

export const uploadAllWinnerImage = async () => {
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
  const uploadPromises = winners.map(element => {
    const fileName = `${element?.alt
      ?.split('thumbs/')[1]
      ?.replace('WhatsApp-Image', 'GoWin-Winner')}`;
    return uploadImage(element.src, fileName, 'winnersGoWin');
  });

  const uploadedImages = await Promise.all(uploadPromises);

  const winnersData = winners.map((element, index) => ({
    winnerImage: uploadedImages[index],
    winnerAlt: element.alt?.replace('WhatsApp Image', 'GoWin-Winner'),
    orginalImage: element.src,
    orginalImageAlt: element.alt,
  }));
  const updates = winnersData.filter(element => element?.winnerImage);

  const upload = await WinnersPhoto.create({
    winners: updates,
  });

  return upload;
};
