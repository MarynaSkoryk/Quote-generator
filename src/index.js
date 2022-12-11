function generate() {
  let quotes = {
    '- Deepak Chopra':
      '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
    '-Madeline Miller, The Song of Achilles':
      '"Bury us, and mark our names above. Let us be free."',
    '― Monique Duval':
      '"She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky."',
  };

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}
