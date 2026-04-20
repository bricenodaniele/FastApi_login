async function controllaCredenziali() {
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    if (!username || !password ) 
        return alert("Scrivi username e  una password");
    const res = await fetch("/login?username=${username}& password = ${password}");
     const dati = await res.json(); 
    document.getElementById('risultato').innerText = dati.messaggio;
}

document.getElementById('btn-registrati').addEventListener('click', controllaCredenziali);