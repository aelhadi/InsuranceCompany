(function(){
  "use strict"
  
  angular.module('coreModule', ['pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {
       // add translation tables
      $translateProvider.translations('en', translationsEN);
      $translateProvider.translations('srb', translationsSRB);
      $translateProvider.preferredLanguage('en');
      $translateProvider.fallbackLanguage('en');
}]);

var translationsEN = {
    INSURANCE: 'Travel insurance',
    TYPEOFTRAVEL: 'Type of travel',
    FAMILY: 'Family',
    SELF: 'Individual',
    ADULT: 'Number of adults',
    KIDS: 'Number of kids',
    PURPOSE: 'Travel purpose',
    TOURIST: 'Vacation',
    SPORT: 'Active holiday(Skiing...)',
    BUSINESS: 'Business travel',
    STATE: 'State',
    NO_DAYS: 'Number of days',
    CANCEL: 'CANCEL',
    NEXT: 'NEXT',
    PREVIOUS:'PREVIOUS',
    CHOOSE:'Choose your insurance',
    BUTTON_LANG_SRB: 'Serbian',
    BUTTON_LANG_EN: 'English',
    OFFER:'Package offer',
    PACKAGE:'Choose package',
    PRICE:'Price',
    PACKAGE1:'Standard: Complete medical assistance is defined standard package cover.The cost of transport to the hospital, treatment and hospitalization. Medical and orthopedic equipment overwritten by a doctor.Treatment of acute toothache amounting to 150 €. Back in the patient'+'s home country in the amount of up to € 2,000.',
    PACKAGE2:'Comfort: Complete medical assistance is defined comfort package cover. The cost of transport to the hospital, treatment and hospitalization. Medical and orthopedic equipment overwritten by a doctor.Treatment of acute toothache of up to € 300. Back patient'+'s home of up to € 7,000.Loss or theft of luggage up to 100 €. Translation service.',
    PACKAGE3:'Exclusive: Complete medical assistance is defined exclusive package cover.The cost of transport to the hospital, treatment and hospitalization. Medical and orthopedic equipment overwritten by a doctor.Treatment of acute toothache of up to € 300. Back patient'+'s home of up to € 10,000.Loss or theft of baggage amounting to 200 €.Translation service. Return of children who have lost control (air ticket).Finding a lawyer at the expense of the insured.',
    USER:'User',
    NAME:'Name',
    SURNAME:'Surname',
    DATEBIRTH:'Date of birth',
    PASSPORT:'Passport number',
    SEX:'Sex',
    MALE:'Male',
    FEMALE:'Female',
    OTHER:'Other',
    INFO:'Personal info',
    PAYMENT:'Billing options',
    FINISH: 'Finish',
    INSURANCE_WIZARD: 'Insurance wizard',
    DATE: 'Enter start date',
    DATE_END: 'Enter end date',
    HOME: 'Home',
    ABOUT: 'About',
    LOGO_PHOTO: '/images/logo_full_white.png',
    ENGLISH: 'ENGLISH',
    SERBIAN: 'SERBIAN',
    TITLE: 'ZSBDI Insurance',
    START: 'Choose your insurance',
    SPORT_TYPE: 'Type of activity',
    ADDITIONAL_OPTIONS: 'Additional options',
    OFFER: "With us, you don't have to think about anything, we are thinking for you. <br /> Take a look at additional offers we have prepared for you.",
    HOME_INSURANCE: 'Home insurance',
    HOME_INSURANCE_INFO: 'Home insurance info',
    ADDRESS: 'Address',
    HOME_OWNER: 'Owner (Name and Surname)',
    JMBG_HOME_OWNER: "Owner's JMBG",
    FLAT_SIZE: 'Surface area',
    BUILD_YEAR: 'The Year of construction',
    ESTIMATED_VALUE: 'Estimated value',
    TYPE_OF_HOME_INSURANCE: 'Type of insurance',
    USERS_INSURANCE: 'Users of the insurance',
    NOT_INTERESTED: 'I am not interested',
    VEHICLE_INSURANCE_WANT: 'I want assistence on the road insurance',
    HOME_INSURANCE_WANT: 'I want home insurance',
    VEHICLE_CHOOSE: 'Choose services',
    VEHICLE_YEAR: 'Year of manufacture',
    VEHICLE_PLATES_NO: 'Plates number',
    VEHICLE_UNDERCARRIAGE_NO: 'Undercarriage number',
    VEHICLE_BRAND: 'Brand of the vehicle',
    VEHICLE_INSURANCE: 'Vehicle insurance',
    VEHICLE_INSURANCE_INFO: 'Vehicle insurance info',
    OWNER_INFO: 'Owner information',
    FLOOD: 'Flood',
    FIRE: 'Fire',
    ROBERRY: 'Robbery',
    CURR_ADD_INS_PRICE: 'Insurance price',
    TOWING: 'Vehicle towing',
    REPAIR: 'Vehicle repair',
    ACCOMODATION: 'Hotel accomodation',
    ALT_TRANSPORT: 'Alternative transportation',
    REQUIRED: 'This is required',
    JMBG_INVALID: 'JMBG is not valid',
    TRAVEL_INSURANCE_POLICY: 'Travel insurance policy',
    DESTINATION: 'Destination',
    START_DATE: 'Start date',
    END_DATE: 'End date',
    USER_INFO_PRICE: 'User Info and Price per person',
    POLICY_OWNER_EMAIL: 'Policy owners email',
    TOTAL_PRICE: 'Total price',
    OWNER: 'Owner',
    INSURED_FROM: 'Insured from',
    TOTAL_PRICE_POLICY: 'Total price policy',
    TOWING_TO: 'Towing up to',
    REPAIR_TO: 'Repair up to',
    HOTEL_TO: 'Hotel up to',
    HOME_INFO: 'Home info',
    VEHICLE_INFO: 'Vehicle info',
    DAYS: 'Days',
    EMAIL_INVALID: 'Your email must look like an e-mail address (example@zsbdi.com).',
    PASS_LENG: 'Your passport number must consist of 9 numbers.',
   
    
};
 
var translationsSRB= {
    INSURANCE: 'Putno osiguranje',
    TYPEOFTRAVEL: 'Vrsta putovanja',
    FAMILY: 'Porodično',
    SELF: 'Individualno',
    ADULT: 'Broj odraslih',
    KIDS: 'Broj dece',
    PURPOSE:'Svrha putovanja',
    TOURIST: 'Turistički',
    SPORT: 'Aktivan odmor',
    BUSINESS: 'Poslovni put',
    STATE: 'Država',
    NO_DAYS: 'Broj dana',
    CANCEL: 'ODUSTANI',
    NEXT: 'DALJE',
    PREVIOUS:'NAZAD',
    CHOOSE:'Odabir putovanja',
    BUTTON_LANG_SRB: 'Srpski',
    BUTTON_LANG_EN: 'Engleski',
    OFFER:'Ponuda paketa',
    PACKAGE:'Izaberite paket',
    PRICE:'Cena',
    PACKAGE1:'Standard:Kompletna medicinska asistencija definisana standard paketom pokrića. Troškovi prevoza do bolnice, lečenja i hospitalizacije. Medicinska i ortopedska oprema prepisana od lekara. Lečenje akutne zubobolje u visini do 150€. Povratak pacijenta u domovinu u visini do 2.000€.',
    PACKAGE2:'Komfort: Kompletna medicinska asistencija definisana komfort paketom pokrića. Troškovi prevoza do bolnice, lečenja i hospitalizacije. Medicinska i ortopedska oprema prepisana od lekara. Lečenje akutne zubobolje u visini do 300€. Povratak pacijenta u domovinu u visini do 7.000€. Gubitak ili krađa prtljaga u visini do 100€. Prevodilačke usluge.',
    PACKAGE3:'Ekskluziv: Kompletna medicinska asistencija definisana ekskluziv paketom pokrića. Troškovi prevoza do bolnice, lečenja i hospitalizacije. Medicinska i ortopedska oprema prepisana od lekara. Lečenje akutne zubobolje u visini do 300€. Povratak pacijenta u domovinu u visini do 10.000€. Gubitak ili krađa prtljaga u visini do 200€. Prevodilačke usluge. Povratak dece koja su ostala bez nadzora (avionska karta). Pronalaženje advokata na račun osiguranika.',
    USER:'Korisnik',
    NAME:'Ime',
    SURNAME:'Prezime',
    DATEBIRTH:'Datum rođenja',
    PASSPORT:'Broj pasoša',
    SEX:'Pol',
    MALE:'Muški',
    FEMALE:'Ženski',
    OTHER:'Drugo',
    INFO:'Informacije o korisniku',
    PAYMENT:'Plaćanje',
    FINISH: 'Završi',
    INSURANCE_WIZARD: 'Osiguravajući čarobnjak',
    DATE: 'Unesi početni datum',
    DATE_END: 'Unesi krajnji datum',
    HOME: 'Početna',
    ABOUT: 'O nama',
    LOGO_PHOTO: '/images/logo_full_white_srb.png',
    ENGLISH: 'ENGLESKI',
    SERBIAN: 'SRPSKI',
    TITLE: 'ZSBDI Osiguranje',
    START: 'Izaberi svoje osiguranje',
    SPORT_TYPE: 'Vrta aktivnosti',
    ADDITIONAL_OPTIONS: 'Dodatne opcije',
    OFFER: 'Sa nama ne morate da razmišljate ni o čemu, mi mislimo za vas. <br /> Pogledajte koje dodatne opcije smo pripremili za vas.',
    HOME_INSURANCE: 'Osiguranje doma',
    VEHICLE_INSURANCE: 'Osiguranje vozila',
    HOME_INSURANCE_INFO: 'Informacije o domu',
    VEHICLE_INSURANCE_INFO: 'Informacije o vozilu',
    ADDRESS: 'Adresa',
    HOME_OWNER: 'Vlasnik (ime i prezime)',
    JMBG_HOME_OWNER: "JMBG vlasnika",
    FLAT_SIZE: 'Površina',
    BUILD_YEAR: 'Godina izgradnje',
    ESTIMATED_VALUE: 'Procenjena vrednost',
    TYPE_OF_HOME_INSURANCE: 'Vrsta osiguranja',
    USERS_INSURANCE: 'Korisnici osiguranja',
    NOT_INTERESTED: 'Nisam zainteresovan',
    VEHICLE_INSURANCE_WANT: 'Želim osiguranje Pomoć na putu',
    HOME_INSURANCE_WANT: 'Želim osiguranje doma',
    VEHICLE_CHOOSE: 'Izaberi usluge osiguranja',
    VEHICLE_YEAR: 'Godina proizvodnje',
    VEHICLE_PLATES_NO: 'Broj registarskih tablica',
    VEHICLE_UNDERCARRIAGE_NO: 'Broj šasije',
    VEHICLE_BRAND: 'Marka vozila',
    OWNER_INFO: 'Informacije o vlasniku',
    FLOOD: 'Poplava',
    FIRE: 'Požar',
    ROBERRY: 'Krađa',
    CURR_ADD_INS_PRICE: 'Cena osiguranja',
    TOWING: 'Šlepovanje vozila',
    REPAIR: 'Popravka vozila',
    ACCOMODATION: 'Smeštaj u hotelu',
    ALT_TRANSPORT: 'Alternativni prevoz',
    REQUIRED: 'Ovo je obavezno za unos',
    JMBG_INVALID: 'JMBG nije validan',
    TRAVEL_INSURANCE_POLICY: 'Polisa putnog osiguranja',
    DESTINATION: 'Destinacija',
    START_DATE: 'Početni datum',
    END_DATE: 'Krajnji datum',
    USER_INFO_PRICE: 'Informacije o korisniku i cena',
    POLICY_OWNER_EMAIL: 'Email nosioca polise',
    TOTAL_PRICE: 'Ukupna cena',
    OWNER: 'Vlasnik',
    INSURED_FROM: 'Osiguran od',
    TOTAL_PRICE_POLICY: 'Ukupna cena polise',

    TOWING_TO: 'šlepovanje do',
    REPAIR_TO: 'Popravka do',
    HOTEL_TO: 'Smeštaj do',
    HOME_INFO: 'Informacije o smeštaju',
    VEHICLE_INFO: 'Inforacije o vozilu',
    DAYS: 'Dani',
    EMAIL_INVALID: 'Vaš email mora da izgleda kao email adresa (example@zsbdi.com)',
    PASS_LENG: 'Vaš broj pasoša mora se sastojati od 9 cifara'

};





})();

