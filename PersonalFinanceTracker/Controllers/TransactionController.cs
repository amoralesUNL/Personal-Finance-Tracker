using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;
using PersonalFinanceTracker.Models;

namespace PersonalFinanceTracker.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class TransactionController : Controller
    {
        public readonly IConfiguration _configuration;
        private readonly AppDbContext _context;
        public TransactionController(IConfiguration configuration, AppDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

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
        public JsonResult Get()
        {
            string query = @"SELECT * 
                            FROM Transactions
                            ORDER BY TransactionDate DESC;";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    try
                    {

                        using (SqlCommand myCommand = new SqlCommand(query, myCon))
                        {

                            using (SqlDataReader myReader = myCommand.ExecuteReader())
                            {
                                table.Load(myReader);
                                myReader.Close();
                                myCon.Close();
                            }

                        }

                    }
                    catch (Exception ex)
                    {
                        return new JsonResult(new { error = "An error occurred while executing query." });
                    }
                }

                return new JsonResult(table);
            }
            catch (Exception ex)
            {
                // Handle exceptions, log errors, or return appropriate error response
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

        }

        [HttpGet("monthly-spending")]
        public JsonResult GetMonthlySpending() {

            string query = @"SELECT 
            FORMAT(TransactionDate, 'yyyy-MM') AS MonthYear,
            SUM(Amount) AS TotalSpending
            FROM Transactions
            WHERE TransactionType NOT IN ('Income','Investments','Savings')
            GROUP BY FORMAT(TransactionDate, 'yyyy-MM');";

            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon)) 
                    {
                        myCommand.Parameters.AddWithValue("@IncomeTypes", string.Join(",", IncomeTypes));

                        using (SqlDataReader myReader = myCommand.ExecuteReader())
                        {
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();
                        }
                    }
                }
            }
            catch {
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

            return new JsonResult(table);
        }

        [HttpGet("monthly-income")]
        public JsonResult GetMonthlyIncome()
        {

            string query = @"SELECT FORMAT(TransactionDate, 'yyyy-MM') AS MonthYear, 
                            SUM(Amount) AS TotalSpending
                            FROM Transactions 
                            WHERE TransactionType in ('Income','Investments','Savings')
                            GROUP BY FORMAT(TransactionDate, 'yyyy-MM');";

            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@IncomeTypes", string.Join(",", IncomeTypes));

                        using (SqlDataReader myReader = myCommand.ExecuteReader())
                        {
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();
                        }
                    }
                }
            }
            catch
            {
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

            return new JsonResult(table);
        }

        [HttpGet("yearly-income")]
        public JsonResult GetYearlyIncome()
        {

            string query = @"SELECT 
                            COALESCE(TransactionType, 'Total') AS TransactionType,
                            SUM(Amount) AS TotalAmount 
                            FROM Transactions 
                            WHERE TransactionType IN ('Income', 'Investments', 'Savings') 
                            GROUP BY ROLLUP(TransactionType);";

            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@IncomeTypes", string.Join(",", IncomeTypes));

                        using (SqlDataReader myReader = myCommand.ExecuteReader())
                        {
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();
                        }
                    }
                }
            }
            catch
            {
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

            return new JsonResult(table);
        }

        [HttpGet("yearly-spending")]
        public JsonResult GetYearlySpending()
        {

            string query = @"SELECT 
                            COALESCE(TransactionType, 'Total') AS TransactionType,
                            SUM(Amount) AS TotalAmount 
                            FROM Transactions 
                            WHERE TransactionType NOT IN ('Income', 'Investments', 'Savings') 
                            GROUP BY ROLLUP(TransactionType);";

            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@IncomeTypes", string.Join(",", IncomeTypes));

                        using (SqlDataReader myReader = myCommand.ExecuteReader())
                        {
                            table.Load(myReader);
                            myReader.Close();
                            myCon.Close();
                        }
                    }
                }
            }
            catch
            {
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

            return new JsonResult(table);
        }

        [HttpPost("upload-csv")]
        public async Task<IActionResult> uploadCSV(IFormFile file)
        {
           if (file == null || file.Length == 0)
                return BadRequest("File Empty or Invalid");

           

            using (var stream = new StreamReader(file.OpenReadStream())) {
                var csvContent = await stream.ReadToEndAsync();
                var transactions = CsvParser.Parse(csvContent);

                Console.WriteLine("Uploaded CSV Content:");
                Console.WriteLine(csvContent);

                //_context.Transactions.AddRange(transactions);
                //await _context.SaveChangesAsync();

                return Ok(new { message = "Upload successful"});
            }
        } 
    }


   
 }



