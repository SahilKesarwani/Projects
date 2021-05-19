const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.covid19india.org/data.json', true);

xhr.onload = function () {
    if(this.status === 200) {
        let obj = JSON.parse(this.responseText);
        let states = obj.statewise;
        
        let statsHTML = ``;
        let stats = '';

        states.forEach((ele, ind) => {
            if(ind >= 1) {
                stats = `
                    <tr>
                        <td>${ele["lastupdatedtime"]}</td>
                        <td>${ele["state"]}</td>
                        <td>${ele["confirmed"]}</td>
                        <td>${ele["active"]}</td>
                        <td>${ele["deaths"]}</td>
                        <td>${ele["recovered"]}</td>
                    </tr>
                    `;
            }
            statsHTML += stats;
        });
        document.getElementById('main-table').innerHTML += statsHTML;
    }else {
        console.error("Some Error Occured");
    }
}

xhr.send();