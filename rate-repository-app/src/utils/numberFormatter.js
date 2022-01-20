import Intl from 'intl';
import 'intl/locale-data/jsonp/en-GB';

export default function formatForThousands(number) {

    const britishNumberFormatter = new Intl.NumberFormat('en-GB');
    const parts = britishNumberFormatter.formatToParts(number);

    if (parts.length > 2) {
        const result = `${parts[0].value}.${parts[2].value[0]}k`;
        return result;
    }

    return number;
}