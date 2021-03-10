import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit {

  columnDefs = [
    { field: 'id', sortable: true, filter: true, checkboxSelection: true },
    { field: 'first_name', sortable: true, filter: true, cellStyle: { color: 'black', 'background-color': '#aaffaa' } },
    { field: 'last_name', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'gender', sortable: true, filter: true },
    { field: 'ip_address' }
  ];

  rowData = [
    { id: '1', first_name: 'Kimberli', last_name: 'Parkeson', email: 'kparkeson0@parallels.com', gender: 'Agender', ip_address: '250.185.246.4' },
    { id: '2', first_name: 'Kerwinn', last_name: 'Edgerly', email: 'kedgerly1@livejournal.com', gender: 'Female', ip_address: '107.147.193.177' },
    { id: '3', first_name: 'Cherlyn', last_name: 'Snell', email: 'csnell2@state.tx.us', gender: 'Polygender', ip_address: '49.95.47.169' },
    { id: '4', first_name: 'Marina', last_name: 'Bedome', email: 'mbedome3@facebook.com', gender: 'Male', ip_address: '117.35.160.111' },
    { id: '5', first_name: 'Kinna', last_name: 'Lockhart', email: 'klockhart4@dell.com', gender: 'Agender', ip_address: '120.75.67.171' },
    { id: '6', first_name: 'Mandi', last_name: 'Marti', email: 'mmarti5@macromedia.com', gender: 'Genderfluid', ip_address: '129.71.72.170' },
    { id: '7', first_name: 'Pernell', last_name: 'Bener', email: 'pbener6@biglobe.ne.jp', gender: 'Non-binary', ip_address: '81.35.249.20' },
    { id: '8', first_name: 'Carolyne', last_name: 'Girkin', email: 'cgirkin7@joomla.org', gender: 'Bigender', ip_address: '72.114.97.250' },
    { id: '9', first_name: 'Belle', last_name: 'Cheverton', email: 'bcheverton8@furl.net', gender: 'Polygender', ip_address: '44.74.122.228' },
    { id: '10', first_name: 'Rossy', last_name: 'Zamudio', email: 'rzamudio9@unicef.org', gender: 'Male', ip_address: '175.245.86.219' },
    { id: '11', first_name: 'Caspar', last_name: 'Mac', email: 'cmaca@ftc.gov', gender: 'Genderqueer', ip_address: '236.30.3.162' },
    { id: '12', first_name: 'Dane', last_name: 'Goodrum', email: 'dgoodrumb@who.int', gender: 'Bigender', ip_address: '95.122.138.94' },
    { id: '13', first_name: 'Marylee', last_name: 'Grimditch', email: 'mgrimditchc@state.tx.us', gender: 'Bigender', ip_address: '220.155.129.190' },
    { id: '14', first_name: 'Iolanthe', last_name: 'Pittam', email: 'ipittamd@google.ru', gender: 'Male', ip_address: '21.142.110.65' },
    { id: '15', first_name: 'Sergio', last_name: 'Hanford', email: 'shanforde@hugedomains.com', gender: 'Non-binary', ip_address: '59.108.37.191' },
    { id: '16', first_name: 'Umeko', last_name: 'Pepys', email: 'upepysf@biglobe.ne.jp', gender: 'Bigender', ip_address: '243.78.151.30' },
    { id: '17', first_name: 'Hazlett', last_name: 'Andrioletti', email: 'handriolettig@umn.edu', gender: 'Non-binary', ip_address: '126.103.177.85' },
    { id: '18', first_name: 'Bartholemy', last_name: 'Hullock', email: 'bhullockh@ifeng.com', gender: 'Genderqueer', ip_address: '36.191.87.120' },
    { id: '19', first_name: 'Royal', last_name: 'McGillivrie', email: 'rmcgillivriei@mayoclinic.com', gender: 'Genderfluid', ip_address: '207.112.126.175' },
    { id: '20', first_name: 'Antons', last_name: 'Zamudio', email: 'azamudioj@gov.uk', gender: 'Genderqueer', ip_address: '181.135.76.201' },
    { id: '21', first_name: 'Clarice', last_name: 'Climo', email: 'cclimok@ning.com', gender: 'Polygender', ip_address: '116.91.37.38' },
    { id: '22', first_name: 'Dan', last_name: 'Aloshikin', email: 'daloshikinl@simplemachines.org', gender: 'Agender', ip_address: '136.76.26.108' },
    { id: '23', first_name: 'Maximo', last_name: 'Simnel', email: 'msimnelm@livejournal.com', gender: 'Bigender', ip_address: '220.238.235.8' },
    { id: '24', first_name: 'Shani', last_name: 'Lyttle', email: 'slyttlen@wsj.com', gender: 'Polygender', ip_address: '243.180.10.67' },
    { id: '25', first_name: 'Roderick', last_name: 'Du Fray', email: 'rdufrayo@g.co', gender: 'Bigender', ip_address: '214.121.172.74' },
    { id: '26', first_name: 'Cheslie', last_name: 'Halsey', email: 'chalseyp@myspace.com', gender: 'Non-binary', ip_address: '248.206.174.132' },
    { id: '27', first_name: 'Trudi', last_name: 'Wallington', email: 'twallingtonq@github.io', gender: 'Male', ip_address: '245.236.46.236' },
    { id: '28', first_name: 'Graehme', last_name: 'Keesman', email: 'gkeesmanr@bbb.org', gender: 'Genderfluid', ip_address: '212.194.175.203' },
    { id: '29', first_name: 'Frieda', last_name: 'Huyton', email: 'fhuytons@ustream.tv', gender: 'Bigender', ip_address: '37.78.47.13' },
    { id: '30', first_name: 'Susana', last_name: 'Enevold', email: 'senevoldt@twitpic.com', gender: 'Non-binary', ip_address: '161.3.193.79' },
    { id: '31', first_name: 'Micheil', last_name: 'Taile', email: 'mtaileu@loc.gov', gender: 'Bigender', ip_address: '76.19.96.144' },
    { id: '32', first_name: 'Abram', last_name: 'Kwietek', email: 'akwietekv@chron.com', gender: 'Male', ip_address: '211.246.211.238' },
    { id: '33', first_name: 'Tamarah', last_name: 'Bachanski', email: 'tbachanskiw@wunderground.com', gender: 'Female', ip_address: '80.254.247.191' },
    { id: '34', first_name: 'Ailis', last_name: 'Finnimore', email: 'afinnimorex@goo.gl', gender: 'Genderfluid', ip_address: '159.76.97.105' },
    { id: '35', first_name: 'Orlan', last_name: 'Daysh', email: 'odayshy@elpais.com', gender: 'Polygender', ip_address: '238.11.72.58' },
    { id: '36', first_name: 'Muriel', last_name: 'Featley', email: 'mfeatleyz@istockphoto.com', gender: 'Agender', ip_address: '65.142.121.158' },
    { id: '37', first_name: 'Gerome', last_name: 'Ericsson', email: 'gericsson10@biblegateway.com', gender: 'Female', ip_address: '243.111.132.101' },
    { id: '38', first_name: 'Gabrielle', last_name: 'Tilson', email: 'gtilson11@t.co', gender: 'Genderqueer', ip_address: '11.36.213.70' },
    { id: '39', first_name: 'Valeria', last_name: 'Giuroni', email: 'vgiuroni12@dell.com', gender: 'Male', ip_address: '228.42.121.48' },
    { id: '40', first_name: 'Evangelina', last_name: 'Webburn', email: 'ewebburn13@sina.com.cn', gender: 'Genderqueer', ip_address: '61.235.8.163' },
    { id: '41', first_name: 'Tybi', last_name: 'Hartropp', email: 'thartropp14@naver.com', gender: 'Female', ip_address: '154.169.55.35' },
    { id: '42', first_name: 'Kathi', last_name: 'Wille', email: 'kwille15@blogspot.com', gender: 'Bigender', ip_address: '78.165.224.88' },
    { id: '43', first_name: 'Elfreda', last_name: 'Rooper', email: 'erooper16@dailymail.co.uk', gender: 'Genderfluid', ip_address: '45.119.74.99' },
    { id: '44', first_name: 'Aurilia', last_name: 'Durdy', email: 'adurdy17@rediff.com', gender: 'Female', ip_address: '18.250.225.130' },
    { id: '45', first_name: 'Thaddus', last_name: 'Hollidge', email: 'thollidge18@fc2.com', gender: 'Genderqueer', ip_address: '97.124.155.155' },
    { id: '46', first_name: 'Scotti', last_name: 'Browne', email: 'sbrowne19@comcast.net', gender: 'Genderqueer', ip_address: '201.163.103.130' },
    { id: '47', first_name: 'Addison', last_name: 'Germain', email: 'agermain1a@deviantart.com', gender: 'Bigender', ip_address: '113.80.131.247' },
    { id: '48', first_name: 'Kaine', last_name: 'Lafuente', email: 'klafuente1b@linkedin.com', gender: 'Bigender', ip_address: '162.219.31.73' },
    { id: '49', first_name: 'Major', last_name: 'Errington', email: 'merrington1c@amazon.com', gender: 'Bigender', ip_address: '99.134.220.112' },
    { id: '50', first_name: 'Melania', last_name: 'Feare', email: 'mfeare1d@wordpress.org', gender: 'Non-binary', ip_address: '1.21.59.151' },
    { id: '51', first_name: 'Aleta', last_name: 'Corkel', email: 'acorkel1e@shinystat.com', gender: 'Genderqueer', ip_address: '179.142.217.227' },
    { id: '52', first_name: 'Reese', last_name: 'Draysey', email: 'rdraysey1f@hibu.com', gender: 'Genderqueer', ip_address: '35.213.172.219' },
    { id: '53', first_name: 'Shea', last_name: 'Cissen', email: 'scissen1g@psu.edu', gender: 'Genderfluid', ip_address: '80.197.135.26' },
    { id: '54', first_name: 'Ford', last_name: 'Jopson', email: 'fjopson1h@ustream.tv', gender: 'Genderfluid', ip_address: '89.6.90.239' },
    { id: '55', first_name: 'Vevay', last_name: 'Kings', email: 'vkings1i@merriam-webster.com', gender: 'Genderqueer', ip_address: '111.183.249.94' },
    { id: '56', first_name: 'Rhoda', last_name: 'Gantzman', email: 'rgantzman1j@google.ru', gender: 'Non-binary', ip_address: '167.25.254.211' },
    { id: '57', first_name: 'Seline', last_name: 'Bothen', email: 'sbothen1k@cnbc.com', gender: 'Bigender', ip_address: '217.7.184.136' },
    { id: '58', first_name: 'Koral', last_name: 'Esselen', email: 'kesselen1l@wp.com', gender: 'Genderfluid', ip_address: '239.7.217.114' },
    { id: '59', first_name: 'Yetta', last_name: 'Bisset', email: 'ybisset1m@cocolog-nifty.com', gender: 'Female', ip_address: '22.245.19.246' },
    { id: '60', first_name: 'Alysia', last_name: 'Darbishire', email: 'adarbishire1n@japanpost.jp', gender: 'Female', ip_address: '191.190.3.7' },
    { id: '61', first_name: 'Mallory', last_name: 'Lintot', email: 'mlintot1o@themeforest.net', gender: 'Bigender', ip_address: '146.31.215.235' },
    { id: '62', first_name: 'Carson', last_name: 'Purrington', email: 'cpurrington1p@imageshack.us', gender: 'Agender', ip_address: '71.72.200.114' },
    { id: '63', first_name: 'Drona', last_name: 'Shickle', email: 'dshickle1q@com.com', gender: 'Polygender', ip_address: '107.88.18.179' },
    { id: '64', first_name: 'Pierrette', last_name: 'Jaan', email: 'pjaan1r@domainmarket.com', gender: 'Male', ip_address: '44.66.188.199' },
    { id: '65', first_name: 'Sabra', last_name: 'Dennistoun', email: 'sdennistoun1s@webs.com', gender: 'Female', ip_address: '57.117.147.93' },
    { id: '66', first_name: 'Lazarus', last_name: 'Siemons', email: 'lsiemons1t@devhub.com', gender: 'Male', ip_address: '163.46.146.247' },
    { id: '67', first_name: 'Courtnay', last_name: 'Hanscome', email: 'chanscome1u@yellowbook.com', gender: 'Polygender', ip_address: '249.131.140.121' },
    { id: '68', first_name: 'Frankie', last_name: 'Trippett', email: 'ftrippett1v@xinhuanet.com', gender: 'Female', ip_address: '161.63.90.52' },
    { id: '69', first_name: 'Iolanthe', last_name: 'Creagh', email: 'icreagh1w@wiley.com', gender: 'Polygender', ip_address: '82.146.236.64' },
    { id: '70', first_name: 'Avril', last_name: 'McGeady', email: 'amcgeady1x@bbc.co.uk', gender: 'Female', ip_address: '23.204.122.26' },
    { id: '71', first_name: 'Ned', last_name: 'Jennrich', email: 'njennrich1y@hexun.com', gender: 'Agender', ip_address: '120.59.5.142' },
    { id: '72', first_name: 'Sheelagh', last_name: 'Glitherow', email: 'sglitherow1z@senate.gov', gender: 'Polygender', ip_address: '18.48.195.221' },
    { id: '73', first_name: 'Estevan', last_name: 'Hubbart', email: 'ehubbart20@addthis.com', gender: 'Bigender', ip_address: '136.8.182.7' },
    { id: '74', first_name: 'Ludwig', last_name: 'Storck', email: 'lstorck21@simplemachines.org', gender: 'Genderqueer', ip_address: '196.175.115.144' },
    { id: '75', first_name: 'Chiarra', last_name: 'Glison', email: 'cglison22@parallels.com', gender: 'Non-binary', ip_address: '195.147.57.204' },
    { id: '76', first_name: 'Quincy', last_name: 'Fanti', email: 'qfanti23@hibu.com', gender: 'Non-binary', ip_address: '148.16.244.121' },
    { id: '77', first_name: 'Jethro', last_name: 'Cadwallader', email: 'jcadwallader24@earthlink.net', gender: 'Non-binary', ip_address: '205.135.91.230' },
    { id: '78', first_name: 'Blondy', last_name: 'Ishak', email: 'bishak25@walmart.com', gender: 'Polygender', ip_address: '43.132.211.182' },
    { id: '79', first_name: 'Aurora', last_name: 'Plum', email: 'aplum26@wix.com', gender: 'Non-binary', ip_address: '149.73.13.170' },
    { id: '80', first_name: 'Murielle', last_name: 'Abbotts', email: 'mabbotts27@economist.com', gender: 'Genderfluid', ip_address: '96.151.74.250' },
    { id: '81', first_name: 'Tatiania', last_name: 'Wattinham', email: 'twattinham28@nbcnews.com', gender: 'Genderqueer', ip_address: '243.91.215.225' },
    { id: '82', first_name: 'Arv', last_name: 'Howsin', email: 'ahowsin29@amazon.de', gender: 'Agender', ip_address: '91.47.214.135' },
    { id: '83', first_name: 'Englebert', last_name: 'Wolters', email: 'ewolters2a@gov.uk', gender: 'Genderqueer', ip_address: '36.94.244.246' },
    { id: '84', first_name: 'Finn', last_name: 'Bannester', email: 'fbannester2b@bizjournals.com', gender: 'Bigender', ip_address: '63.100.245.79' },
    { id: '85', first_name: 'Blinnie', last_name: 'Cutbush', email: 'bcutbush2c@dropbox.com', gender: 'Bigender', ip_address: '8.253.246.174' },
    { id: '86', first_name: 'Lyndsey', last_name: 'Stormonth', email: 'lstormonth2d@ustream.tv', gender: 'Genderqueer', ip_address: '23.92.194.216' },
    { id: '87', first_name: 'Maryrose', last_name: 'Sibbson', email: 'msibbson2e@harvard.edu', gender: 'Non-binary', ip_address: '102.208.63.80' },
    { id: '88', first_name: 'Gael', last_name: 'Gobourn', email: 'ggobourn2f@dropbox.com', gender: 'Polygender', ip_address: '71.63.45.222' },
    { id: '89', first_name: 'Mal', last_name: 'Simpson', email: 'msimpson2g@umich.edu', gender: 'Non-binary', ip_address: '207.77.129.27' },
    { id: '90', first_name: 'Saudra', last_name: 'Basire', email: 'sbasire2h@state.gov', gender: 'Bigender', ip_address: '144.42.109.136' },
    { id: '91', first_name: 'Arty', last_name: 'Petric', email: 'apetric2i@cargocollective.com', gender: 'Genderfluid', ip_address: '204.216.197.1' },
    { id: '92', first_name: 'Kerrie', last_name: 'Arnley', email: 'karnley2j@answers.com', gender: 'Genderqueer', ip_address: '151.169.63.221' },
    { id: '93', first_name: 'Veronike', last_name: 'Gribben', email: 'vgribben2k@go.com', gender: 'Non-binary', ip_address: '130.155.177.0' },
    { id: '94', first_name: 'Filide', last_name: 'Castledine', email: 'fcastledine2l@thetimes.co.uk', gender: 'Genderqueer', ip_address: '161.20.51.107' },
    { id: '95', first_name: 'Yale', last_name: 'Smallthwaite', email: 'ysmallthwaite2m@census.gov', gender: 'Genderfluid', ip_address: '64.96.106.82' },
    { id: '96', first_name: 'Cooper', last_name: 'Defries', email: 'cdefries2n@canalblog.com', gender: 'Genderfluid', ip_address: '68.151.104.117' },
    { id: '97', first_name: 'Adan', last_name: 'Fermoy', email: 'afermoy2o@histats.com', gender: 'Agender', ip_address: '234.152.36.214' },
    { id: '98', first_name: 'Margette', last_name: 'Salerg', email: 'msalerg2p@samsung.com', gender: 'Female', ip_address: '114.232.93.210' },
    { id: '99', first_name: 'Ernestine', last_name: 'Pitblado', email: 'epitblado2q@sciencedirect.com', gender: 'Agender', ip_address: '124.125.99.56' },
    { id: '100', first_name: 'Tani', last_name: 'Bartell', email: 'tbartell2r@lulu.com', gender: 'Agender', ip_address: '47.219.22.140' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
