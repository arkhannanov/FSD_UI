/*
 * Default month names
 */
export const MonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'SeptemberP',
    'October',
    'November',
    'December',
];

/*
 * Default weekday names
 */
export const DayNames = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

/*
 * Add your locale here (if the first weekday isn't Sunday)
 */
export const StartOfWeek = {
    'ar-BH': 6,
    'ar-DZ': 6,
    'ar-JO': 6,
    'ar-KW': 6,
    'ar-LB': 6,
    'ar-LY': 6,
    'ar-MA': 6,
    'ar-OM': 6,
    'ar-QA': 6,
    'ar-SA': 6,
    'ar-SD': 6,
    'ar-SY': 6,
    'ar-TN': 6,
    'ar-AE': 6,
    'ar-YE': 6,
    'ca-ES': 1,
    'ca': 1,
    'cs-CZ': 1,
    'cs': 1,
    'da_DK': 1,
    'da': 1,
    'de-AT': 1,
    'de-DE': 1,
    'de-LU': 1,
    'de-CH': 1,
    'de': 1,
    'el-GR': 1,
    'el': 1,
    'en_GB': 1,
    'en-IE': 1,
    'es-AR': 1,
    'es-BO': 1,
    'es-CL': 1,
    'es-CO': 1,
    'es-CR': 1,
    'es-DO': 1,
    'es-EC': 1,
    'es-SV': 1,
    'es-GT': 1,
    'es-HN': 1,
    'es-MX': 1,
    'es-NI': 1,
    'es-PA': 1,
    'es-PY': 1,
    'es-PE': 1,
    'es-PR': 1,
    'es-ES': 1,
    'es-UY': 1,
    'es-VE': 1,
    'et-EE': 1,
    'et': 1,
    'fi-FI': 1,
    'fi': 1,
    'fr-BE': 1,
    'fr-KM': 1,
    'fr-FR': 1,
    'fr-GN': 1,
    'fr-LU': 1,
    'fr-MC': 1,
    'fr-CH': 1,
    'fr': 1,
    'hr-HR': 1,
    'hr': 1,
    'hu-HU': 1,
    'hu': 1,
    'id-ID': 1,
    'is-IS': 1,
    'is': 1,
    'it-IT': 1,
    'it-CH': 1,
    'it': 1,
    'lt-LT': 1,
    'lt': 1,
    'nl-BE': 1,
    'nl-NL': 1,
    'nl': 1,
    'nb-NO': 1,
    'nb': 1,
    'nn-NO': 1,
    'nn': 1,
    'pl-PL': 1,
    'pl': 1,
    'pt-MZ': 1,
    'pt-PT': 1,
    'pt': 1,
    'ro-MD': 1,
    'ro-RO': 1,
    'ro': 1,
    'sq-AL': 6,
    'ru-MD': 1,
    'ru-RU': 1,
    'ru-UA': 1,
    'ru': 1,
    'sk-SK': 1,
    'sk': 1,
    'sl-SI': 1,
    'sl': 1,
    'sr-Cyrl': 1,
    'sr-Cyrl-BA': 1,
    'sr-Cyrl-ME': 1,
    'sr-Cyrl-RS': 1,
    'sr-Latn': 1,
    'sr-Latn-BA': 1,
    'sr-Latn-ME': 1,
    'sr-Latn-RS': 1,
    'sr': 1,
    'sr-BA': 1,
    'sr-ME': 1,
    'sr-RS': 1,
    'sv-FI': 1,
    'sv-SE': 1,
    'sv': 1,
    'tr-TR': 1,
    'tr': 1,
    'uk-UA': 1,
    'uk': 1,
};


/*
 * Constants
 */

export const Events = {
    DATE_SELECTED: 'dateSelected',
};

export const ClassNames = {
    DAY: 'calendar__day',
    UPPER_HEADER: 'calendar__upperheader',
    BTN: 'calendar__btn',
    BTN_DISABLED: 'calendar__btn_disabled',
    BTN_PREV: 'calendar__btn-prev',
    BTN_NEXT: 'calendar__btn-next',
    HEADER: 'calendar__header',
    MONTH: 'calendar__month',
    ROOT: 'calendar',
    TABLE: 'calendar__table',
    TABLE_BODY: 'calendar__table-body',
    TABLE_CELL: 'calendar__table-cell',
    TABLE_CELL_DISABLED: 'calendar__table-cell_disabled',
    TABLE_CELL_SELECTED: 'calendar__table-cell_selected',
    TABLE_COL_HEADER: 'calendar__table-col-header',
    TABLE_HEAD: 'calendar__table-head',
    TABLE_ROW: 'calendar__table-row',
    YEAR: 'calendar__year',
    FOOTER: 'calendar__table-footer',
};

/*
 * Default options
 */
export const Defaults = {
    minDate: new Date(-8640000000000000),
    maxDate: new Date(8640000000000000),
};

