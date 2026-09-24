from fastapi import APIRouter

from services.feature_matcher import (
    match_features
)

router = APIRouter()


@router.post("/match-features")
def run_matching():

    count = match_features(
        "uploads/frames"
    )

    return {
        "matches": count
    }