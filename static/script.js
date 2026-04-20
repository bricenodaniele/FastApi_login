async function controllaCredenziali() {
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    if (!username || !password ) 
        return alert("Scrivi username e  una password");
    const res = await fetch(`/login?username=${username}&password=${password}`);
     const dati = await res.json(); 
    //document.getElementById('risultato').innerText = dati.messaggio;
    if (dati.messaggio == 1){
        document.getElementById('risultato').innerText = "Benvenuto nel sito web";
        document.getElementById('username').style.display =  "none";
        document.getElementById('password').style.display =  "none";
}
else 
    doument.getElementById('risultato').innerText = "riprova";
}


document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);