from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import staticfiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") 
def home():
    return FileResponse('static/home.html')