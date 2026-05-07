import './style.css'

// Selezioniamo gli elementi del DOM
const form = document.getElementById('booking-form') as HTMLFormElement;
const resultDiv = document.getElementById('result-message') as HTMLDivElement;

const nomeInput = document.getElementById('nome') as HTMLInputElement;
const personeInput = document.getElementById('persone') as HTMLInputElement;
const dataInput = document.getElementById('data') as HTMLInputElement;
const nottiInput = document.getElementById('notti') as HTMLInputElement;
const cameraSelect = document.getElementById('camera') as HTMLSelectElement;

// Definiamo le capacità massime per ogni tipo di camera
const cameraCapacity: { [key: string]: number } = {
  'singola': 1,
  'doppia': 2,
  'tripla': 3,
  'suite': 5
};

// Funzione per mostrare il messaggio di risultato
function showMessage(text: string, type: 'success' | 'error') {
  resultDiv.textContent = text;
  resultDiv.className = type; // success o error
  resultDiv.classList.remove('hidden');
}

// Gestore dell'evento di invio del modulo
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = nomeInput.value.trim();
  const persone = parseInt(personeInput.value);
  const dataArrivo = dataInput.value;
  const notti = parseInt(nottiInput.value);
  const tipoCamera = cameraSelect.value;

  // 1. Controllo validità dati base
  if (!nome || isNaN(persone) || isNaN(notti) || !dataArrivo) {
    showMessage("Per favore, compila tutti i campi correttamente.", "error");
    return;
  }

  // 2. Controllo capacità camera
  const maxOspiti = cameraCapacity[tipoCamera];
  if (persone > maxOspiti) {
    showMessage("Camera non adatta al numero di ospiti", "error");
    return;
  }

  // 3. Controllo durata soggiorno
  if (notti <= 0) {
    showMessage("Il numero di notti deve essere almeno 1", "error");
    return;
  }

  if (notti > 14) {
    showMessage("Contattare la struttura per soggiorni prolungati", "error");
    return;
  }

  // 4. Successo
  showMessage(`Grazie ${nome}, la tua richiesta per ${persone} persone in ${tipoCamera} dal ${dataArrivo} per ${notti} notti è stata accettata!`, "success");
  
  // Opzionale: resettiamo il form dopo un successo
  // form.reset();
});
