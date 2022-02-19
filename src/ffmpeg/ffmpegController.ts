import {
  Controller,
  Get,
  Query,
  Route,
  Response,
} from "tsoa";

import { Ffmpeg } from "./ffmpeg";
import { FfmpegService } from "./ffmpegService";

@Route("ffmpeg")
export class FfmpegController extends Controller {
  @Response<String>('default', 'Unexpected error')
  @Get("image")
  public async getUser(
    @Query() timestamp: number,
    @Query() url: string
  ): Promise<Ffmpeg> {
    return new FfmpegService().extractScreenshot(
      timestamp,
      url,
    )
  }
}