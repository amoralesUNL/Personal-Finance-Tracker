using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using PersonalFinanceTracker.Models;

namespace PersonalFinanceTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        public readonly IConfiguration _configuration;
        public WeatherForecastController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private static readonly string[] SpendingTypes = new[]
        {
        "Income", "Cash Withdrawal", "Entertainment", "Dining", "Grocery", "Transportation", "Shopping", "Housing & Utilities",
        "Health & Wellness", "Miscellaneous", "Debt Payment", "Savings", "Investments", "Education"
        };

        private static readonly string[] IncomeTypes = new[]
        {
            "Income", "Investments", "Savings"
        };

        private static readonly string[] TransactionTypes = new[]
        {
                "Income",
                "Cash Withdrawal",
                "Entertainment",
                "Dining",
                "Grocery",
                "Transportation",
                "Shopping",
                "Housing & Utilities",
                "Health & Wellness",
                "Miscellaneous",
                "Debt Payment",
                "Savings",
                "Investments",
                "Education"
            };


        
        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            int transactionsNumber = Random.Shared.Next(50, 51); //Random number of transactions from 1 to 10
            return Enumerable.Range(1, transactionsNumber).Select(index => new Transaction
            {
                Id = index,
                Type = TransactionTypes[Random.Shared.Next(TransactionTypes.Length)],
                Amount = TransactionAmountGenerator.GenerateTransactionAmount(),
                TransactionDate = DateTimeGenerator.GenerateDate(),

            })
            .ToArray();
       


        }
        

      

    }
}