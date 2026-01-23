document.getElementById('download_button').addEventListener('click', function() {
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1pPIMkQXEewDEtFd2Nm-LuF9RGLp8TKlu';  

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_SalomonChoi.pdf'; 

    link.click();
});
