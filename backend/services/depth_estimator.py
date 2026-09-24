from transformers import pipeline
from PIL import Image
import numpy as np
import cv2

pipe = pipeline(
    "depth-estimation",
    model="depth-anything/Depth-Anything-V2-Small-hf"
)

def estimate_depth(image_path):

    image = Image.open(image_path)

    result = pipe(image)

    depth = np.array(result["depth"])

    return depth

def save_depth_map(depth, output_path):

    depth_norm = cv2.normalize(
        depth,
        None,
        0,
        255,
        cv2.NORM_MINMAX
    )

    depth_norm = depth_norm.astype("uint8")

    cv2.imwrite(
        output_path,
        depth_norm
    )