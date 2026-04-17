// NUOVA FUNZIONE: Saluto
async function ControllaCredenziali() {
    // 1. Prendiamo quello che l'utente ha scritto
    const username= document.getElementById('username').value;
 const password= document.getElementById('password').value;
    if (!username || !password ) return alert("Scrivi username e password");
        return;
    }

    // 2. Chiamiamo il server passando il nome nell'URL (?nome=...)
    const res = await fetch(`/login?username=${username}& password = ${password}`);
    const dati = await res.json();

    // 3. Mostriamo la risposta del server nella pagina
    document.getElementById('risultato').innerText = dati.messaggio;
}

document.getElementById('btn-registrati').addEventListener('click', ControllaCredenziali);