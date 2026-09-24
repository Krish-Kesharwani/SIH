from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.pose import router as pose_router
from routes.reconstruction import (
    router as reconstruction_router
)
from routes.depth import router as depth_router

from routes.upload import (
    router as upload_router
)

from routes.matching import (
    router as matching_router
)

app = FastAPI(
    title="UAV 3D Reconstruction API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    reconstruction_router
)
app.include_router(pose_router)
app.include_router(
    upload_router
)

app.include_router(
    matching_router
)
app.include_router(depth_router)

@app.get("/")
def root():
    return {
        "message": "UAV Reconstruction Backend Running"
    }