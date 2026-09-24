import cv2
import numpy as np


def estimate_pose(pts1, pts2):

    h = 720
    w = 1280

    focal = 1000.0

    K = np.array([
        [focal, 0, w / 2],
        [0, focal, h / 2],
        [0, 0, 1]
    ])

    E, mask = cv2.findEssentialMat(
        pts1,
        pts2,
        K,
        method=cv2.RANSAC,
        prob=0.999,
        threshold=3.0
    )
    if E is None:
        raise ValueError("Essential matrix estimation failed")

    _, R, t, mask = cv2.recoverPose(
        E,
        pts1,
        pts2,
        K
    )

    inlier_mask = mask.ravel() > 0

    pts1 = pts1[inlier_mask]
    pts2 = pts2[inlier_mask]

    print("Inliers:", len(pts1))

    return R, t, pts1, pts2