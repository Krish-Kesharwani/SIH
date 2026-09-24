import os
import cv2


def extract_frames(
    video_path,
    output_folder,
    frame_skip=5
):
    os.makedirs(output_folder, exist_ok=True)

    cap = cv2.VideoCapture(video_path)

    frame_count = 0
    saved_count = 0

    while True:

        success, frame = cap.read()

        if not success:
            break

        if frame_count % frame_skip == 0:

            frame_name = (
                f"frame_{saved_count:04d}.jpg"
            )

            frame_path = os.path.join(
                output_folder,
                frame_name
            )

            cv2.imwrite(
                frame_path,
                frame
            )

            saved_count += 1

        frame_count += 1

    cap.release()

    return saved_count