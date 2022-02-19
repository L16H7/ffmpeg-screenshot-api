import fs from 'fs';
import util from 'util';
import { Ffmpeg } from "./ffmpeg";

export class FfmpegService {
  public async extractScreenshot(timestamp: number, url: string): Promise<Ffmpeg> {
    const exec = util.promisify(require('child_process').exec);

    const image_id = Date.now();

    await exec(`ffmpeg -ss ${timestamp} -i ${url} \
      -vframes 1 -vcodec png -an -y ${image_id}.png`);

    try {
      const imageAsBase64 = fs.readFileSync(`./${image_id}.png`, 'base64');
      exec(`rm ./${image_id}.png`);
      return {
        "image": imageAsBase64
      };
    } catch (error) {
      throw new Error("Image Not Found");
    }
  }
}