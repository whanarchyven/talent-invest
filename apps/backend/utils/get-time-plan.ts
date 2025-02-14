import { addMonths, addYears, isBefore } from 'date-fns';
export function getTimePlan(isoDate: string): { month: string, year: string } {
    const inputDate = new Date(isoDate);
    const today = new Date();

    let referenceDate = inputDate;

    // Проверка, если дата уже прошла, использовать сегодняшнюю дату
    if (isBefore(inputDate, today)) {
        referenceDate = today;
    }

    // Вычисление даты через месяц и год
    const nextMonth = addMonths(referenceDate, 1);
    const nextYear = addYears(referenceDate, 1);

    return {
        month: nextMonth.toISOString(),
        year: nextYear.toISOString(),
    };
}