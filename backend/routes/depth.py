from fastapi import APIRouter

from services.depth_estimator import (
    estimate_depth,
    save_depth_map
)

router = APIRouter()

@router.post("/generate-depth")
def generate_depth():

    frame = "uploads/frames/frame_0000.jpg"

    depth = estimate_depth(frame)

    save_depth_map(
        depth,
        "outputs/depth_map.png"
    )

    return {
        "status": "done"
    }