document.getElementById('download_button').addEventListener('click', function() {
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=180YBf5jIE1uQLbtrb9BDtkoFyUfbJ7HD';  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_SalomonChoi.pdf'; 

    link.click();
});
