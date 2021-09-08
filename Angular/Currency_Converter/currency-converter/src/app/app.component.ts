import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';

  public fromCurrency: any ="";
  public toCurrency: any ="";
  public amount: any ="";

convertCurrency() {

//   const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch('https://api.fastforex.io/convert?from=USD&to=EUR&amount=200&api_key=01771ff399-55cf1192a0-qyt12h', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

  var xmlhttp = new XMLHttpRequest();
  var url = "http://data.fixer.io/api/convert?access_key=0aa3c229d57db3eb19b663096edd3b62 & " + this.fromCurrency + "," + this.toCurrency + "," + this.amount;     
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = xmlhttp.responseText;
      alert(result);
      var jsResult = JSON.parse(result);
    }
  }
}
  
}
