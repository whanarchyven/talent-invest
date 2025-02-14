export const getTimeAhead=()=>{
    const currentDate = new Date();

    const oneMonthAhead = new Date(currentDate);

    oneMonthAhead.setMonth(currentDate.getMonth() + 1);

    if (oneMonthAhead.getDate() < currentDate.getDate()) {
        oneMonthAhead.setDate(0);
    }


    const currentDateYear = new Date();

    const oneYearAhead = new Date(currentDate);

    oneYearAhead.setFullYear(currentDateYear.getFullYear() + 1);

    return {month:oneMonthAhead,year:oneYearAhead}
}