using System;

namespace PersonalFinanceTracker.Models
{
    public class DateTimeGenerator
    {
        // This method generates a random DateTime for the current year
        public static DateTime GenerateDate()
        {

            int currentYear = DateTime.Now.Year;


            int maxDays = Random.Shared.Next(1, DateTime.IsLeapYear(currentYear) ? 366 : 365);

            int randomHour = Random.Shared.Next(0, 24);
            int randomMinute = Random.Shared.Next(0, 60);
            int randomSecond = Random.Shared.Next(0, 60);

            DateTime randomDate = new DateTime(currentYear, 1, 1).AddDays(maxDays - 1)
                                  .AddHours(randomHour)
                                  .AddMinutes(randomMinute)
                                  .AddSeconds(randomSecond);

            return randomDate;
        }
    }
}
