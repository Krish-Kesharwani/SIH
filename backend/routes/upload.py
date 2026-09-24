from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import os

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload-video")
async def upload_video(
    video: UploadFile = File(...)
):

    save_path = os.path.join(
        UPLOAD_DIR,
        "input_video.mp4"
    )

    with open(save_path, "wb") as buffer:
        buffer.write(await video.read())

    return {
        "message": "Video uploaded",
        "filename": video.filename
    }