from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import staticfiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") 
def home():
    return FileResponse('static/home.html')

@app.get("/login")
def controlla(username : str, password : str):
    if username == "admin" && password == "xxx123##":
        risposta = {"messaggio": 1}
    else:
        risposta = {"messaggio": 0}
    return(risposta)