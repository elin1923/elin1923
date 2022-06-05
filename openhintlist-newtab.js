function Open() {
    const d = new Date;
    var year = d.getFullYear();
    var month = d.getMonth() +1;
    var date = d.getDate();
    let url = `https://www.nytimes.com/${year}/${month}/${date}/crosswords/spelling-bee-forum.html`;
    window.open(url, "_blank")
}
