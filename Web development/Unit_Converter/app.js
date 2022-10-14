// All Units Whcih Can be converted from one another
var inputFrom;
var inputTo;
var listQuantities;
var selectQuantity;
var selectFrom;
var selectTo;
var precision;
var quantity;
var metaTagDescription;
var divSettings;
var divWhatsNew;
var divDisclaimer;
var divTips;
var currencies;

var defaultQuantityIndex = 9;
var quantities = [
  { 'name': 'Angle',
    'description': 'Convert angle measurements like degrees, radians, circles, turns.',
    'path': 'angle.htm',
    'defaultUnitIndex': 3,
    'units': [
      ["arcminute",          "",  'value/(360*60)',   'value * (360*60)'],
      ["arcsecond",          "",  'value/(360*3600)', 'value * (360*3600)'],
      ["circle",             "",  1],
      ["degree",             "Â°", 'value/360',  'value*360'],
      ["gon",                "",  'value/400',  'value*400'],
      ["grad",               "",  'value/400',  'value*400'],
      ["mil (Nato)",         "",  'value/6400', 'value*6400'],
      ["mil (Soviet Union)", "",  'value/6000', 'value*6000'],
      ["mil (Sweden)",       "",  'value/6300', 'value*6300'],
      ["octant",             "",  0.125],
      ["quadrant",           "",  0.25],
      ["radian",             "",  'value / (2 * Math.PI)', 'value * 2 * Math.PI'],
      ["revolution",         "",  1],
      ["sextant",            "",  'value/6', 'value * 6'],
      ["sign",               "",  'value/12', 'value * 12'],
      ["turn",               "",  1]
    ]},
  { 'name': 'Area',
    'description': 'Convert area measurements like square meters, square feet, acres.',
    'path': 'area.htm',
    'defaultUnitIndex': 11,
    'units': [
      ["acres",                      "",    4046.8564224],
      ["ares",                       "",    100],
      ["circular inches",            "",    0.000506707479],
      ["hectares",                   "",    1e4],
      ["hides",                      "",    485000],
      ["roods",                      "",    1011.7141056],
      ["square centimeters",         "cmÂ²", 1e-4],
      ["square feet (US & UK)",      "",    0.09290304],
      ["square feet (US survey)",    "",    0.092903411613],
      ["square inches",              "",    0.00064516],
      ["square kilometers",          "kmÂ²", 1e6],
      ["square meters",              "mÂ²",  1],
      ["square miles",               "",    2589988.110336],
      ["square millimeters",         "mmÂ²", 1e-6],
      ["squares (of timber)",        "",    9.290304],
      ["square rods (or poles)",     "",    25.29285264],
      ["square yards",               "",    0.83612736],
      ["townships",                  "",    93239571.972]
    ]},
  { 'name': 'Bits & Bytes',
    'description': 'Convert bits, bytes, kilobytes, gigabytes.',
    'path': 'bits.htm',
    'defaultUnitIndex': 5,
    'units': [
      ["bits",           "",   0.125],
      ["bytes",          "",   1],
      ["kilobits",       "Kb", 128],
      ["kilobytes",      "KB", 1024],
      ["megabits",       "Mb", 131072],
      ["megabytes",      "MB", 1048576],
      ["gigabits",       "Gb", 134217728],
      ["gigabytes",      "GB", 1073741824],
      ["terabits",       "Tb", 137438953472],
      ["terabytes",      "TB", 1099511627776],
      ["petabits",       "Pb", 140737488355328],
      ["petabytes",      "PB", 1125899906842624],
      ["exabits",        "Eb", 144115188075855872],
      ["exabytes",       "EB", 1152921504606846976]
    ]},
  { 'name': 'Currency',
    'description': 'Convert currency and calculate live foreign exchange rates with this free currency converter.',
    'path': 'currency.htm',
    'defaultUnitIndex': 30,
    'units': [
      ["Argentine Peso",         "ARS", "ARS"],
      ["Australian Dollar",      "A$",  'AUD'],
      ["Brazilian Real",         "R$",  "BRL"],
      ["British Pound Sterling", "Â£",   'GBP'],
      ["Canadian Dollar",        "CA$", 'CAD'],
      ["Chilean Peso",           "CLP", "CLP"],
      ["Chinese Yuan",           "CNÂ¥", 'CNY'],
      ["Danish Krone",           "kr",  'DKK'],
      ["Egyptian Pound",         "EGP", "EGP"],
      ["East Caribbean dollar",  "$",   'XCD'],
      ["Euro",                   "â‚¬",   'EUR'],
      ["Hong Kong Dollar",       "HK$", 'HKD'],
      ["Indian Rupee",           "Rs.", "INR"],
      ["Israeli New Sheqel",     "â‚ª",   "ILS"],
      ["Japanese Yen",           "Â¥",   'JPY'],
      ["Malaysian Ringgit",      "MYR", "MYR"],
      ["Mexican Peso",           "MX$", 'MXN'],
      ["New Zealand Dollar",     "NZ$", 'NZD'],
      ["Nigerian Naira",         "NGN", "NGN"],
      ["Norwegian Krone",        "NOK", "NOK"],
      ["Philippine Peso",        "â‚±",   'PHP'],
      ["Polish Zloty",           "PLN", "PLN"],
      ["Russian Ruble",          "RUB", 'RUB'],
      ["Singapore Dollar",       "$",   'SGD'],
      ["South African Rand",     "ZAR", 'ZAR'],
      ["South Korean Won",       "â‚©",   'KRW'],
      ["Swedish Krona",          "kr",  'SEK'],
      ["Swiss Franc",            "CHF", 'CHF'],
      ["Thai Baht",              "à¸¿",   'THB'],
      ["Turkish Lira",           "TRY", "TRY"],
      ["United States Dollar",   "$",   'USD']
    ]},
  { 'name': 'Density',
    'description': 'Convert density measurements like kilogram / cubic meter, milligram / liter, pounds / cubic inch.',
    'path': 'density.htm',
    'defaultUnitIndex': 6,
    'units': [
      ["grains/gallon (UK)",       "gr/gal", 0.000014253948343691203],
      ["grains/gallon (US)",       "gr/gal", 0.000017118011571775823],
      ["grams/cubic centimeters",  "g/cmÂ³",  1],
      ["grams/liter",              "g/l",    1e-3],
      ["grams/milliliters",        "g/ml",   1],
      ["kilograms/cubic meters",   "kg/mÂ³",  1e-3],
      ["kilograms/liter",          "kg/l",   1],
      ["megagrams/cubic meter",    "Mg/mÂ³",  1],
      ["milligrams/milliliter",    "mg/ml",  1e-3],
      ["milligrams/liter",         "mg/l",   1e-6],
      ["ounces/cubic inch",        "oz/inÂ³", 1.729994044],
      ["ounces/gallon (UK)",       "oz/gal", 0.006236023],
      ["ounces/gallon (US)",       "oz/gal", 0.007489152],
      ["pounds/cubic inch",        "lb/inÂ³", 27.679904],
      ["pounds/cubic foot",        "lb/ftÂ³", 0.016018463],
      ["pounds/gallon (UK)",       "lb/gal", 0.099776373],
      ["pounds/gallon (US)",       "lb/gal", 0.119826427],
      ["slugs/cubic foot",         "",       0.51531788206],
      ["tonnes/cubic meter",       "",       1],
      ["tons (UK)/cubic yard",     "",       1.328939184],
      ["tons (US)/cubic yard",     "",       1.186552843]
    ]},
  { 'name': 'Electric Current',
    'description': 'Convert electric current measurements like ampere, watt / volt',
    'path': 'electric_current.htm',
    'defaultUnitIndex': 1,
    'units': [
      ["abampere",                        "abA", 10],
      ["ampere",                          "A", 1],
      ["biot",                            "Bi", 10],
      ["centiampere",                     "", 0.01],
      ["coulomb/second",                  "", 1],
      ["EMU of current",                  "", 10],
      ["ESU of current",                  "", 3.335641e-10],
      ["franklin/second",                 "", 3.335641e-10],
      ["gaussian electric current",       "", 3.335641e-10],
      ["gigaampere",                      "", 1e+9],
      ["gilbert",                         "Gi", 0.79577472],
      ["kiloampere",                      "kA", 1e3],
      ["megaampere",                      "", 1e6],
      ["microampere",                     "", 1e-6],
      ["milliampere",                     "mA", 1e-3],
      ["milliamp",                        "", 1e-3],
      ["nanoampere",                      "", 1e-9],
      ["picoampere",                      "", 1e-12],
      ["siemens volt",                    "", 1],
      ["statampere",                      "stA", 3.335641e-10],
      ["teraampere",                      "", 1e+12],
      ["volt/ohm",                        "", 1],
      ["watt/volt",                       "", 1],
      ["weber/henry",                     "", 1]
    ]},
  { 'name': 'Energy',
    'description': 'Convert energy measurements like calories, joules, megajoules, watt hour.',
    'path': 'energy.htm',
    'defaultUnitIndex': 16,
    'units': [
      ["Btu (th)",                  "",       1054.350],
      ["Btu (mean)",                "",       1055.87],
      ["calories (IT)",             "",       4.1868],
      ["calories (th)",             "",       4.184],
      ["calories (mean)",           "",       4.19002],
      ["calories (15C)",            "",       4.18580],
      ["calories (20C)",            "",       4.18190],
      ["calories (food)",           "",       4186],
      ["centigrade heat units",     "",       1900.4],
      ["electron volts",            "eV",     1.60219e-19],
      ["ergs",                      "",       1e-7],
      ["foot-pound force",          "ft lbs", 1.3558179483314004],
      ["foot poundals",             "",       0.042140],
      ["gigajoules",                "GJ",     1e9],
      ["horsepower hours",          "",       2684520],
      ["inch-pound force",         "in lbf",  0.11298482902761668],
      ["joules",                    "J",      1],
      ["kilocalories (IT)",         "",       4186.8],
      ["kilocalories (th)",         "",       4184],
      ["kilogram-force meters",     "",       9.80665],
      ["kilojoules",                "kJ",     1e3],
      ["kilowatt hours",            "kWh",    3600000],
      ["megajoules",                "MJ",     1e6],
      ["newton meters",             "Nm",     1],
      ["therms",                    "",       105505585.257348],
      ["watt seconds",              "Ws",     1],
      ["watt hours",                "Wh",     3600]
    ]},
  { 'name': 'Force',
    'description': 'Convert force measurements like newtons, pound force, tons force.',
    'path': 'force.htm',
    'defaultUnitIndex': 5,
    'units': [
      ["dynes",            "dyn", 1e-5],
      ["kilograms force",  "kgf", 9.80665],
      ["kilonewtons",      "kN",  1000],
      ["kips",             "",    4448.222],
      ["meganewtons",      "MN",  1e6],
      ["newtons",          "N",   1],
      ["pounds force",     "lbf", 4.4482216152605],
      ["poundals",         "pdl", 0.138255],
      ["sthÃ¨ne",           "sn",  1000],
      ["tonnes force",     "",    9806.65],
      ["tons force (UK)",  "",    9964.01641818352],
      ["tons force (US)",  "",    8896.443230521]
    ]},
  { 'name': 'Fuel Consumption',
    'description': 'Convert fuel consumption measurements like kilometers/liter, liters/100km, miles/gallon.',
    'path': 'fuel_consumption.htm',
    'defaultUnitIndex': 5,
    'units': [
      ["gallons (UK)/100 miles",         "",           2.8248093633182215859381213711925e-5],
      ["gallons (US)/100 miles",         "",           2.3521458333333333333333333333333e-5],
      ["kilowatt hours/100 miles",       "kWh/100 mi", 6.979661226508e-7],
      ["kilowatt hours/kilometer",       "kWh/km",     0.00011232675916913290752],
      ["kilometer/liter",                "km/l",       '0.001 / value', '0.001 / value'],
      ["liters/100 kilometer",           "",           0.00001],
      ["liters/meter",                   "l/m",        1],
      ["miles/gallon (UK)",              "mpg",        '2.8248093633182215859381213711925e-3 / value', '2.8248093633182215859381213711925e-3 / value'],
      ["miles/gallon (US)",              "mpg",        '2.3521458333333333333333333333333e-3 / value', '2.3521458333333333333333333333333e-3 / value'],
      ["miles/liter",                    "mi/l",       '6.2137119223733396961743418436332e-4 / value', '6.2137119223733396961743418436332e-4 / value'],
      ["car (2016 Nissan Leaf)",         "",           0.00002063285818713],
      ["car (2016 Tesla Model S - 90D)", "",           0.00002556680253623],
      ["car (2016 Honda Accord)",        "",           0.00009408583333333],
      ["car (2015 US Average)",          "",           0.0000926041666666666666]
    ]},
{ 'name': 'Length',
  'description': 'Convert length measurements like meter, inches, feet or light years.',
  'path': 'length.htm',
  'defaultUnitIndex': 18,
  'units': [
    ["Ã¥ngstrÃ¶ms",                       "Ã…",        1e-10],
    ["astronomical units",              "au",       149598550000],
    ["barleycorns",                     "",         0.008467],
    ["cables",                          "",         182.88],
    ["centimeters",                     "cm",       0.01],
    ["chains (surveyors')",             "",         20.116840233680467360934721869444],
    ["decimeters",                      "dm",       0.1],
    ["ells (UK)",                       "",         0.875],
    ["ems (pica)",                      "",         0.0042333],
    ["fathoms",                         "",         1.8288],
    ["feet (UK & US)",                  "",         0.3048],
    ["feet (US survey)",                "",         0.30480060960121920243840487680975],
    ["furlongs",                        "",         201.168],
    ["hands",                           "",         0.1016],
    ["hectometers",                     "hm",       100],
    ["inches",                          "in",       0.0254],
    ["kilometers",                      "km",       1000],
    ["light years",                     "",         9.460528405e15],
    ["meters",                          "m",        1],
    ["micrometers",                     "Âµm",       1e-6],
    ["mil",                             "",         0.0000254],
    ["miles (UK & US)",                 "",         1609.344],
    ["miles (nautical, international)", "",         1852],
    ["miles (nautical, UK)",            "",         1853.184],
    ["millimeters",                     "mm",       0.001],
    ["nanometers",                      "nm",       1e-9],
    ["parsecs",                         "",         3.0856776e16],
    ["picometers",                      "pm",       1e-12],
    ["Scandinavian mile",               "",         10000],
    ["thou",                            "",         0.0000254],
    ["yards",                           "",         0.9144]
  ]},
{ 'name': 'Mass',
  'description': 'Convert mass measurements like kilograms, pounds, stones.',
  'path': 'mass.htm',
  'defaultUnitIndex': 9,
  'units': [
    ["carats (metric)",                "",     0.0002],
    ["cental",                         "",     45.359237],
    ["decagrams",                      "dag",  0.01],
    ["Earth masses",                   "",     5.980e24],
    ["femtograms",                     "fg",   1e-18],
    ["grains",                         "",     0.00006479891],
    ["grams",                          "g",    1e-3],
    ["hectograms",                     "hg",   0.1],
    ["hundredweights",                 "",     50.80234544],
    ["kilograms",                      "kg",   1],
    ["kilotonnes",                     "",     1e6],
    ["megatonnes",                     "",     1e9],
    ["micrograms",                     "Âµg",   1e-9],
    ["milligrams",                     "mg",   1e-6],
    ["nanograms",                      "ng",   1e-12],
    ["ounces (US & UK)",               "oz",   0.028349523125],
    ["ounces (troy, precious metals)", "oz t", 0.0311034768],
    ["picograms",                      "pg",   1e-15],
    ["pounds (US & UK)",               "lbs",  0.45359237],
    ["pounds (troy, precious metals)", "",     0.3732417216],
    ["Solar masses",                   "",     1.989e30],
    ["slugs (g-pounds)",               "",     14.593903],
    ["stones",                         "st",   6.35029318],
    ["tons (UK or long)",              "",     1016.0469088],
    ["tons (US or short)",             "",     907.18474],
    ["tonnes (metric)",                "",     1000]
  ]},
  { 'name': 'Power',
    'description': 'Convert power measurements like watts, horsepower, joules/second.',
    'path': 'power.htm',
    'defaultUnitIndex': 13,
    'units': [
      ["Btu/hour",                     "",   0.2930711],
      ["Btu/minute",                   "",   17.584267],
      ["Btu/second",                   "",   1055.056],
      ["calories(th)/hour",            "",   0.001162222222222222],
      ["calories(th)/minute",          "",   0.069733333333333333],
      ["calories(th)/second",          "",   4.184],
      ["foot pounds-force/minute",     "",   0.022597],
      ["foot pounds-force/second",     "",   1.35582],
      ["gigawatts",                    "GW", 1e9],
      ["horsepowers (electric)",       "",   746],
      ["horsepowers (international)",  "",   745.69987158227022],
      ["horsepowers (water)",          "",   746.043],
      ["horsepowers (metric)",         "",   735.4988],
      ["watts",                        "W",  1],
      ["joules/hour",                  "",   0.0002777777777777778],
      ["joules/minute",                "",   0.016666666666666666],
      ["joules/second",                "",   1],
      ["kilocalories(th)/hour",        "",   1.162222222222222222],
      ["kilocalories(th)/minute",      "",   69.73333333333333333],
      ["kilogram-force meters/hour",   "",   0.002724],
      ["kilogram-force meters/minute", "",   0.163444],
      ["kilowatts",                    "kW", 1e3],
      ["megawatts",                    "MW", 1e6],
      ["terawatts",                    "TW", 1e12],
      ["ton of refrigeration",         "TR", 3516.853],
      ["petawatts",                    "PW", 1e15]
    ]},
  { 'name': 'Pressure',
    'description': 'Convert pressure measurements like pascals, psi, bars, atmospheres, newton/sq. meter',
    'path': 'pressure.htm',
    'defaultUnitIndex': 24,
    'units': [
      ["atmospheres",                   "atm",   101325],
      ["bars",                          "",      1e5],
      ["centimeters mercury",           "",      1333.22],
      ["centimeters water",             "",      98.0665],
      ["feet of water",                 "",      2989.06692],
      ["hectopascals",                  "hPa",   100],
      ["inches of water",               "",      249.08891],
      ["inches of mercury",             "",      3386.388],
      ["kilogram-forces/sq.centimeter", "",      98066.5],
      ["kilogram-forces/sq.meter",      "",      9.80665],
      ["kilonewtons/sq.meter",          "",      1e3],
      ["kilonewtons/sq.millimeter",     "",      1e9],
      ["kilopascals [kPa]",             "",      1000],
      ["kips/sq.inch",                  "",      6894760],
      ["meganewtons/sq.meter",          "",      1e6],
      ["meganewtons/sq.millimeter",     "",      1e12],
      ["megapascals [MPa]",             "",      1e6],
      ["meters of water",               "",      9806.65],
      ["millibars",                     "",      100],
      ["millimeters of mercury",        "mmHg",  133.322],
      ["millimeters of water",          "",      9.80665],
      ["newtons/sq.centimeter",         "N/cmÂ²", 1e4],
      ["newtons/sq.meter",              "N/mÂ²",  1],
      ["newtons/sq.millimeter",         "N/mmÂ²", 1e6],
      ["pascals",                       "Pa",    1],
      ["pounds-force/sq.foot",          "",      47.880],
      ["pounds-force/sq.inch",          "psi",   6894.757],
      ["poundals/sq.foot",              "",      1.44816],
      ["tons (UK)-force/sq.foot",       "",      107251],
      ["tons (UK)-force/sq.inch",       "",      15444300],
      ["tons (US)-force/sq.foot",       "",      95760],
      ["tons (US)-force/sq.inch",       "",      13789500],
      ["tonnes-force/sq.cm",            "",      98066500],
      ["tonnes-force/sq.meter",         "",      9806.65],
      ["torr (mm Hg 0Â°C)",              "",      133.322]
    ]},
  { 'name': 'Speed',
    'description': 'Convert speed measurements like kilometers/hour, miles/hour, knots.',
    'path': 'speed.htm',
    'defaultUnitIndex': 13,
    'units': [
      ["centimeters/minute",          "",     0.00016666666666666666],
      ["centimeters/second",          "",     0.01],
      ["feet/hour",                   "",     0.00008466683600033866],
      ["feet/minute",                 "",     0.00508],
      ["feet/second",                 "ft/s", 0.3048],
      ["inches/minute",               "",     0.0004233341800016934],
      ["inches/second",               "",     0.0254],
      ["kilometers/hour",             "km/h", 0.2777777777777778],
      ["kilometers/second",           "",     1000],
      ["knots",                       "kn",   0.5144444444444444444],
      ["Mach number (ISA/Sea level)", "",     340.2933],
      ["meters/hour",                 "m/h",  0.0002777777777777778],
      ["meters/minute",               "",     0.016666666666666666],
      ["meters/second",               "m/s",  1],
      ["miles/hour",                  "mph",  0.44704],
      ["miles/minute",                "",     26.8224],
      ["miles/second",                "",     1609.344],
      ["nautical miles/hour",         "",     0.5144444444444444444],
      ["Nm/24hr",                     "",     0.0214351851851851851],
      ["speed of light",              "",     2.9979e8],
      ["speed of sound",              "",     343],
      ["yards/hour",                  "",     0.000254000508001016],
      ["yards/minute",                "",     0.01524],
      ["yards/second",                "",     0.9144]
    ]},
  { 'name': 'Temperature',
    'description': 'Convert temperature measurements like Celsius, Fahrenheit, Kelvin.',
    'path': 'temperature.htm',
    'defaultUnitIndex': 0,
    'units': [
      ["Celsius",    "Â°C",  'value + 273.15',         'value - 273.15'],
      ["Fahrenheit", "Â°F",  '5/9 * (value + 459.67)', '9/5 * value - 459.67'],
      ["Kelvin",     "K",   1],
      ["Rankine",    "Â°R",  '5/9 * value',            '9/5 * value'],
      ["RÃ©aumure",   "Â°RÃ©", '5/4 * value + 273.15',   '4/5 * (value - 273.15)']
    ]},
  { 'name': 'Time',
    'description': 'Convert time measurements like seconds, minutes, hours, days, weeks, years.',
    'path': 'time.htm',
    'defaultUnitIndex': 15,
    'units': [
      ["centuries",                    "",    3153600000],
      ["days",                         "d",   86400],
      ["decades",                      "",    315360000],
      ["femtoseconds",                 "fs",  1e-15],
      ["fortnights",                   "",    1209600],
      ["hours",                        "h",   3600],
      ["microseconds",                 "Î¼s",  1e-6],
      ["millenia",                     "",    31536000000],
      ["milliseconds",                 "ms",  1e-3],
      ["minutes",                      "min", 60],
      ["months (Common)",              "",    2628000],
      ["months (Synodic)",             "",    2551442.8896],
      ["nanoseconds",                  "ns",  1e-9],
      ["picoseconds",                  "ps",  1e-12],
      ["quarters (Common)",            "",    7884000],
      ["seconds",                      "s",   1],
      ["shakes",                       "",    1e-8],
      ["weeks",                        "",    604800],
      ["years (Common)",               "y",   31536000],
      ["years (Average Gregorian)",    "",    31556952],
      ["years (Julian)",               "",    31557600],
      ["years (Leap)",                 "",    31622400],
      ["years (Tropical)",             "",    31556925.216]
    ]},
  { 'name': 'Volume',
    'description': 'Convert volume measurements like cubic meters, liters, gallons, pints.',
    'path': 'volume.htm',
    'defaultUnitIndex': 27,
    'units': [
      ["acre foot",               "",       1233481.83754752],
      ["barrels (oil)",           "bbl",    158.987294928],
      ["bushels (UK)",            "",       36.36872],
      ["bushels (US)",            "",       35.23907016688],
      ["centiliters",             "",       0.01],
      ["cubic centimeters",       "cmÂ³",    1e-3],
      ["cubic decimeters",        "dmÂ³",    1],
      ["cubic decameters",        "",       1e6],
      ["cubic feet",              "ftÂ³",    28.316846592],
      ["cubic inches",            "",       0.016387064],
      ["cubic kilometers",        "",       1e12],
      ["cubic meters",            "mÂ³",     1e3],
      ["cubic mile",              "",       4.168181825e12],
      ["cubic millimeters",       "",       1e-6],
      ["cubic yards",             "",       764.554857984],
      ["cups",                    "",       0.2365882365],
      ["deciliters",              "",       0.1],
      ["dram (imperial)",         "",       0.0035516328125000],
      ["dram (US)",               "",       0.0036966911953125],
      ["fluid ounces (imperial)", "fl oz",  0.0284130625],
      ["fluid ounces (US)",       "fl oz",  0.0295735295625],
      ["gallons (imperial)",      "gal",    4.54609],
      ["gallons, dry (US)",       "",       4.40488377086],
      ["gallons, liquid (US)",    "gal",    3.785411784],
      ["gill (imperial)",         "gi",     0.1420653125],
      ["gill (US)",               "gi",     0.11829411825],
      ["kiloliters",              "kl",     1e3],
      ["liters",                  "l or L", 1],
      ["liters (1901-1964)",      "",       1.000028],
      ["milliliters",             "ml",     1e-3],
      ["microliters",             "Âµl",     1e-6],
      ["nanoliters",              "nl",     1e-9],
      ["picoliters",              "pl",     1e-12],
      ["pints (imperial)",        "pt",     0.56826125],
      ["pints, dry (US)",         "",       0.5506104713575],
      ["pints, liquid (US)",      "pt",     0.473176473],
      ["quarts (imperial)",       "qt",     1.1365225],
      ["quarts, dry (US)",        "",       1.101220942715],
      ["quarts, liquid (US)",     "qt",     0.946352946],
      ["table spoons",            "",       0.01478676478125],
      ["tea spoons",              "",       0.00492892159375]
    ]}
];

function findQuantityIndexFromPathname(aPathname) {
  for (var i=0; i<quantities.length; i++) {
    if (aPathname == quantities[i].path) return i;
  }
}

function onDOMLoaded() {
  inputFrom      = document.getElementById('inputFrom');
  inputTo        = document.getElementById('inputTo');
  selectQuantity = document.getElementById('selectQuantity');
  listQuantities = document.getElementById('listQuantities');
  selectFrom     = document.getElementById('selectFrom');
  selectTo       = document.getElementById('selectTo');
  divSettings    = document.getElementById('settings');
  divWhatsNew    = document.getElementById('whatsNew');
  divDisclaimer  = document.getElementById('disclaimer');
  divTips        = document.getElementById('tips');
  precision      = loadData('precision', 6);

  var i;
  // Update description meta tag
  var lMetaTags = document.getElementsByTagName('meta');
  for (i=0; i < lMetaTags.length; i++) {
    if (lMetaTags[i].getAttribute("name") == 'description') {
      metaTagDescription = lMetaTags[i];
      break;
    }
  }

  var lListItems = '';
  for (i=0; i<quantities.length; i++) {
    addSelectOption(selectQuantity, quantities[i].name, '');
    // Do *not* use Ajax, but link to another page, because the google ads do not refresh with Ajax (it is not allowed).
//    lListItems += '<li id="list-item' + i + '"><a class="list-a" href="' + quantities[i].path + '" onclick="loadQuantity(' + i + '); return false;">' + quantities[i].name + '</a></li>';
    lListItems += '<li id="list-item' + i + '"><a class="list-a" href="' + quantities[i].path + '">' + quantities[i].name + '</a></li>';
  }
  listQuantities.innerHTML = lListItems;

  // Check if url contains a quantity
  var lURLFilename = getURLFilename();
  var lURLIndex;
  if (lURLFilename.length > 1) {
     lURLIndex = findQuantityIndexFromPathname(lURLFilename);
  }
  selectQuantity.selectedIndex = (lURLIndex != undefined)? lURLIndex : loadData('lastQuantityIndex', defaultQuantityIndex);
  loadQuantity(selectQuantity.selectedIndex);
}

function getURLFilename(){
  var lPath = window.location.pathname.substr(1).split("/");
  return lPath[1];
}

document.onclick = function() {
  closeSettings();
};

window.onkeydown = function(event) {
  if (event.keyCode == 27)
    closeSettings();
};

window.onpopstate = function() {
  var lPath = window.location.pathname.substr(1).split("/");
  var lURLIndex;
  if (lPath.length > 1) {
    lURLIndex = findQuantityIndexFromPathname(lPath[1]);
  }
  selectQuantity.selectedIndex = (lURLIndex != undefined)? lURLIndex : loadData('lastQuantityIndex', 0);
  loadQuantity(selectQuantity.selectedIndex, false);
};

function loadQuantity(aIndex, aPushState) {
  aPushState = (aPushState == undefined)? true : aPushState;
  quantity = quantities[aIndex];
  saveData('lastQuantityIndex', aIndex);
  document.title = "Convert " + quantity.name + ' - Unit Converter';
  if ((aPushState && history.pushState) && (getURLFilename() != quantity.path)) {
    history.pushState(null, document.title, quantity.path);
  }
  var lTitle    = '';
  var lSymbol   = '';
  removeSelectOptions(selectFrom);
  removeSelectOptions(selectTo);
  var i;
  for (i=0; i<quantity.units.length; i++) {
    lSymbol = quantity.units[i][1];
    lSymbol = (lSymbol.length > 0)? ' [' + lSymbol + ']' : '';
    lTitle  = quantity.units[i][0] + lSymbol;
    addSelectOption(selectFrom, lTitle, '');
    addSelectOption(selectTo,   lTitle, ''); // IE8 does not work with copying options using innerhtml
  }
  document.getElementById('quantity-title').innerHTML = 'Convert ' + quantity.name;
  metaTagDescription.content                          = quantity.description;
  inputFrom.value                                     = loadData('input' + quantity.name, 1);
  loadUnits();
  selectQuantity.selectedIndex = aIndex;
  var lItemID='';
  for (i=0; i<quantities.length; i++) {
    lItemID = 'list-item' + i;
    if (i == aIndex) document.getElementById(lItemID).className = 'selectedItem';
    else document.getElementById(lItemID).className = '';
  }

  convert();
}

if (document.addEventListener) {
  document.addEventListener( "DOMContentLoaded", function(){onDOMLoaded();}, false );
// IE8 and older do not support DOMContentLoaded
} else if ( document.attachEvent) {
  document.attachEvent("onreadystatechange", function(){if (document.readyState === "complete") {onDOMLoaded();} });
}

var lTempDiv = document.createElement("div");
lTempDiv.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
var isIE9AndLower = (lTempDiv.getElementsByTagName("i").length == 1);

// Works in IE8: IE8 does not work with innerHTML or adding <option> html elements.
function addSelectOption(aSelect, aName, aValue) {
  aSelect.options[aSelect.options.length] = new Option(aName, aValue);
}

// Shim: IE8 does not support Date.now
if (!Date.now) {
  Date.now = function() { return new Date().getTime(); };
}

function removeSelectOptions(aSelect)
{
  for(var i=aSelect.options.length-1; i>=0; i--) aSelect.remove(i);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function callServer(aURL, aCallback, aAsync) {
  if (aAsync === undefined ) {aAsync = true;}

  var lXMLHttp = new XMLHttpRequest();
  lXMLHttp.onreadystatechange=function(){
    if (lXMLHttp.readyState == 4 && lXMLHttp.status == 200)
      aCallback(lXMLHttp.responseText);
  };

  // Note: Use POST to prevent IE from caching the AJAX request
  lXMLHttp.open("GET", aURL, aAsync);
  lXMLHttp.send();
}

function getCurrencyRate(aFrom, aTo) {
  // Load currency data from server
  if ((currencies == undefined) || (Date.now() - getCurrencyRate.cache_timestamp > 1000 * 60 * 1)){
    var lURL = 'currencies.php';
    callServer(lURL,
      function(aResponse) {
        currencies = JSON.parse(aResponse);
        getCurrencyRate.cache_timestamp = Date.now();
      }, false
    );
  }

  var lFromRate = (aFrom == 'USD')? 1 : currencies.rates[aFrom];
  var lToRate   = (aTo   == 'USD')? 1 : currencies.rates[aTo];

  return lToRate / lFromRate;
}

function setConversionInfo(aText){
  var lDiv = document.getElementById('conversionInfo');
  if (aText == '') {
    lDiv.innerHTML = '';
    lDiv.display = 'none';
  } else {
    lDiv.innerHTML = aText;
    lDiv.display = 'block';
  }
}

function refreshCurrency(){
  convert(true);
}

function ConvertInternal(aFromUnitIndex, value, aToUnitIndex, aAnimate) {
  aAnimate = aAnimate || false;
  setConversionInfo('');
  var lUnit           = quantities[selectQuantity.selectedIndex];
  var lUnitFromFactor = lUnit.units[aFromUnitIndex][2];
  var lUnitToFactor   = lUnit.units[aToUnitIndex][2];

  if (quantity.name == 'Currency') {
    var lRate = getCurrencyRate(lUnitFromFactor, lUnitToFactor);
    value = value * lRate;
    var lDate = new Date(currencies.timestamp * 1000);
    setConversionInfo(
      lUnitFromFactor + '/' + lUnitToFactor +  ' exchange rate: ' + lRate.toFixed(4) +
      ' at ' + lDate.toLocaleString() + '<img id="imageRefresh" src="images/refresh.png" onclick="refreshCurrency();"><img id="imageRefreshProgress" src="images/progress_refresh.gif">');
    if (aAnimate) {
      var lImgRefresh  = document.getElementById('imageRefresh');
      var lImgProgress = document.getElementById('imageRefreshProgress');

      lImgRefresh.style.display  = 'none';
      lImgProgress.style.display = 'inline';

      setTimeout(
        function(){
          lImgRefresh.style.display  = 'inline';
          lImgProgress.style.display = 'none';
        }, 1000
      );
    }
  }
  else {
    if (isNumber(lUnitFromFactor)) {
      value = value * lUnitFromFactor;
    }
    else {
      value = eval(lUnitFromFactor);
    }

    if (isNumber(lUnitToFactor)) {
      value = value / lUnitToFactor;
    }
    else {
      value = eval(lUnit.units[aToUnitIndex][3]);
    }
  }
  return value;
}

function ie9minusConvert() {
  // oninput does not work in IE8- and is buggy in IE9. So we use the onkeyup even for ie9- not ideal (eg paste does not work),
  // but that is how the old converter worked.
  if (isIE9AndLower) convert();
}

function ie9minusConvertBack(){
  if (isIE9AndLower) convertBack();
}

function switchUnits() {
  var lToIndex = selectFrom.selectedIndex;
  selectFrom.selectedIndex = selectTo.selectedIndex;
  selectTo.selectedIndex   = lToIndex;
  saveUnits();
  convert();
}

function loadUnits(){
  function findIndexByText(aText) {
    for (var i=0; i<quantity.units.length; i++) {
      if (quantity.units[i][0] == aText) return i;
    }
    return -1;
  }

  selectFrom.selectedIndex = findIndexByText(loadData('from' + quantity.name, ''));
  // Index backup for backward compatibility
  if (selectFrom.selectedIndex == -1) selectFrom.selectedIndex = loadData('fromIndex' + quantity.name, quantity.defaultUnitIndex);

  selectTo.selectedIndex = findIndexByText(loadData('to' + quantity.name, ''));
  if (selectTo.selectedIndex == -1) selectTo.selectedIndex = loadData('toIndex' + quantity.name, quantity.defaultUnitIndex);
}

function saveUnits(){
  saveData('from' + quantity.name, quantity.units[selectFrom.selectedIndex][0]);
  saveData('to'   + quantity.name, quantity.units[selectTo.selectedIndex][0]);
}

function onChangeUnit() {
  saveUnits();
  convert();
}

function formatFloat(aFloat) {
  // http://stackoverflow.com/questions/7312468/javascript-round-to-a-number-of-decimal-places-but-strip-extra-zeros
  return parseFloat(aFloat.toFixed(precision));
}

function convert(aAnimate){
  var lFromValue = parseFloat(inputFrom.value);
  if (isNaN(lFromValue)) {
    inputTo.value = '';
  }
  else {
    var lUnitFromIndex = selectFrom.selectedIndex;
    var lUnitToIndex   = selectTo.selectedIndex;

    var lResult = ConvertInternal(lUnitFromIndex, lFromValue, lUnitToIndex, aAnimate);
    inputTo.value = formatFloat(lResult);
    saveData('input' + quantity.name, lFromValue);
  }
}

function convertBack() {
  var lFromValue = parseFloat(inputTo.value);

  if (isNaN(lFromValue)) {
    inputFrom.value = '';
  }
  else {
    var lUnitFromIndex = selectTo.selectedIndex;
    var lUnitToIndex   = selectFrom.selectedIndex;

    var lResult = ConvertInternal(lUnitFromIndex, lFromValue, lUnitToIndex);
    inputFrom.value = formatFloat(lResult);
  }
}

function saveData(aName, aValue) {
  try {
    localStorage.setItem(aName, aValue);
  } catch(e) {
    // Do nothing Safari in Private mode can not set localstorage.
  }
}

function loadData(aName, aDefaultValue) {
  var lValue = localStorage.getItem(aName);
  if (lValue != null) return lValue;
  else return aDefaultValue;
}

function stopEventPropagation(aEvent) {
  if (aEvent.stopPropagation) {
    aEvent.stopPropagation();
  }
  else if (window.event) {
    window.event.cancelBubble = true;
  }
}

function toggleSettings(event){
  divSettings.style.display = (divSettings.style.display != 'block')? 'block' : 'none';
  document.getElementById('inputOptionsDigits').value = precision;
  stopEventPropagation(event);
}

function toggleInfoForm(event, aDiv) {
  if (aDiv.clientHeight < 10) {
    aDiv.style.maxHeight = '0';
    setTimeout(function(){aDiv.style.display = 'block';setTimeout(function(){aDiv.style.maxHeight = '450px';}, 10);}, 10);
  } else {
    aDiv.style.maxHeight = '0';
    setTimeout(function(){aDiv.style.display = 'none';}, 500);
  }
  stopEventPropagation(event);
}

function toggleWhatsNew(event){
  toggleInfoForm(event, divWhatsNew);
}

function toggleTips(event){
  toggleInfoForm(event, divTips);
}

function toggleDisclaimer(event){
  toggleInfoForm(event, divDisclaimer);
}

function closeSettings(){
  divSettings.style.display = 'none';
}

function ie9minusSavePrecision(){
  if (isIE9AndLower) savePrecision();
}

function savePrecision() {
  precision = parseInt(document.getElementById('inputOptionsDigits').value);
  if (isNumber(precision)) {
    precision = (precision <= 17)? precision : 17;
    precision = (precision >= 2)?  precision : 2;
    saveData('precision', precision);
    convert();
  }
}