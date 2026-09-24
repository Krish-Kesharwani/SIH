import cv2
import os
import numpy as np

def match_features(frame_folder):

    frames = sorted([
        os.path.join(frame_folder, f)
        for f in os.listdir(frame_folder)
        if f.endswith(".jpg")
    ])

    if len(frames) < 2:
        return None
    print("Frames found:", len(frames))
    img = cv2.imread(frames[0])
    print("Image shape:", img.shape)
    sift = cv2.SIFT_create()
    all_pairs = []

    for i in range(len(frames) - 20):

        gap = 20
        img1 = cv2.imread(frames[i])
        img2 = cv2.imread(frames[i + gap])
        gray1 = cv2.cvtColor(
            img1,
            cv2.COLOR_BGR2GRAY
        )

        gray2 = cv2.cvtColor(
            img2,
            cv2.COLOR_BGR2GRAY
        )

        kp1, des1 = sift.detectAndCompute(
            gray1,
            None
        )

        kp2, des2 = sift.detectAndCompute(
            gray2,
            None
        )

        if des1 is None or des2 is None:
            continue

        matcher = cv2.BFMatcher()

        matches = matcher.knnMatch(
            des1,
            des2,
            k=2
        )

        good_matches = []
        for m, n in matches:

            if m.distance < 0.75 * n.distance:
                good_matches.append(m)

        pts1 = []
        pts2 = []

        for match in good_matches:
            pts1.append(
                kp1[match.queryIdx].pt
            )

            pts2.append(
                kp2[match.trainIdx].pt
            )
        pts1 = np.float32(pts1)
        pts2 = np.float32(pts2)
        print(
            f"Pair {i}: "
            f"kp1={len(kp1)} "
            f"kp2={len(kp2)} "
            f"good={len(good_matches)}"
        )

        if len(good_matches) > 1000:

            all_pairs.append(
                (
                    pts1,
                    pts2
                )
            )

            print(
                f"Accepted Pair {i} "
                f"with {len(good_matches)} matches"
            )
    if (len(all_pairs) == 0):
        return None
    return all_pairs[0]