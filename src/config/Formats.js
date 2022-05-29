
// Default Currency and date formats

export const currFormat =
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });

export const dateFormat =
    new Intl.DateTimeFormat('en-US');
