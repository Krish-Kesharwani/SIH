from fastapi import APIRouter
from services.feature_matcher import match_features
from services.pose_estimator import estimate_pose

router = APIRouter()


@router.post("/estimate-pose")
def estimate():

    result = match_features(
        "uploads/frames"
    )
    print(type(result))
    print(len(result))

    if result is None:
        return {
            "error": "No valid matches found"
        }

    pts1, pts2 = result

    R, t, pts1, pts2 = estimate_pose(pts1, pts2)
    from services.triangulation import (
        triangulate_points
    )

    points_3d = triangulate_points(
        pts1,
        pts2,
        R,
        t
    )

    print("3D Point Shape:", points_3d.shape)
    print("Min:", points_3d.min(axis=0))
    print("Max:", points_3d.max(axis=0))
    print("Mean:", points_3d.mean(axis=0))
    from services.pointcloud_writer import (
        save_ply
    )

    save_ply(
        points_3d,
        "outputs/pointcloud.ply"
    )


    print(
        "3D Point Shape:",
        points_3d.shape
    )


    return {
        "rotation_shape": list(R.shape),
        "translation_shape": list(t.shape),
        "points_shape": list(points_3d.shape),
        "saved": True
    }