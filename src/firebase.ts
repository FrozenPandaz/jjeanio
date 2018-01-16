import * as https from 'https';
import * as sharp from 'sharp';

import * as functions from 'firebase-functions';

import 'firebase/firestore';

import { getApp } from './server.app';

import { enableProdMode } from '@angular/core';

enableProdMode();

const app = getApp();

exports.server = functions.https.onRequest(app);

async function getImage(imageUrl: string): Promise<Buffer> {
	return new Promise<Buffer>((resolve, reject) => {
		https.get(imageUrl, (res) => {
			const data: Buffer[] = [];

			res.on('data', (chunk: Buffer) => {
				data.push(chunk);
			});

			res.once('end', () => {
				resolve(Buffer.concat(data));
			});
		});
	});
}

async function resizeImage(imageUrl: string, width: number, height: number) {
	const input = await getImage(imageUrl);
	return sharp(input)
		.crop(sharp.strategy.attention)
		.resize(width, height)
		.max()
		.toFormat('png')
		.toBuffer();
}

exports.images = functions.https.onRequest(async (req, res) => {
	try {
		const [, url] = req.path.split('/images/');
		const [ width, height ] = req.query.size
			.split('x')
			.map((str: string) => +str)
			.map((num: number) => {
				if (num <= 0) {
					return null;
				} else {
					return num;
				}
			});
		const image = await resizeImage(url, width, height);
		const year = 60 * 60 * 24 * 365.25;

		res.setHeader('Cache-Control', `public, max-age=${year}, s-maxage=${year}`);
		res.setHeader('Content-type', 'image/png');
		res.send(image);
	} catch (e) {
		console.error(e);
		res.send(e);
	}
});
