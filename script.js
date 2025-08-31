const resultBox = document.getElementById('result');
document.getElementById('converterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount greater than zero.";
    resultBox.className = "mt-8 p-5 bg-[#FDECEA] border border-[#DC3545] rounded-lg text-[#DC3545] font-semibold text-center min-h-[72px] fade-in";
    return;
  }

  if (from === to) {
    resultBox.textContent = "Please select two different currencies.";
    resultBox.className = "mt-8 p-5 bg-[#FDECEA] border border-[#DC3545] rounded-lg text-[#DC3545] font-semibold text-center min-h-[72px] fade-in";
    return;
  }

  // Mock conversion rates (Replace with API)
  const rates = {
    USD: 1, EUR: 0.92, BDT: 109.5, GBP: 0.81,
    JPY: 147.1, AUD: 1.45, CAD: 1.32, CHF: 0.90,
    CNY: 7.30, HKD: 7.85, INR: 84.0, MXN: 18.5,
    NZD: 1.56, NOK: 11.0, RUB: 79.3, SAR: 3.75,
    SEK: 10.2, SGD: 1.34, TRY: 31.0, ZAR: 18.9
  };

  const convertedAmount = (amount / rates[from]) * rates[to];
  resultBox.textContent = `${amount.toLocaleString()} ${from} = ${convertedAmount.toFixed(2).toLocaleString()} ${to}`;
  resultBox.className = "mt-8 p-5 bg-[#E9F5EE] border border-[#28A745] rounded-lg text-[#1B4332] font-semibold text-center min-h-[72px] fade-in";
});
