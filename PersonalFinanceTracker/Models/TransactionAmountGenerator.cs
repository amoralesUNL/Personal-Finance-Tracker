using System.IO;


namespace PersonalFinanceTracker.Models

{
    public class TransactionAmountGenerator
    {
        private static readonly Random _random = new Random();

        public static decimal GenerateTransactionAmount()
        {
            
            int integerPart = _random.Next(1, 501);

            
            decimal decimalPart = (decimal)_random.NextDouble();

            return Math.Round(integerPart + decimalPart, 2);
        }
    }
}
