import cv2
import numpy as np


def triangulate_points(
    pts1,
    pts2,
    R,
    t
):

    h = 720
    w = 1280

    focal = 1000.0

    K = np.array([
        [focal, 0, w / 2],
        [0, focal, h / 2],
        [0, 0, 1]
    ])

    P1 = K @ np.hstack(
        (
            np.eye(3),
            np.zeros((3, 1))
        )
    )

    P2 = K @ np.hstack(
        (
            R,
            t
        )
    )

    points_4d = cv2.triangulatePoints(
        P1,
        P2,
        pts1.T,
        pts2.T
    )

    points_3d = (
        points_4d[:3] /
        points_4d[3]
    ).T

    print("Before filter:", len(points_3d))

    mask = (
        (points_3d[:, 2] > 0) &
        (points_3d[:, 2] < 100)
    )

    points_3d = points_3d[mask]

    print("After filter:", len(points_3d))
    return points_3d