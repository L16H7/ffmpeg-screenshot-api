## Project Description
This project is to take screenshot of a video at a desired timestamp.
FFmpeg is used to manipulate video.


### Usage
`${SERVER_URL}/ffmpeg/image?timestamp=${timestamp_in_second}&url=${url}`

- Timestamp must be given in seconds. e.g., 3 means 3 seconds point of the video.
- Url is where the video is located.


### Setup and run
After installing with `yarn install`, run `yarn build` to build the project. `yarn start` will start the server at PORT 3000. Running locally requires `ffmpeg` installed.

To build a docker image, run `yarn docker_build` and to run using docker, use `yarn docker_run` which will run at PORT 8070.
