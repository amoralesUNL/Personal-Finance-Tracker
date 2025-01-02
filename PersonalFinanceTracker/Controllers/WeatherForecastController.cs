using Microsoft.AspNetCore.Mvc;
using PersonalFinanceTracker.Models;

namespace PersonalFinanceTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
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

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            int transactionsNumber = Random.Shared.Next(1, 11); //Random number of transactions from 1 to 10
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