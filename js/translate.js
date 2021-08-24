const AVAILABLE_LANGUAGES = ['ge', 'en'];

const DICTIONARY = {
        'jan': {'en': 'January', 'ge': 'იანვარი'},
        'feb': {'en': 'February', 'ge': 'თებერვალი'},
        'mar': {'en': 'March', 'ge': 'მარტი'},
        'apr': {'en': 'April', 'ge': 'აპრილი'},
        'may': {'en': 'May', 'ge': 'მაისი'},
        'jun': {'en': 'June', 'ge': 'ივნისი'},
        'jul': {'en': 'July', 'ge': 'ივლისი'},
        'aug': {'en': 'August', 'ge': 'აგვისტო'},
        'sep': {'en': 'September', 'ge': 'სექტემბერი'},
        'oct': {'en': 'October', 'ge': 'ოქტომბერი'},
        'nov': {'en': 'November', 'ge': 'ნოემბერი'},
        'dec': {'en': 'December', 'ge': 'დეკემბერი'},
        'present': {'en': 'Present', 'ge': "დღემდე"},
        '': {'en': '', 'ge': ''},
        'name': {'en': 'Rati Terashvili', 'ge': 'რატი ტერაშვილი'},
        'dig_market': {'en': 'Social Media Manager, Copywriter ', 'ge': 'სოციალური მედიის მენეჯერი, ქოფირაითერი'},
        'marketing_manager': {'en': 'Marketing Manager', 'ge': 'მარკეტინგის მენეჯერი'},
        'edu': {'en': 'Education', 'ge': 'განათლება'},
        'promete': {'en': 'Private School Promete', 'ge': 'სკოლა-ლიცეუმი პრომეთე'},
        'midhigh': {'en': 'Middle/High School', 'ge': 'საშუალო სკოლა'},
        'freeuni': {'en': 'Free University Of Tbilisi', 'ge': 'თბილისის თავისუფალი უნივერსიტეტი'},
        'degree': {'en': 'Bachelor of Social Sciences', 'ge': 'ბაკალვრი სოციალურ მეცნიერებებში'},
        'date': {'en': 'September 2015 - Present', 'ge': 'სექტემბერი 2015 - დღემდე'},
        'work': {'en': 'Work', 'ge': 'სამუშაო გამოცდილება'},
        'about': {'en': 'About', 'ge': 'ჩემ შესახებ'},
        'about_2': {'en': 'About me', 'ge': 'ჩემ შესახებ'},
        'down_cv': {'small': true, 'en': 'Download resume', 'ge': 'გადმოწერეთ რეზიუმე'},
        'resume': {'en': 'Resume', 'ge': 'რეზიუმე'},
        'contact': {'en': 'Contact', 'ge': 'დამიკავშირდით'},
        'about_me': {
            'small': true,
            'en': 'Hey, it\'s Rati over here - busy crafting efficient copies and managing social media. I\'m a fast, fast learner and love juices a lot. ',
            'ge': 'სალამი, მე რატი ვარ - დაკავებული ეფექტური ქოფის ცხობით და სოციალური მედიის მართვით. ვსწავლობ ჩქარა-ჩქარა და ძალიან მიყვარს წვენები.'
        },
        'methodology': {'en': 'Programming Methodology', 'ge': 'პროგრამირების მეთოდოლოგა', 'small': true},
        'abstractions': {'en': 'Programming Abstractions', 'ge': 'პროგრამირების აბსტრაქციები', 'small': true},
        'paradigms': {
            'en': 'Programming Paradigms (Computer Organization & Systems)',
            'ge': 'პროგრამირების პარადიგმები / კომპიუტერების წყობა და სისტემები ', 'small': true
        },
        'rdbms': {
            'en': 'Relational Database Management Systems',
            'ge': 'მონაცემთა ბაზების მართვის რელაციური სისტემები',
            'small': true
        },
        'algo': {'en': 'Algorithms and Data Structures', 'ge': 'მონაცემთა სტრუქტურები და ალგორითმები', 'small': true},
        'oop': {
            'en': 'Object Oriented Programming (Software Engineering)',
            'ge': 'ობიექტზე ორიენტირებული პროგრამირება / პროგრამული უზრუნველყოფის ინჟინერია',
            'small': true
        },
        'coursework': {'en': 'Related Coursework:', 'ge': 'გავლილი კურსები:'},
        'seclead': {'en': 'Teaching Assistant (Section Leader)', 'ge': 'ლექტორის ასისტენტი (სექციის ლიდერი)'},
        'seclead_date': {
            'en': 'March 2017 - July 2017 | October 2017 - present',
            'ge': 'მარტი 2017 - ივლისი 2017 | ოქტომბერი 2017 - დღემდე',
            'small': true
        },
        'seclead_description': {
            'small': true,
            'en': 'Responsible for grading programming homeworks of 8-10 students (functionality, efficiency,' +
                ' styling and documenting), explaining their mistakes and providing consultations\n' +
                '\n' +
                'if necessary.',
            'ge': 'სექციის ლიდერებს ევალებათ კონსულტაციები  გაუწიონ სტუდენტებს კომპიუტერული მეცნიერებების\n' +
                'ძირითად კურსებში და შეაფასონ მათ მიერ შესრულებული დავალებები აღნიშნულ კურსებში' +
                ' ფუნქციონალურობის, ეფექტურობის, სტილის და დოკუმენტაციის მიხედვით.'
        },
        'phone_number': {'en': 'Phone Number', 'ge': 'საკონტაქტო ნომერი', 'small': true},
        'gifts': {'en': 'Send me cool gadgets at', 'ge': 'ამავსეთ საჩუქრებით: '},
        'skills': {'en': 'Skills', 'ge': 'უნარები'},
        'soft': {'en': 'Software', 'ge': 'პროგრამები'},
        'personal': {'en': 'Personal', 'ge': 'პიროვნული'},
        'around_web': {'en': 'Around the Web', 'ge': 'მიპოვეთ ინტერნეტში'},
        'email_me': {'small': true, 'en': 'Email me at', 'ge': 'მომწერეთ ელ-ფოსტაზე '},
        'content_man': {'en': 'Content Manager, Copywriter', 'ge': 'კონტენტ მენეჯერი, ქოფირაითერი'},
        'nebula_resp': {
            'small': true,
            'en': 'Responsible for creating, posting, advertising (using the ads manager) content for social media,\n' +
                '                  writing copy for web-site and responding to inbox messages.',
            'ge': 'კონტენტის მოფიქრება და განთავსება სოციალურ მედიაში,\n' +
                'ვებ-საიტის ქოფირაითინგი,\n' +
                'ინბოქსში შემოსულ მესიჯებზე პასუხი'
        },
        'nebula_date': {
            'en': 'February 2017 - February 2018',
            'ge': 'თებერვალი 2017 - თებერვალი 2018',
            'small': true
        },

        'cpywrt': {'en': 'Copywriter', 'ge': 'ქოფირაითერი'},
        'bookgeo_descr': {
            'small': true,
            'en': 'Writing articles about Georgia in English.\n',
            'ge': 'სტატიების წერა ინგლისურად საქართველოს სხვადასხვა კუთხეზე.'
        },
        'bookgeo_date': {'en': '2017 August - present', 'ge': 'აგვისტო 2017 - დღემდე', 'small': true},
        'languages': {'en': 'Languages', 'ge': 'ენები'},
        'lang_ge': {'en': 'Georgian', 'ge': 'ქართული'},
        'lang_en': {'en': 'English', 'ge': 'ინგლისური'},
        'lang_ru': {'en': 'Russian', 'ge': 'რუსული'},
        'lang_nat': {'en': 'Native', 'ge': 'მშობლიურად'},
        'lang_flu': {'en': 'Fluent', 'ge': 'თავისუფლად'},
        'lang_lim': {'en': 'Limited', 'ge': 'ნაკლებად'},
        'advanced': {'en': 'Advanced', 'ge': 'კარგად'},
        'basic': {'en': 'Basic', 'ge': 'საწყისები'},
        'func_writing': {'en': 'Functional and laconic writing', 'ge': 'ფუნქციურად და ლაკონიურად წერა'},
        'punctuation': {'en': 'Proper use of punctuation marks', 'ge': 'სასვენი ნიშნების სწორად გამოყენება'},
        'space_det': {'en': 'Detecting extra whitespaces in texts', 'ge': 'ზედმეტი Space-ების შემჩნევა'},
        'googling': {'en': 'Googling', 'ge': 'დაგუგლვა'},
        'intern_soc': {'en': 'Intern Social Media Manager', 'ge': 'სტაჟიორი სოციალური მედიის მენეჯერი'},
        'gingers_date': {'en': 'October 2018 - November 2018', 'ge': 'ოქტომბერი 2018 - ნოემბერი 2018'},
        'gingers_resp': {
            'en': 'Responsible for managing different social media pages, advertising and making reports.',
            'ge': 'სხვადასხვა გვერდების მართვა, დარეკლამება და შესაბამისი რეპორტების კეთება',
            'small': true
        },
        'soc_media': {'en': 'Social Media Manager', 'ge': 'სოციალური მედიის მენეჯერი'},
        'vendoo_date': {'en': 'February 2019 - present', 'ge': 'თებერვალი 2018 - დღემდე'},
        'vendoo_resp': {
            'en': '',
            'ge': '',
            'small': true
        },
        'aldagi_title': {
            'en': 'Aldagi',
            'ge': 'ალდაგი'
        },
        'aldagi_desc': {
            'en': 'Aldagi',
            'ge': 'ალდაგი'
        },
        'soc_media_specialist': {
            'en': 'Social Media Specialist',
            'ge': 'სოციალური მედიის სპეციალისტი'
        },
        'bog_title': {
            'en': 'Bank of Georgia',
            'ge': 'საქართველოს ბანკი'
        },
        'founder_ceo': {
            'en': 'Co-Founder and CEO',
            'ge': 'თანადამფუძნებელი და დირექტორი'
        }
    }
;

function translate(lang) {
    function removeLanguages($, args) {
        for (var i in args) {

            jQuery(this).removeClass('lang-' + args[i]);

            jQuery(this).removeClass('lang-' + args[i] + '-small');
        }
    }

    $('.lang').each(function (index, element) {
        var key = $(this).attr('data-key');
        removeLanguages($(this), AVAILABLE_LANGUAGES);

        try {

            $(this).html(DICTIONARY[key][lang]);

            $(this).addClass('lang-' + lang + (DICTIONARY[key]['small'] === true ? '-small' : ''));
        } catch (e) {
            console.error(key)
        }
    });

}

function initTranslation() {

    $('.translate').click(function () {
        var lang = $(this).attr('id');
        translate(lang);
    });
    var currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (AVAILABLE_LANGUAGES.indexOf(currentLang.toLowerCase()) !== -1) {
        translate(currentLang);
    }
}
