// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const coutriesWithDifferentsLangagesAndLocation = () => {
  const listOfOfficialLanguages = [ 
    // data properties
    {
      country : 'Abkhazia', 
      officialLangage : [ 'Abkhaz', 'Russian' ], 
      regionalLangage : null, 
      minorityLangage : 'Gergia',
      widelySpolken : { 
        spoken : null,
        location : {
          coutrySide : 'North of Abkhazia'
        }
      }
    },  
  
    {
      country : 'Bulgaria', 
      officialLangage : null, 
      regionalLangage : null, 
      minorityLangage : null,  
      widelySpolken : { 
        spoken : null, 
        location : {
          coutrySide : null
        }
      }
    }, 
  
    { 
      country : 'China', 
      officialLangage : 'Standar Chinese', 
      regionalLangage : 'English (Honk Kong) & Portugese (Macau)', 
      minorityLangage : [ 'Mongolian', 'Uyghur', 'Tibetan', 'Zhuang', 'Kazakh', 'Korean' ], 
      widelySpolken : { 
        spoken : 'Other Sinitic languages',  
        location : {
          coutrySide : 'West China'
        }
      }
    }, 
  
    {
      country : 'Danemark', 
      officialLangage : [ 'Faroese (in the faroe Islands)', 'Kalaallisut (in Greenland)' ], 
      regionalLangage : 'German (in Southern Jutland)', 
      minorityLangage : null,
      widelySpolken : {
        spoken : 'English',
        location : {
          coutrySide : null
        }
      }
    },
  
    {
      country : 'Ecuador', 
      officialLangage : [ 'Spanish', 'Quenchua (official langage of intercultaral relation)' ], 
      regionalLangage : null, 
      minorityLangage : [ 'Kichwa (official minority langage)', 'Shuar (official minority langage)' ],
      widelySpolken : {
        spoken : null,
        location : {
          coutrySide : null
        }
      }
    },
  
    {
      country : 'Filand', 
      officialLangage : [ 'Finnish', 'Swedish' ], 
      regionalLangage : null, 
      minorityLangage : [ 'Sami (in Enontekiö, Inari, Sodankylä, Utsjoki)' ],
      widelySpolken : {
        spoken : 'English', 
        location : {
          coutrySide : 'East fo Filand'
        }
      }
    },
  
    {
      country : 'Germany', 
      officialLangage : 
      [ 
        'Danish (in Schleswig-Holstein)', 
        'Lower Sorbian (in Brandenburg)', 
        'North Frisian (in Schleswig-Holstein)', 
        'Saterland Frisian (in Lower Saxony)', 
        'Upper Sorbian (in Saxony)',
        'German Sign Language', 
        'Low German'
      ], 
      regionalLangage : [ 'Danish', 'Lower Sorbian', 'North Frisian', 'Romani[56]', 'Upper Sorbian' ], 
      minorityLangage : null,
      widelySpolken : {
        spoken : 'English',
        location : {
          coutrySide : 'Everywere in the country'
        }
      }
    }, 
  
    { 
      country : 'Gabon', 
      officialLangage : null, 
      regionalLangage : null, 
      minorityLangage : null,
      widelySpolken : {
        spoken : null,
        location : {
          coutrySide : null
        }
      }
    }
  ]; 
  console.log(listOfOfficialLanguages);
}
coutriesWithDifferentsLangagesAndLocation(); 