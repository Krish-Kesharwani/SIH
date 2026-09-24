from fastapi import APIRouter
import os
import shutil

from services.frame_extractor import (
    extract_frames
)

router = APIRouter()


@router.post("/extract-frames")
def extract():

    video_path = "uploads/input_video.mp4"

    output_folder = (
        "uploads/frames"
    )

    count = extract_frames(
        video_path,
        output_folder
    )

    return {
        "frames_saved": count
    }


@router.delete("/clear-project")
def clear_project():

    folders = [
        "uploads/frames",
        "outputs",
        "temp",
        "cache"
    ]

    for folder in folders:

        if os.path.exists(folder):

            shutil.rmtree(folder)

            os.makedirs(
                folder,
                exist_ok=True
            )

    files = [
        "uploads/input_video.mp4",
        "rotation.npy",
        "translation.npy"
    ]

    for file in files:

        if os.path.exists(file):
            os.remove(file)

    return {
        "status": "success",
        "message": "Project cleared"
    }